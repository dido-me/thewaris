import { LinkThewaris } from '@/components'
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import Threads from '../../../public/nav-icons/threads.svg'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-6'>
      <div className='flex items-center'>
        <LinkThewaris
          className='mx-1 text-xl'
          href='https://www.instagram.com/thewarismusica/'
        >
          <BsInstagram />
        </LinkThewaris>
        <LinkThewaris
          className='mx-1 text-xl'
          href='https://www.facebook.com/TheWarisMusica'
        >
          <BsFacebook />
        </LinkThewaris>
        <LinkThewaris
          className='mx-1 text-xl'
          href='https://www.youtube.com/@TheWaris'
        >
          <BsYoutube />
        </LinkThewaris>
        <LinkThewaris
          className='mx-1'
          href='https://www.threads.net/@thewarismusica'
        >
          <Threads width={20} height={20} />
        </LinkThewaris>
        <LinkThewaris
          className='mx-1 text-xl'
          href='https://twitter.com/TheWarisMusica'
        >
          <AiFillTwitterCircle />
        </LinkThewaris>
        <LinkThewaris
          className='mx-1 text-xl'
          href='https://www.tiktok.com/@thewarismusica'
        >
          <FaTiktok />
        </LinkThewaris>
      </div>
      <div className='flex items-center'>
        <LinkThewaris className='mx-3 text-lg' href='/'>
          Discografía
        </LinkThewaris>
        <LinkThewaris className='mx-3 text-lg' href='/'>
          Merch
        </LinkThewaris>
        <LinkThewaris className='mx-3 text-lg' href='/'>
          Conciertos
        </LinkThewaris>
        <LinkThewaris className='mx-3 text-lg' href='/'>
          Contacto
        </LinkThewaris>
      </div>
    </nav>
  )
}

export default Navbar
