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
  return pool.query(`
    ALTER TABLE productos ADD COLUMN IF NOT EXISTS disponible BOOLEAN NOT NULL DEFAULT true
  `)
}).then(() => {
  console.log('Columna disponible lista')
}).catch((err) => {
  console.error('Error preparando la base:', err)
})

module.exports = pool