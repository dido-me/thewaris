'use client'

import { usePathname } from 'next/navigation'
import { LinkIcons, LinkText, Logo } from './components'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='absolute top-0 left-0 right-0 flex justify-between px-6 py-6'>
      <LinkIcons />
      {pathname !== '/' && <Logo />}
      <LinkText />
    </nav>
  )
}
export default Navbar
