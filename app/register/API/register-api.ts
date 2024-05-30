'use server'

import { APIENDPOINTS } from '@/services/api-url'

const tokenPasword = 1234
export default async function RegisterBarber (form: FormData, token: number) {
  if (token !== tokenPasword) {
    throw new Error('Token invalido')
  }
  console.log('token valido')

  console.log('form', form, token)

  console.log(form)

  const response = await fetch(`${APIENDPOINTS.postRegisterBarber}`, {
    method: 'POST',
    body: form
  })

  console.log(response)

  if (!response.ok) {
    throw new Error('Error al registrar usuario')
  }

  const data = await response.json()
  console.log(data)

  return {
    status: response.status,
    model: data
  }
}
