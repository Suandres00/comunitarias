require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

// Crear la tabla si no existe
pool.query(`
  CREATE TABLE IF NOT EXISTS productos (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    code TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    price INTEGER NOT NULL,
    img TEXT
  )
`).then(() => {
  console.log('Tabla productos lista')
}).catch((err) => {
  console.error('Error creando la tabla:', err)
})

module.exports = pool