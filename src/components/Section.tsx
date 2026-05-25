"use client"
import React, { } from 'react';

const Section = () => {
 

  const ChildComponent = () => (
    <div className="flex items-center justify-center w-full h-full text-4xl text-white">
      Displayed Component
    </div>
  );

  return (
    <div className="relative h-screen w-full overflow-hidden bg-cover" >
      
      <div className="absolute inset-0 flex items-center justify-center">
        <ChildComponent />
      </div>
    </div>
  );
}

export default Section;
