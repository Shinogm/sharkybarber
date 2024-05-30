'use client'

import statusDone from '../API/status-done'

interface Props {
  id: number
  name: string
  lastName: string
  email: string
  phone: string
  status?: string
  citaID: number
}

export const ClientForm = ({ id, citaID, name, lastName, email, phone, status }: Props) => {
  return (
    <div>
      <div className='bg-white dark:bg-[#2c2c2c] rounded-lg shadow-lg p-8
        hover:bg-[#f5f5f5] dark:hover:bg-[#1a1a1a]'
      >
        <div className='flex items-center justify-between mb-6'>
          <div className='flex items-center gap-3'>
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
              className='w-8 h-8 text-[#4b2c20] dark:text-[#e6b89c]'
            >
              <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
              <circle cx='12' cy='7' r='4' />
            </svg>
            <span className='text-xl font-bold text-[#4b2c20] dark:text-[#e6b89c]'>#{citaID}</span>
          </div>
          <button
            onClick={async () => {
              console.log('delete', citaID)
              await statusDone(citaID)
              window.location.reload()
            }} className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 rounded-full'
          >
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
              className='w-6 h-6'
            >
              <path d='M3 6h18' />
              <path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
              <path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
            </svg>
            <span className='sr-only'>Delete</span>
          </button>
        </div>
        <div className='flex items-center gap-6 mb-6'>
          <div className='flex-1'>
            <div className='text-xl font-bold text-[#4b2c20] dark:text-[#e6b89c]'>-{id}- {name} {lastName}</div>
            <div className='text-base text-[#8c6239] dark:text-[#b38867]'>{status}</div>
          </div>
          <div className='flex items-center gap-3 text-[#8c6239] dark:text-[#b38867]'>
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
              className='w-6 h-6'
            >
              <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
            </svg>
            <span>{phone}</span>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
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
              className='w-8 h-8 text-[#4b2c20] dark:text-[#e6b89c]'
            >
              <circle cx='6' cy='6' r='3' />
              <path d='M8.12 8.12 12 12' />
              <path d='M20 4 8.12 15.88' />
              <circle cx='6' cy='18' r='3' />
              <path d='M14.8 14.8 20 20' />
            </svg>
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
              className='w-8 h-8 text-[#4b2c20] dark:text-[#e6b89c]'
            >
              <rect width='8' height='8' x='2' y='2' rx='2' />
              <path d='M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2' />
              <path d='M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2' />
              <path d='M10 18H5c-1.7 0-3-1.3-3-3v-1' />
              <polyline points='7 21 10 18 7 15' />
              <rect width='8' height='8' x='14' y='14' rx='2' />
            </svg>
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
              className='w-8 h-8 text-[#4b2c20] dark:text-[#e6b89c]'
            >
              <path d='M22 2 2 22' />
            </svg>
          </div>
          <div className='flex items-center gap-3'>
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
              className='w-8 h-8 text-[#4b2c20] dark:text-[#e6b89c]'
            >
              <polyline points='3.5 2 6.5 12.5 18 12.5' />
              <line x1='9.5' x2='5.5' y1='12.5' y2='20' />
              <line x1='15' x2='18.5' y1='12.5' y2='20' />
              <path d='M2.75 18a13 13 0 0 0 18.5 0' />
            </svg>
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
              className='w-8 h-8 text-[#4b2c20] dark:text-[#e6b89c]'
            >
              <path d='M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0' />
              <path d='M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14' />
              <path d='M10 20h4' />
              <circle cx='16' cy='20' r='2' />
              <circle cx='8' cy='20' r='2' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
