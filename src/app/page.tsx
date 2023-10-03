import Image from 'next/image'
import Link from 'next/link'
import { IconsHome } from './components'

export default function Home () {
  return (
    <>
      <section className='flex flex-col items-center justify-center h-screen'>
        <Image src='/homepage/logo.png' alt='Logo' width={600} height={600} />
        <IconsHome />
      </section>

      <section className='flex flex-col-reverse items-center justify-center h-screen gap-10 lg:flex-row lg:gap-24'>
        <div className='max-w-[700px]'>
          <Image
            src='/homepage/logo2.png'
            alt='Logo2'
            width={600}
            height={600}
          />{' '}
        </div>
        <div className='flex flex-col items-center gap-5 text-center lg:text-3xl text-1xl text-primary'>
          <p>
            LA COSECHA DE LAS <br />
            MALAS SIEMBRAS
          </p>
          <p>
            <b>NUEVO ÁLBUM</b>
          </p>
          <Link
            href='https://open.spotify.com/intl-es/album/20fCxibOkmz9GHdwtojl3H'
            className='px-10 py-4 mt-3 text-black bg-primary hover:bg-gray-300'
            target='_blank' rel='noreferrer'
          >
            ESCÚCHALO YA
          </Link>
        </div>
      </section>

      <section className='flex flex-col-reverse items-center justify-center h-screen gap-10 lg:flex-row lg:gap-24'>
        <div className='flex flex-col items-center gap-5 text-center lg:text-3xl text-1xl text-primary'>
          <p>
            LA COSECHA DE LAS <br />
            MALAS SIEMBRAS
          </p>
          <p>
            <b>
              CD JEWEL CASE, BOOKLET <br />& PÓSTER
            </b>
          </p>
          <Link
            href='https://api.whatsapp.com/send?phone=51966101172&text=Hola%20quisiera%20comprar%20este%20art%C3%ADculo!%20%F0%9F%98%8A'
            className='px-10 py-4 mt-3 text-black bg-primary hover:bg-gray-300'
            target='_blank' rel='noreferrer'
          >
            ADQUIÉRELO YA
          </Link>
        </div>
        <div className='max-w-[700px]'>
          <Image src='/homepage/cd.png' alt='Logo2' width={700} height={700} />{' '}
        </div>
      </section>
    </>
  )
}
