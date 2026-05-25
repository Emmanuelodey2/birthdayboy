import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const nav = [
        {
            id: 1,
            link: "Home",
            path: "/"
        },
        {
            id: 2,
            link: "About me",
            path: "/"
        },
        {
            id: 3,
            link: "Projects",
            path: "/"
        },
        {
            id: 4,
            link: "Contacts",
            path: "/"
        },
        {
            id: 5,
            link: "Profile",
            path: "/"
        },
       
    ]
  return (
    <div className='overflow-hidden font-[Inria-Serif] text-xl'>
        <ul className='hidden md:block text-black space-x-8 '>
            {nav.map((items,index) => (
                <Link 
                className='text-black hover:text-red-800 font-medium relative hover:scale-4 hover:underline hover:transition-all hover:duration-300' 
                key={index} href={items.path}
                >
                    {items.link}
                    </Link>
            ))}
        </ul>
    </div>
  )
}

export default Navbar