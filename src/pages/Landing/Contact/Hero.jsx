import React from 'react';
import bg from "../../../images/about-header-bg.jpg"

const Hero = () => {
  return (
      <div
        className="text-white h-[60vh]"
        // style={{
        //   backgroundImage: `url(${bg})`,
        // }}
      >
        <div className="bg-black/60b relative">
          <div className='flex justify-center'>
            <h1 className='text-4xl font-semibold mt-44 tracking-wider'>Contact</h1>
          </div>
          <div className='mt-40 md:px-10 px-5'>
            <p>
              <span>Romania</span> / <span>Contact</span>
            </p>
          </div>
        </div>
      </div>
  );
}

export default Hero;