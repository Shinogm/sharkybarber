import { APIENDPOINTS } from '../../../services/api-url'

export default async function CreateCita (clientID: number, barberID: number, dia: string, hora: string) {
  const response = await fetch(`${APIENDPOINTS.postRegisterCita(clientID, barberID, dia, hora)}`, {
    method: 'POST'
  })

  console.log(response)

  if (!response.ok) {
    throw new Error('Error al crear cita')
  }

  return response.status
}
