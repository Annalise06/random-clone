import React from "react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex md:px-36 font-roman px-4 md:pt-40 pt-[13rem] text-white">
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
            <Link to="/public/about">
            <button className="text-white bg-roman-red hover:underline hover:text-gray-100 hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-12 py-4">
              Discover More
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
