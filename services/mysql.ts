import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'

const poolConnection = mysql.createPool({
  host: process.env.PUBLIC_DB_HOST,
  user: process.env.PUBLIC_DB_USER,
  database: process.env.PUBLIC_DB_NAME,
  password: process.env.PUBLIC_DB_PASSWORD
})

const db = drizzle(poolConnection)

export default db
