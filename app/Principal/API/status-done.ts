import { APIENDPOINTS } from '@/services/api-url'

export default async function statusDone (citaId: number) {
  console.log('id', citaId)
  const response = await fetch(`${APIENDPOINTS.postStatusDone(citaId)}`, {
    method: 'POST'
  })

  if (!response.ok) {
    throw new Error('Error al marcar cita como completada')
  }

  const data = await response.json()

  return {
    status: response.status,
    data
  }
}
