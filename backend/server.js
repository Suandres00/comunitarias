const express = require('express')
const cors = require('cors')
const crypto = require('crypto')
const rateLimit = require('express-rate-limit')
require('dotenv').config()
const bcrypt = require('bcrypt')
const db = require('./db')

const app = express()
// En plataformas como Railway/Render asignan el puerto por variable de entorno
const PORT = process.env.PORT || 3001

// Detrás del proxy de Railway/Render: necesario para que el rate limit
// identifique bien la IP real de cada visitante
app.set('trust proxy', 1)

// CORS: en producción se restringe con FRONTEND_URL (ej: https://karumapu.com).
// Si no está definida queda abierto (modo desarrollo).
const corsOptions = { origin: process.env.FRONTEND_URL || true }
app.use(cors(corsOptions))
app.use(express.json())

// ── Sesiones de administrador (en memoria, expiran a las 8 h) ──────────────
const TOKEN_EXPIRACION = 8 * 60 * 60 * 1000 // 8 horas
const sesiones = new Map() // token -> fechaExpiracion

const tokenValido = (token) => {
  if (!token) return false
  const exp = sesiones.get(token)
  if (!exp) return false
  if (Date.now() > exp) {
    sesiones.delete(token)
    return false
  }
  return true
}

// limpieza periódica de tokens vencidos
setInterval(() => {
  const ahora = Date.now()
  for (const [token, exp] of sesiones) {
    if (ahora > exp) sesiones.delete(token)
  }
}, 60 * 60 * 1000)

// Middleware: exige un token de sesión válido
const requiereAdmin = (req, res, next) => {
  const header = req.headers.authorization || ''
  const token = header.startsWith('Bearer ') ? header.slice(7) : null

  if (!tokenValido(token)) {
    return res.status(401).json({ error: 'Sesión inválida o expirada' })
  }
  next()
}

// GET - traer todos los productos (con búsqueda opcional)
app.get('/api/productos', async (req, res) => {
  try {
    const { buscar } = req.query

    if (buscar) {
      const termino = `%${buscar}%`
      const result = await db.query(
        'SELECT * FROM productos WHERE title ILIKE $1 OR code ILIKE $2',
        [termino, termino]
      )
      return res.json(result.rows)
    }

    const result = await db.query('SELECT * FROM productos')
    res.json(result.rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al traer los productos' })
  }
})

// GET - traer un producto por id
app.get('/api/productos/:id', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM productos WHERE id = $1', [req.params.id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' })
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al traer el producto' })
  }
})

// Validación básica de los datos de un producto
const validarProducto = (datos) => {
  const errores = []
  if (!datos.title || String(datos.title).trim() === '') errores.push('El título es obligatorio')
  if (!datos.code || String(datos.code).trim() === '') errores.push('El código es obligatorio')
  if (!datos.desc || String(datos.desc).trim() === '') errores.push('La descripción es obligatoria')
  const precio = Number(datos.price)
  if (!Number.isFinite(precio) || precio < 0) {
    errores.push('El precio debe ser un número mayor o igual a 0')
  }
  return errores
}

// POST - crear un producto nuevo (protegido)
app.post('/api/productos', requiereAdmin, async (req, res) => {
  try {
    const { title, code, desc, price, img, disponible } = req.body
    const errores = validarProducto({ title, code, desc, price })
    if (errores.length > 0) {
      return res.status(400).json({ error: errores.join('. ') })
    }
    const result = await db.query(
      `INSERT INTO productos (title, code, "desc", price, img, disponible)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, code, desc, Math.round(Number(price)), img, disponible ?? true]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al crear el producto' })
  }
})

// PUT - editar un producto existente (protegido)
app.put('/api/productos/:id', requiereAdmin, async (req, res) => {
  try {
    const { title, code, desc, price, img, disponible } = req.body
    const errores = validarProducto({ title, code, desc, price })
    if (errores.length > 0) {
      return res.status(400).json({ error: errores.join('. ') })
    }
    const result = await db.query(
      `UPDATE productos SET title = $1, code = $2, "desc" = $3, price = $4, img = $5, disponible = $6
       WHERE id = $7 RETURNING *`,
      [title, code, desc, Math.round(Number(price)), img, disponible, req.params.id]
    )
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' })
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al editar el producto' })
  }
})

// PATCH - editar solo algunos campos (ej. disponibilidad) (protegido)
app.patch('/api/productos/:id', requiereAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const permitidos = ['title', 'code', 'desc', 'price', 'img', 'disponible']
    const campos = Object.keys(req.body).filter((k) => permitidos.includes(k))

    if (campos.length === 0) {
      return res.status(400).json({ error: 'No hay campos válidos para actualizar' })
    }

    // armar el UPDATE dinámico solo con los campos enviados
    const valores = campos.map((c, i) => {
      if (c === 'price') return Math.round(Number(req.body[c]))
      if (c === 'disponible') return Boolean(req.body[c])
      return req.body[c]
    })

    if (campos.includes('price') && !Number.isFinite(Number(req.body.price))) {
      return res.status(400).json({ error: 'El precio debe ser un número' })
    }

    const query = `UPDATE productos SET ${campos
      .map((c, i) => {
        const col = c === 'desc' ? '"desc"' : c
        return `${col} = $${i + 1}`
      })
      .join(', ')} WHERE id = $${valores.length + 1} RETURNING *`

    const result = await db.query(query, [...valores, id])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' })
    }
    res.json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al actualizar el producto' })
  }
})

// DELETE - borrar un producto (protegido)
app.delete('/api/productos/:id', requiereAdmin, async (req, res) => {
  try {
    const result = await db.query('DELETE FROM productos WHERE id = $1', [req.params.id])
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' })
    }
    res.status(204).send()
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al borrar el producto' })
  }
})

// límite de intentos: máx 5 por minuto por IP
const loginLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: { success: false, error: 'Demasiados intentos. Probá de nuevo en un minuto.' },
})

// validar contraseña
app.post('/api/admin/login', loginLimiter, (req, res) => {
  const { password } = req.body

  if (!password) {
    return res.status(400).json({ success: false, error: 'Falta la contraseña' })
  }

  const esValida = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH)

  if (esValida) {
    const token = crypto.randomBytes(32).toString('hex')
    sesiones.set(token, Date.now() + TOKEN_EXPIRACION)
    res.json({ success: true, token })
  } else {
    res.status(401).json({ success: false, error: 'Contraseña incorrecta' })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})