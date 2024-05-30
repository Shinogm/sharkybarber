import { z } from 'zod'
import { APIENDPOINTS } from '@/services/api-url'

const barbersSchema = z.object({
  message: z.string(),
  barbers: z.array(z.object({
    id: z.number(),
    created_at: z.string(),
    name: z.string(),
    last_name: z.string(),
    phone: z.string().nullable().optional(),
    password: z.string(),
    email: z.string(),
    permissions_id: z.number()
  }))
})

export type Barber = z.infer<typeof barbersSchema>

export default async function getBarbers () {
  const response = await fetch(`${APIENDPOINTS.getAllBarbers}`, {
    method: 'GET'
  })
  console.log(response)

  if (!response.ok) {
    throw new Error('Error al obtener barberos')
  }

  const data = await response.json()
  const parsedData = barbersSchema.parse(data)
  console.log(parsedData)

  return {
    status: response.status,
    model: parsedData
  }
}
