// db/schema.ts
import { index, int, datetime, mysqlTable, varchar } from 'drizzle-orm/mysql-core'
import { sql } from 'drizzle-orm'

export const clientes = mysqlTable('Clientes', {
  ID_Cliente: int('ID_Cliente').primaryKey().autoincrement(),
  Nombre: varchar('Nombre', { length: 255 }).notNull(),
  Correo: varchar('Correo', { length: 255 }).notNull(),
  Contrasena: varchar('Contrasena', { length: 255 }).notNull(),
  Telefono: varchar('Telefono', { length: 255 }).notNull()
})

export const barberos = mysqlTable('Barberos', {
  ID_Barbero: int('ID_Barbero').primaryKey().autoincrement(),
  Nombre: varchar('Nombre', { length: 255 }).notNull(),
  Correo: varchar('Correo', { length: 255 }).notNull(),
  Contrasena: varchar('Contrasena', { length: 255 }).notNull()
})

export const citas = mysqlTable('Citas', {
  ID_Cita: int('ID_Cita').primaryKey().autoincrement(),
  ID_Cliente: int('ID_Cliente').notNull(),
  ID_Barbero: int('ID_Barbero').notNull(),
  Hora: varchar('Hora', { length: 255 }).notNull(),
  Fecha: datetime('Fecha').notNull().default(sql`NOW()`)
}, (citas) => ({
  clientefk: index('clientefk').on(citas.ID_Cliente),
  barberofk: index('barberofk').on(citas.ID_Barbero)
}))
