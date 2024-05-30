// drizzle.config.ts
import 'dotenv/config'
import type { Config } from 'drizzle-kit'
import { config } from 'dotenv'
config()

const dbConfig: Config = {
  schema: './db/schema.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    host: process.env.PUBLIC_DB_HOST ?? '',
    user: process.env.PUBLIC_DB_USER ?? '',
    password: process.env.PUBLIC_DB_PASSWORD ?? '',
    database: process.env.PUBLIC_DB_NAME ?? ''
  }
}

export default dbConfig
