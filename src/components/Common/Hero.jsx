import React from "react";
import { BiCheck } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="flex md:px-36 font-roman px-4 md:pt-24 pt-[13rem] text-white">
      <div>
        <div data-aos="fade-down" data-aos-duration="2000">
          <h1 className="md:text-[5rem] text-4xl md:leading-[5rem] leading-[50px] font-semibold tracking-wider capitalize">
            Planning <br /> studying abroad
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="md:flex text-lg md:text-base md:gap-5 mt-8">
            <div className="flex gap-1">
              <BiCheck
                size={25}
                className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
              />
              <p>No Interviews</p>
            </div>
            <div className="flex gap-1 md:my-0 my-3">
              <BiCheck
                size={25}
                className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
              />
              <p>Relocate in 30 Days</p>
            </div>
            <div className="flex gap-1">
              <BiCheck
                size={25}
                className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
              />
              <p>Affordable Fees</p>
            </div>
          </div>
          <div className="mt-8">
            <button className="text-white bg-roman-red hover:underline hover:text-gray-100 hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-12 py-4">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
