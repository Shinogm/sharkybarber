'use client'
import React from 'react'
import './styles.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import LoginBarber from '../API/login-api'
import { toast, Toaster } from 'sonner'

export const LoginForm = () => {
  const { push } = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    console.log('Email:', email)
    const password = formData.get('password') as string
    console.log('Password', password)
    console.log('Form data:', formData)

    try {
      const response = await LoginBarber(email, password)
      console.log('Response:', response)

      if (response.status === 200) {
        push('/principal')
      }
    } catch (error) {
      console.error('Error:', error)
      console.log('Error:', error)
      toast.error('Email or password incorrect',
        {
          duration: 5000,
          position: 'bottom-left',
          style: { backgroundColor: '#e06c75', borderRadius: '10px', border: '2px solid #FFF', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }
        })
    }
  }
  return (
    <div className='container'>
      <Image className='overlay-image' src='/logo_shar.jpg' alt='Imagen de fondo' width={1000} height={500} />
      <div className='black-box tamaño-inicio'>
        <h1>INICIO DE SESION</h1>
        <h4>Inicia sesion con tu cuenta de <strong>Sharky</strong></h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Correo electrónico:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='password'>Contraseña:</label>
          <input type='password' id='password' name='password' required />
          <Toaster />
          <button type='submit'><strong>INICIAR SESION</strong></button>
        </form>
        <p>¿No tienes cuenta? <strong><u><Link href='/register'>Registrate</Link></u></strong></p>
        <p><strong><u><Link href='/recovery'>Recuperar contraseña</Link></u></strong></p>
      </div>
    </div>
  )
}
