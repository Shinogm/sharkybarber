import React from 'react'
import './styles.css'
import Link from 'next/link'

export const LoginForm = () => {
  return (
    <div className='container'>
      <img className='overlay-image' src='/logo_shar.jpg' alt='Imagen de fondo' />
      <div className='black-box tamaño-inicio'>
        <h1>INICIO DE SESION</h1>
        <h4>Inicia sesion con tu cuenta de <strong>Sharky</strong></h4>
        <form>
          <label htmlFor='email'>Correo electrónico:</label>
          <input type='email' id='email' name='email' required />

          <label htmlFor='password'>Contraseña:</label>
          <input type='password' id='password' name='password' required />
          <button type='submit'><strong>INICIAR SESION</strong></button>
        </form>
        <p>¿No tienes cuenta? <strong><u><a><Link href='/Registro'>Registrate</Link></a></u></strong></p>
        <p><strong><u><a><Link href='/Recuperacion'>Recuperar contraseña</Link></a></u></strong></p>
      </div>
    </div>
  )
}
