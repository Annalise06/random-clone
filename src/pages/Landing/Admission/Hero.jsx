import React from 'react';
import bg from "../../../images/about-header-bg.jpg"

const Hero = () => {
  return (
    <div
      className="relativen text-white h-[60vh]"
      // style={{
      //   backgroundImage: `url(${bg})`,
      // }}
    >
      <div className="bg-black/60b relative ">
        <div
          className="flex justify-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h1 className="text-4xl font-semibold mt-44 tracking-wider">Admissions</h1>
        </div>
        <div className="md:mt-24 mt-40 md:px-10 px-5">
          <p data-aos="zoom-in" data-aos-duration="2000">
            <span>Romania</span> / <span>Admissions</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;