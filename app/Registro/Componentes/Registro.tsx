'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react'
import Link from 'next/link'
import './styles.css'

interface FormData {
  nombre: string
  telefono: string
  email: string
  password: string
}

interface ApiResponse {
  message: string
}

const RegistroForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    telefono: '',
    email: '',
    password: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result: ApiResponse = await response.json()

      if (response.ok) {
        alert(result.message)
      } else {
        alert(`Error: ${result.message}`)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error al registrar usuario')
    }
  }

  return (
    <div className='container'>
      <img className='overlay-image' src='/logo_shar.jpg' alt='Imagen de fondo' />
      <div className='black-box tamaño-registro'>
        <h1>CREA TU CUENTA</h1>
        <h4>Date de alta llenando los siguientes datos:</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='nombre'>Nombre</label>
          <input type='nombre' id='nombre' name='nombre' required value={formData.nombre} onChange={handleChange} />

          <label htmlFor='telefono'>Telefono:</label>
          <input type='telefono' id='telefono' name='telefono' required value={formData.telefono} onChange={handleChange} />

          <label htmlFor='email'>Correo electrónico:</label>
          <input type='email' id='email' name='email' required value={formData.email} onChange={handleChange} />

          <label htmlFor='password'>Contraseña:</label>
          <input type='password' id='password' name='password' required value={formData.password} onChange={handleChange} />

          <button type='submit'><strong>REGISTRARSE</strong></button>
        </form>
        <p>¿Ya tienes cuenta? <strong><u><Link href='/login'>Inicia sesión</Link></u></strong></p>
      </div>
    </div>
  )
}

export default RegistroForm
