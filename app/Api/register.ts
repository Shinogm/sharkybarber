// Importa las clases necesarias de Next.js
import { NextApiRequest, NextApiResponse } from 'next'
// Importa la instancia de conexión a la base de datos
import db from '../../services/mysql'
import { mysqlTable } from 'drizzle-orm/mysql-core'

// Define el tipo de datos para un nuevo usuario
interface NewUser {
  name: string
  email: string
  password: string
}

// Define la función de la API
export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  // Verifica si la solicitud es de tipo POST
  if (req.method === 'POST') {
    // Extrae los datos del usuario del cuerpo de la solicitud
    const { name, email, password }: NewUser = req.body

    try {
      // Inserta el nuevo usuario en la base de datos
      await db.insert(mysqlTable).values({ name, email, password })

      // Responde con un mensaje de éxito
      res.status(200).json({ message: 'Usuario insertado correctamente' })
    } catch (error) {
      // Maneja los errores
      console.error('Error al insertar usuario:', error)
      res.status(500).json({ message: 'Error al insertar usuario' })
    }
  } else {
    // Si la solicitud no es de tipo POST, responde con un código de estado 405 (Método no permitido)
    res.status(405).json({ message: 'Método no permitido' })
  }
}
