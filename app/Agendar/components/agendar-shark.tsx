'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import getBarbers, { Barber } from '../API/get-barbers'
import { toast, Toaster } from 'sonner'
import CreateClient from '../API/create-client'
import CreateCita from '../API/create-cita'
export const AgendarShark = () => {
  const { push } = useRouter()
  const [barbers, setBarbers] = useState<Barber>()
  console.log(barbers, setBarbers)

  useEffect(() => {
    getBarbers().then((response) => {
      console.log(response)
      setBarbers(response.model)
    }).catch((error) => {
      console.error('Error al obtener barberos:', error)
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    console.log(form)
    const getEmpleado = form.get('empleado') as string // empleado
    console.log(getEmpleado)
    const getFecha = form.get('fecha') as string // fecha
    console.log(getFecha)
    const getHora = form.get('hora') as string // hora
    console.log(getHora)
    try {
      const data = await CreateClient(form)
      console.log(data)
      if (data.status === 200) {
        const cita = await CreateCita(data.schema.client_id, Number(getEmpleado), getFecha, getHora)
        console.log(cita)
        toast.success('Cita creada correctamente')
        window.location.reload()
      }
    } catch (error) {
      toast.error('Error al crear cita')
    }
  }
  return (
    <>
      <div className='text-black'>
        <div className='bg-gradient-to-br from-red-500 to-blue-600 min-h-screen flex justify-center items-center'>
          <form onSubmit={handleSubmit} className='booking-interface bg-white max-w-md p-8 rounded border border-gray-300'>
            <button
              onClick={() => {
                push('/principal')
              }} type='button' className='button'
            >ATRAS
            </button>
            <h1 className='text-3xl font-bold text-center'>SHARKY. BARBER SHOP</h1>
            <div className='employee-select mt-8 items-center justify-center'>
              <div className='flex flex-col'>
                <label htmlFor='nombre'>Nombre</label>
                <input placeholder='Nombre' type='nombre' id='nombre' name='name' required />
                <label htmlFor='apellido'>Apellido</label>
                <input placeholder='Apellido' type='apellido' id='apellido' name='last_name' required />
                <label htmlFor='telefono'>Telefono:</label>
                <input placeholder='Telefono' type='telefono' id='telefono' name='phone' required />
                <label htmlFor='email'>Email:</label>
                <input placeholder='Email' type='email' id='email' name='email' />
              </div>
              <label htmlFor='employee' className='block mb-2'>Seleccione un empleado:</label>
              <select name='empleado' id='employee' className='w-full p-2 border border-gray-300 rounded mb-2'>
                {
                  barbers?.barbers.map((barber) => (
                    <option key={barber.id} value={barber.id}>{barber.id} {barber.name}</option>
                  ))
                }
                {/* Agrega más opciones de empleados aquí */}
              </select>
            </div>
            <div className='date-time-select mt-8'>
              <label htmlFor='date' className='block mb-2'>SELECCIONE UNA FECHA:</label>
              <input name='fecha' type='date' id='date' className='w-full p-2 border border-gray-300 rounded mb-2' />
              <label htmlFor='time' className='block mb-2'>SELECCIONE UN HORARIO:</label>
              <input name='hora' type='time' id='time' className='w-full p-2 border border-gray-300 rounded mb-2' />
            </div>
            <Toaster />
            <button type='submit' className='button'>AGENDAR CITA</button>
          </form>
        </div>
      </div>
    </>
  )
}
