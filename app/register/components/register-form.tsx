'use client'

import Link from 'next/link'
import { toast, Toaster } from 'sonner'
import './styles.css'
import { useRouter } from 'next/navigation'
import RegisterBarber from '../API/register-api'

export const RegisterForm = () => {
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    console.log(form)
    const token = form.get('token') as string
    try {
      const data = await RegisterBarber(form, Number(token))
      console.log(data)
      toast.success('User registered successfully')
      push('/login')
    } catch (error) {
      (Number(token) !== 1234)

        ? toast.error('Token is incorrect contact your administrator.',
          {
            duration: 5000,
            position: 'bottom-left',
            style: { backgroundColor: '#e06c75', borderRadius: '10px', border: '2px solid #FFF', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }
          })
        : toast.error('User already exists', {
          duration: 5000,
          position: 'bottom-left',
          style: {
            backgroundColor: '#e06c75',
            color: '#fff',
            borderRadius: '8px',
            padding: '12px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
          }
        })
    }
  }
  return (
    <div className='container'>
      <img className='overlay-image' src='/logo_shar.jpg' alt='Imagen de fondo' />
      <div className='black-box tamaño-registro'>
        <h1>CREA TU CUENTA</h1>
        <h4>Date de alta llenando los siguientes datos:</h4>
        <form onSubmit={handleSubmit} className='bg-black rounded-md p-4 shadow-lg'>
          <label htmlFor='nombre'>Nombre</label>
          <input type='nombre' id='nombre' name='name' required />
          <label htmlFor='apellido'>Apellido</label>
          <input type='apellido' id='apellido' name='last_name' required />
          <label htmlFor='telefono'>Telefono:</label>
          <input type='telefono' id='telefono' name='phone' required />
          <label htmlFor='token'>Token:</label>
          <input type='token' id='token' name='token' required />

          <label htmlFor='email'>Correo electrónico:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='password'>Contraseña:</label>
          <input type='password' id='password' name='password' required />
          <Toaster />
          <button type='submit'><strong>REGISTRARSE</strong></button>
        </form>
        <p>¿Ya tienes cuenta? <strong><u><Link href='/login'>Inicia sesión</Link></u></strong></p>
      </div>
    </div>
  )
}
