import React from 'react';
import Image from 'next/image';
const Lang = () => {

  const languages = [
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    },
    {
      name: "javascript",
      path: "/assets/00_earthmap1k.jpg",
    }
  ]
  return (
    <section className="  overflow-hidden min-h-fit py-12  flex flex-col space-y-12 w-full md:px-24 px-4 items-center justify-center">
<div>
  <h1 className='text-slate-500 text-7xl '>
    skills
  </h1>
</div>
      <div className='max-sm:w-2/3  xl:w-2/3 grid grid-cols-3 lg:grid-cols-4 gap-y-6 items-center justify-center gap-x-24 '>
        {languages.map((items, index) => (
          <div key={index} className='flex-col flex items-center justify-center'>
            <div  className='md:w-56 w-20 bg-gray-300 overflow-hidden aspect-square flex justify-center items-center rounded-full'>
              <Image
                src=""
                alt={items.name}
                width={1900}
                height={19000} 
                className='object-fill object-center'/>
            </div>
            <h1 className='text-md md:text-2xl text-gray-500'>
              {items.name}
            </h1>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Lang;
