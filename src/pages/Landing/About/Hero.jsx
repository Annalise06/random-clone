import React from 'react';
import bg from "../../../images/about-header-bg.jpg"

const Hero = () => {
  return (
    <div
      className="relative text-white h-[60vh] bg-cover bg-bottom bg-transparent bg-no-repeat "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="bg-black/60b relative bg-gradient-to-b from-black/90 via-black/60 to-transparent ">
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h1 className="text-4xl font-semibold mt-44 tracking-wider">About</h1>
        </div>
        <div className="md:mt-24 mt-32 md:px-10 px-5">
          <p data-aos="zoom-in" data-aos-duration="2000">
            <span>Romania</span> / <span>About</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;