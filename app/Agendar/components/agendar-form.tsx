'use server'

import { SelectForm } from './select=form'

export default async function AgendarForm () {
  return (
    <div>

      <div className='flex flex-col items-center justify-center min-h-screen bg-[#F5F5F5] dark:bg-[#1A1A1A] p-4'>
        <div className='max-w-[800px] w-full bg-white dark:bg-[#2B2B2B] rounded-lg shadow-lg p-8 md:p-12'>
          <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
            <div className='flex items-center space-x-4'>
              <div className='bg-[#8C3826] p-2 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='w-6 h-6 text-white'
                >
                  <circle cx='6' cy='6' r='3' />
                  <path d='M8.12 8.12 12 12' />
                  <path d='M20 4 8.12 15.88' />
                  <circle cx='6' cy='18' r='3' />
                  <path d='M14.8 14.8 20 20' />
                </svg>
              </div>
              <h1 className='text-2xl font-bold text-[#8C3826]'>Cita de Barbería</h1>
            </div>
            <div className='flex items-center space-x-2 mt-4 md:mt-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='w-5 h-5 text-[#8C3826]'
              >
                <path d='M8 2v4' />
                <path d='M16 2v4' />
                <rect width='18' height='18' x='3' y='4' rx='2' />
                <path d='M3 10h18' />
              </svg>
              <span className='text-[#8C3826] font-medium'>Reserva tu cita</span>
            </div>
          </div>
          <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div>
                <label htmlFor='name' className='block text-[#8C3826] font-medium mb-2'>
                  Nombre
                </label>
                <input
                  id='name'
                  className='w-full px-4 py-2 rounded-lg border border-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#8C3826] focus:border-transparent'
                  placeholder='Ingresa tu nombre'
                  type='text'
                />
              </div>
              <div>
                <label htmlFor='phone' className='block text-[#8C3826] font-medium mb-2'>
                  Teléfono
                </label>
                <input
                  id='phone'
                  className='w-full px-4 py-2 rounded-lg border border-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#8C3826] focus:border-transparent'
                  placeholder='Ingresa tu número de teléfono'
                  type='tel'
                />
              </div>
              <div>
                <label htmlFor='email' className='block text-[#8C3826] font-medium mb-2'>
                  Correo electrónico
                </label>
                <input
                  id='email'
                  className='w-full px-4 py-2 rounded-lg border border-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#8C3826] focus:border-transparent'
                  placeholder='Ingresa tu correo electrónico'
                  type='email'
                />
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <label htmlFor='barber' className='block text-[#8C3826] font-medium mb-2'>
                  Fecha
                </label>
                <div className='relative'>
                  <input
                    type='date'
                    id='barber'
                    className='block w-full h-10 text-black text-sm border border-[#CCCCCC] rounded-lg bg-background text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#8C3826]'
                  />
                  <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='lucide lucide-chevron-down h-4 w-4 text-[#8C3826]'
                    >
                      <path d='m6 9 6 6 6-6' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className='flex justify-between mt-8'>
            <a
              className='bg-[#8C3826] text-white px-6 py-2 rounded-lg hover:bg-[#6B2820] focus:outline-none focus:ring-2 focus:ring-[#8C3826] focus:ring-opacity-50'
              href='#'
            >
              Volver al inicio
            </a>
            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-[#8C3826] text-white px-6 py-2 rounded-lg hover:bg-[#6B2820] focus:outline-none focus:ring-2 focus:ring-[#8C3826] focus:ring-opacity-50'>
              Reservar cita
            </button>
          </div>
        </div>
        <div className='hidden md:block absolute top-0 left-0 w-full h-full z-[-1]'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#F5F5F5] to-[#FFFFFF] dark:from-[#1A1A1A] dark:to-[#2B2B2B] opacity-50' />
          <div className='absolute top-0 left-0 w-full h-full flex items-center justify-between'>
            <div className='flex flex-col items-start space-y-4'>
              <div className='bg-[#8C3826] p-4 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='w-8 h-8 text-white'
                >
                  <rect width='8' height='8' x='2' y='2' rx='2' />
                  <path d='M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2' />
                  <path d='M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2' />
                  <path d='M10 18H5c-1.7 0-3-1.3-3-3v-1' />
                  <polyline points='7 21 10 18 7 15' />
                  <rect width='8' height='8' x='14' y='14' rx='2' />
                </svg>
              </div>
              <div className='bg-[#8C3826] p-4 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='w-8 h-8 text-white'
                >
                  <polyline points='3.5 2 6.5 12.5 18 12.5' />
                  <line x1='9.5' x2='5.5' y1='12.5' y2='20' />
                  <line x1='15' x2='18.5' y1='12.5' y2='20' />
                  <path d='M2.75 18a13 13 0 0 0 18.5 0' />
                </svg>
              </div>
            </div>
            <div className='flex flex-col items-end space-y-4'>
              <div className='bg-[#8C3826] p-4 rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='w-8 h-8 text-white'
                >
                  <circle cx='6' cy='6' r='3' />
                  <path d='M8.12 8.12 12 12' />
                  <path d='M20 4 8.12 15.88' />
                  <circle cx='6' cy='18' r='3' />
                  <path d='M14.8 14.8 20 20' />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
