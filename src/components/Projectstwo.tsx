import React from 'react';
import Image from 'next/image'
import { Button } from './ui/button';

const Projectstwo = () => {
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
  ]
  return (
    <section className=" overflow-hidden bg-blue min-h-screen px-4 md:px-24 py-24 w-full gap-24 flex items-center rounded-xl flex-col  justify-center">
    {/* Left content column */}
    <div className='w-full md:flex h-full items-center justify-center flex-row gap-44'>
      <div className='md:w-1/2 flex-col flex items-start justify-center gap-12'>
        <div className='flex flex-col gap-4 text-gray-600 font-semibold'>
          <h1>
            Header title
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam ad illum culpa ut possimus harum odit, hic dignissimos quam alias. Quam in labore minus corrupti quaerat sequi. Voluptatem, repellat.
          </p>
        </div>
        <div className='flex-row flex gap-4 items-center justify-center'>
          {languages.map((items, index) => (
            <div key={index} className='flex items-center justify-center'>
              <div className='w-14 bg-gray-300 overflow-hidden aspect-square flex justify-center items-center rounded-full'>
                <Image
                  src="/"
                  alt={items.name}
                  width={1900}
                  height={19000}
                  className='object-fill object-center' />
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className='hidden md:block w-2/5 h-2/3 aspect-square my-6 bg-gray-300'>
        <Image
          src=""
          alt=''
          width={1900}
          height={19000}
          className='object-fill w-full aspect-square object-center' />
        <div className=' border-black border-[1px] border-[#f9cf75] bottom-[99%] relative left-2 border-2 w-full h-full'>

        </div>
      </div>
    </div>

    <div className='w-full md:flex h-full items-center justify-center flex-row-reverse gap-44'>
    <div className='md:w-1/2 flex-col flex items-start justify-center gap-12'>
        <div className='flex flex-col gap-4 text-gray-600 font-semibold'>
          <h1>
            Header title
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsam ad illum culpa ut possimus harum odit, hic dignissimos quam alias. Quam in labore minus corrupti quaerat sequi. Voluptatem, repellat.
          </p>
        </div>
        <div className='flex-row flex gap-4 items-center justify-center'>
          {languages.map((items, index) => (
            <div key={index} className='flex items-center justify-center'>
              <div className='w-14 bg-gray-300 overflow-hidden aspect-square flex justify-center items-center rounded-full'>
                <Image
                  src=""
                  alt={items.name}
                  width={1900}
                  height={19000}
                  className='object-fill object-center' />
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className='hidden md:block w-2/5 h-2/3 aspect-square my-6 bg-gray-300'>
        <Image
          src=""
          alt=''
          width={1900}
          height={19000}
          className='object-fill w-full aspect-square object-center' />
        <div className=' border-black border-[1px] border-[#f9cf75] bottom-[99%] relative left-2  w-full h-full'>

        </div>
      </div>
      <div className='absolute hidden xl:block'>
        <div className='relative w-[300px] h-1/5 right-72 top-52  aspect-square my-6 bg-gray-400'>
          <Image
            src=""
            alt=''
            width={1900}
            height={19000}
            className='object-fill w-full aspect-square object-center' />
          <div className=' border-black border-[1px] border-[#f9cf75] bottom-[99%] relative left-2  w-full h-full'>

          </div>
        </div>
      </div>
    </div>
    <Button className='text-xl px-12 py-6'>
      Check out more Projects
    </Button>
  </section>
  );
};

export default Projectstwo;
