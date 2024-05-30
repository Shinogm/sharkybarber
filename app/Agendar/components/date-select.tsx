'use client'

export default function dateSelect () {
  return (
    <>
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

    </>
  )
}
