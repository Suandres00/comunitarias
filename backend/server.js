const express = require('express')
const cors = require('cors')
const db = require('./db')

const app = express()
const PORT = 3001
require('dotenv').config()
const bcrypt = require('bcrypt')

app.use(cors())
app.use(express.json())

// GET - traer todos los productos
app.get('/api/productos', (req, res) => {
  const productos = db.prepare('SELECT * FROM productos').all()
  res.json(productos)
})

// GET - traer un producto por id
app.get('/api/productos/:id', (req, res) => {
  const producto = db.prepare('SELECT * FROM productos WHERE id = ?').get(req.params.id)
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' })
  }
  res.json(producto)
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
// POST - crear un producto nuevo
app.post('/api/productos', (req, res) => {
  const { title, code, desc, price, img } = req.body
  const insert = db.prepare(`
    INSERT INTO productos (title, code, desc, price, img)
    VALUES (@title, @code, @desc, @price, @img)
  `)
  const result = insert.run({ title, code, desc, price, img })
  res.status(201).json({ id: result.lastInsertRowid, title, code, desc, price, img })
})

// PUT - editar un producto existente
app.put('/api/productos/:id', (req, res) => {
  const { title, code, desc, price, img } = req.body
  const update = db.prepare(`
    UPDATE productos SET title = @title, code = @code, desc = @desc, price = @price, img = @img
    WHERE id = @id
  `)
  const result = update.run({ id: req.params.id, title, code, desc, price, img })
  if (result.changes === 0) {
    return res.status(404).json({ error: 'Producto no encontrado' })
  }
  res.json({ id: Number(req.params.id), title, code, desc, price, img })
})

// DELETE - borrar un producto
app.delete('/api/productos/:id', (req, res) => {
  const del = db.prepare('DELETE FROM productos WHERE id = ?')
  const result = del.run(req.params.id)
  if (result.changes === 0) {
    return res.status(404).json({ error: 'Producto no encontrado' })
  }
  res.status(204).send()
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