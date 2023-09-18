import React from 'react'

const SocialIcon = ({
  href,
  children,
  className
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a
      href={href}
      className={`${
        className || ''
      } text-primary hover:text-gray-100 fill-primary hover:fill-gray-100`}
    >
      {children}
    </a>
  )
}

export default SocialIcon
