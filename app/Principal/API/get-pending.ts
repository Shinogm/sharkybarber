import { z } from 'zod'
import { APIENDPOINTS } from '@/services/api-url'

const pendingAllSchema = z.object({
  status_pending: z.array(z.object({
    cita_id: z.number(),
    dia: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // Date format yyyy-mm-dd
    hora: z.number(),
    status: z.literal('pending'),
    cliente_id: z.number(),
    cliente_name: z.string(),
    cliente_last_name: z.string(),
    cliente_phone: z.string().nullable().optional(),
    cliente_email: z.string().nullable().optional(),
    barber_id: z.number(),
    barber_name: z.string(),
    barber_last_name: z.string(),
    barber_phone: z.string().nullable().optional(),
    barber_email: z.string().nullable().optional()
  }))
})

export type PendingAll = z.infer<typeof pendingAllSchema>

export default async function getPendingAll () {
  const response = await fetch(`${APIENDPOINTS.getPendingCita}`, {
    method: 'GET'
  })

  if (!response.ok) {
    console.log('Error al obtener citas pendientes:', response.status)
    return {
      status: response.status,
      data: null
    }
  }

  const data = await response.json()
  const parsedData = pendingAllSchema.parse(data)

  return {
    status: response.status,
    data: parsedData
  }
}
