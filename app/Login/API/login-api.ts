import { z } from 'zod'
import { APIENDPOINTS } from '@/services/api-url'

const loginSchema = z.object({
  message: z.string(),
  token: z.object({
    id: z.number(),
    created_at: z.string(),
    name: z.string(),
    last_name: z.string(),
    permissions_id: z.number(),
    email: z.string()
  })
})

export type LoginResponse = z.infer<typeof loginSchema>

export default async function LoginBarber (email: string, password: string) {
  const response = await fetch(`${APIENDPOINTS.postLoginBarber(email, password)}`, {
    method: 'POST'
  })

  if (!response.ok) {
    throw new Error('Error al iniciar sesión')
  }

  const data = await response.json()
  const parsedData = loginSchema.parse(data)

  return {
    status: response.status,
    model: parsedData
  }
}
