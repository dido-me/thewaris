import { IconsHome } from '@/app/components'

export default function Contacto () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-8 text-primary '>
      <h1 className='text-2xl font-normal text-center mt-44 xl:text-4xl'>
        BOOKING
      </h1>
      <a
        href='mailto:thewarisayacucho@gmail.com'
        className='text-lg underline uppercase xl:text-2xl font-extralight underline-offset-4 hover:text-white'
      >
        thewarisayacucho@gmail.com
      </a>
      <h3 className='text-lg font-bold text-center xl:text-2xl'>
        +51 966101172
      </h3>
      <IconsHome />
      <section className='flex flex-col gap-6 text-xl uppercase text-center xl:w-[40rem] w-[20rem] mb-10 '>
        <p>
          The Waris: André Zevallos, Diego Mujica, Álvaro Ochoa, Gonzalo Ochoa y
          Leonardo Zaga
        </p>
        <div>
          <p>diseño web y dirección de arte por andré zevallos</p>
          <p>con asesoría de mayde jurado</p>
          <p>
            desarrollo web{' '}
            <a
              href='https://www.linkedin.com/in/esteban-fabricio-villantoy-tineo-548079292/'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white'
            >
              esteban villantoy
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
