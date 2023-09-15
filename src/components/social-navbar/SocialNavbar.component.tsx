/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

const SocialIcon = ({ href, src, alt }: { href: string; src: string; alt: string }) => {
  return (
    <Link href={href} className='mx-1'>
      <img src={src} alt={alt} className='w-5 h-5' />
    </Link>
  )
}

export default SocialIcon
