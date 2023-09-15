import Image from 'next/image'

const Logo = () => {
  return (
    <div className='absolute left-0 right-0 flex items-start justify-center h-full xl:top-8'>
      <Image src='/navbar/logo.png' className='max-w-[100px] max-h-[100px] lg:max-w-[150px] lg:max-h-[150px]' alt='Logo' width={150} height={150} />
    </div>
  )
}

export default Logo
