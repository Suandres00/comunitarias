const Database = require('better-sqlite3')
const db = new Database('database.sqlite')

// Crear la tabla si no existe
db.exec(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    code TEXT NOT NULL,
    desc TEXT NOT NULL,
    price INTEGER NOT NULL,
    img TEXT
  )
`)

module.exports = db