import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { Threads } from '@public/icons'

const socialLinks = [
  {
    icon: <BsInstagram />,
    url: 'https://www.instagram.com/thewarismusica/'
  },
  {
    icon: <BsFacebook />,
    url: 'https://www.facebook.com/TheWarisMusica'
  },
  {
    icon: <BsYoutube />,
    url: 'https://www.youtube.com/@TheWaris'
  },
  {
    icon: <Threads />,
    url: 'https://www.threads.net/@thewarismusica'
  },
  {
    icon: <AiFillTwitterCircle />,
    url: 'https://twitter.com/TheWarisMusica'
  },
  {
    icon: <FaTiktok />,
    url: 'https://www.tiktok.com/@thewarismusica'
  }
]

const SocialLink = () => (
  <div className='flex flex-col md:flex-row'>
    {socialLinks.map((link) => (
      <a
        className='my-1 text-xl md:mx-1 text-primary hover:text-gray-100'
        key={link.url}
        href={link.url}
      >
        {link.icon}
      </a>
    ))}
  </div>
)

export default SocialLink
