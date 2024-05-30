import React from 'react'
import './styles.css'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export const RecuperaForm = () => {
  const { push } = useRouter()

  return (
    <div className='container'>
      <img className='overlay-image' src='logo_shar.jpg' alt='Imagen de fondo' />
      <div className='black-box'>
        <h1>RECUPERACION DE CUENTA</h1>
        <h4>Coloca tu Correo</h4>
        <form>
          <label htmlFor='email'>Correo electrónico:</label>
          <input type='email' id='email' name='email' required />

          <button type='submit'><strong>SIGUIENTE</strong></button>
        </form>
      </div>
    </div>
  )
}
