import React from 'react';

const Hero = () => {
  return (
    <section className=" bg-white overflow-hidden min-h-screen w-full md:px-24 px-4 md:gap-24 gap-12 md:py-12 flex items-center rounded-b-xl md:flex-row flex-col-reverse justify-center">
      {/* Left content column */}
      <div className=" border w-full  md:w-1/2 overflow-hidden space-y-6">
        <div className="h-14 bg-gray-300 w-full" /> {/* Placeholder for heading */}
        <div className="h-14 bg-gray-300 w-full " /> {/* Placeholder for subtext */}
      </div>

      {/* Right circle element */}
      <div className=" w-full  lg:w-1/2 aspect-square flex justify-center">
        <div className=" w-full aspect-square rounded-full bg-gray-300" />
      </div>
    </section>
  );
};

export default Hero;
