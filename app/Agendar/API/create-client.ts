import { APIENDPOINTS } from '../../../services/api-url'
import { z } from 'zod'

const createClienteSchema = z.object({
  message: z.string(),
  client_id: z.number(),
  client_data: z.object({
    id: z.number(),
    created_at: z.string(),
    name: z.string(),
    last_name: z.string(),
    phone: z.string(),
    password: z.string().nullable().optional(),
    email: z.string().nullable().optional(),
    permissions_id: z.number()
  })
})

export default async function CreateClient (form: FormData) {
  const response = await fetch(`${APIENDPOINTS.postRegisterClient}`, {
    method: 'POST',
    body: form
  })

  if (!response.ok) {
    throw new Error('Error al crear cliente')
  }

  const data = await response.json()

  const parsedData = createClienteSchema.parse(data)

  return {
    status: response.status,
    schema: parsedData
  }
}
