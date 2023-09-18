import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

const navLinks = [
  {
    text: 'Discografía',
    url: '/discografia'
  },
  {
    text: 'Merch',
    url: '/merch'
  },
  {
    text: 'Conciertos',
    url: '/conciertos'
  },
  {
    text: 'Contacto',
    url: '/contacto'
  }
]

const NavLink = () => {
  return (
    <div className='relative flex flex-col gap-2 xl:flex-row'>
      <label
        className='flex justify-end text-xl cursor-pointer text-primary xl:hidden'
        htmlFor='hamburguerId'
      >
        <FiMenu />
      </label>
      <input className='hidden peer' id='hamburguerId' type='checkbox' />
      <div className='flex-col items-end hidden w-full xl:gap-3 xl:flex xl:flex-row peer-checked:flex'>
        {navLinks.map((link) => (
          <Link
            className='text-lg text-primary hover:text-gray-100'
            key={link.url}
            href={link.url}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavLink
