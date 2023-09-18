import { AppleMusic, Deezer, Spotify, Youtube } from '@public/icons'

const socialLinks = [
  {
    icon: <Spotify />,
    url: 'https://www.instagram.com/thewarismusica/'
  },
  {
    icon: <Youtube />,
    url: 'https://www.instagram.com/thewarismusic/'
  },
  {
    icon: <AppleMusic />,
    url: 'https://www.instagram.com/thewarismusi/'
  },
  {
    icon: <Deezer />,
    url: 'https://www.instagram.com/thewarismus/'
  }
]

const SocialLink = () => (
  <div className='flex'>
    {socialLinks.map((link) => (
      <a
        className='md:mx-3 mx-1.5 text-primary hover:text-gray-100'
        key={link.url}
        href={link.url}
      >
        {link.icon}
      </a>
    ))}
  </div>
)

export default SocialLink
