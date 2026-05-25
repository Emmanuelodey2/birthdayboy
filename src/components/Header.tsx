import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex w-full justify-between h-16  px-12 py-4 bg-gray-300'>
        <div>
            <Image src={''} alt={'Portfolio'} width={190} height={190} />
        </div>
        <Navbar />
        {/* <div></div> */}
    </div>
  )
}

export default Header