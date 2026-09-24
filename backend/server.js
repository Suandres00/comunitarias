const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bcrypt = require('bcrypt')
const db = require('./db')

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

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

// POST - crear un producto nuevo
app.post('/api/productos', async (req, res) => {
  try {
    const { title, code, desc, price, img, disponible } = req.body
    const result = await db.query(
      `INSERT INTO productos (title, code, "desc", price, img, disponible)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, code, desc, price, img, disponible ?? true]
    )
    res.status(201).json(result.rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error al crear el producto' })
  }
})

// PUT - editar un producto existente
app.put('/api/productos/:id', async (req, res) => {
  try {
    const { title, code, desc, price, img, disponible } = req.body
    const result = await db.query(
      `UPDATE productos SET title = $1, code = $2, "desc" = $3, price = $4, img = $5, disponible = $6
       WHERE id = $7 RETURNING *`,
      [title, code, desc, price, img, disponible, req.params.id]
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

// DELETE - borrar un producto
app.delete('/api/productos/:id', async (req, res) => {
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

// validar contraseña
app.post('/api/admin/login', (req, res) => {
  const { password } = req.body

  if (!password) {
    return res.status(400).json({ success: false, error: 'Falta la contraseña' })
  }

  const esValida = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH)

  if (esValida) {
    res.json({ success: true })
  } else {
    res.status(401).json({ success: false, error: 'Contraseña incorrecta' })
  }
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})