import Link from 'next/link'
import React, { ReactNode } from 'react'

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href} className='mx-4 text-gray-700 hover:text-gray-900'>
      {children}
    </Link>
  )
}

export default NavLink
