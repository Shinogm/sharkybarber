'use server'
import { revalidatePath } from 'next/cache'
import { ClientForm } from './client-form'
import getPendingAll from '../API/get-pending'
import Link from 'next/link'

export default async function ClientsAllC () {
  revalidatePath('/principal')
  revalidatePath('/')
  const { data } = await getPendingAll()

  console.log(data)
  return (
    <div>
      <section className='bg-[#f5f5f5] dark:bg-[#1a1a1a] py-16 px-14 md:px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center justify-between mb-12'>
            <Link href='/login' className=' bg-black justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 flex items-center gap-2 px-6 py-3'>

              Salir
            </Link>
            <h2 className='text-4xl font-bold text-[#4b2c20] dark:text-[#e6b89c]'>Shark Barber</h2>
            <Link href='/Agendar' className='justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 flex items-center gap-2 px-6 py-3'>
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
                <path d='M5 12h14' />
                <path d='M12 5v14' />
              </svg>
              Crear cita
            </Link>

          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {
                data !== undefined
                  ? (
                      data?.status_pending.map((client) => (
                        <ClientForm
                          key={client.cliente_id}
                          citaID={client.cita_id}
                          id={client.cliente_id ?? 0}
                          name={client.cliente_name ?? ''}
                          lastName={client.cliente_last_name ?? ''}
                          email={client.cliente_email ?? ''}
                          phone={client.cliente_phone ?? ''}
                          status={client.status ?? ''}
                        />
                      ))

                    )
                  : (
                    <div className='flex justify-center items-center'>
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
                        <circle cx='12' cy='12' r='10' />
                        <line x1='12' y1='8' x2='12' y2='12' />
                        <line x1='12' y1='16' x2='12.01' y2='16' />
                      </svg>
                    </div>

                    )
            }
          </div>
        </div>
      </section>
    </div>
  )
}
