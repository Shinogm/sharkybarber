const mysql = require('mysql2')

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'martin',
  password: 'martin1327',
  database: 'sharky'
})

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err)
    return
  }
  console.log('Conexión exitosa a la base de datos MySQL')
})

// Consulta SQL para mostrar tablas
connection.query('SHOW TABLES', (err, results) => {
  if (err) {
    console.error('Error al ejecutar la consulta:', err)
    return
  }

  console.log('Tablas en la base de datos:')
  results.forEach((row) => {
    console.log(row[`Tables_in_${connection.config.database}`])
  })
})

// Cerrar la conexión a la base de datos
connection.end((err) => {
  if (err) {
    console.error('Error al cerrar la conexión:', err)
    return
  }
  console.log('Conexión cerrada exitosamente')
})
