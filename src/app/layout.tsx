import './globals.css'
import type { Metadata } from 'next'
import { Cinzel } from 'next/font/google'
import Navbar from './navbar/Navbar'
import { ReactNode } from 'react'

const cinzel = Cinzel({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Waris'
}

export default function RootLayout ({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={cinzel.className}>
        <header>
          <Navbar />
        </header>
        <main className='w-11/12 m-auto'>
          {children}
        </main>
      </body>
    </html>
  )
}
