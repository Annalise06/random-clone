import React from 'react';
import bg from "../../../images/about-header-bg.jpg"

const Hero = () => {
  return (
      <div
        className="relative text-white h-[60vh] "
    
      >
        <div className="bg-black/60b relative ">
          <div className='flex justify-center'>
            <h1 className='text-4xl font-semibold mt-44 tracking-wider'>Visa</h1>
          </div>
          <div className='mt-24 px-10'>
            <p>
              <span>Romania</span> / <span>Visa</span>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Hero;