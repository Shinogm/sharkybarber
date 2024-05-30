interface SelectFormProps {
  name: string
  label?: string
  options?: string[]
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectForm = ({ name, label, options, value, onChange }: SelectFormProps) => {
  return (
    <>
      <div className='space-y-4'>
        <div>
          <label htmlFor='barber' className='block text-[#8C3826] font-medium mb-2'>
            {label}
          </label>
          <div className='relative'>
            <select
              id='barber'
              className='block w-full h-10 text-black text-sm border border-[#CCCCCC] rounded-lg bg-background text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#8C3826]'
            >
              <option value='' disabled selected hidden>Selecciona un barbero</option>
              <option value='john'>{name}</option>
              <option value='maria'>María</option>
              <option value='carlos'>Carlos</option>
              <option value='sofia'>Sofía</option>
            </select>
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
