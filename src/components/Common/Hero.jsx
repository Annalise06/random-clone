import React from "react";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import slider from "../../images/main-slider-two-shape-1.png";

const Hero = () => {
  return (
    <div className="flex md:px-24 font-roman px-4 lg:pt-40 pt-[13rem] text-white">
      <div className="">
        <div className="flex jus absolute lg:left-[30rem] left-48 bounce-animation">
          <img className="md:w-[100%] w-[70%]" src={slider} alt="" />
        </div>
        <div data-aos="fade-down" data-aos-duration="2000">
          <h1 className="md:text-[5rem] text-4xl md:leading-[5rem] leading-[50px] font-semibold tracking-wider capitalize">
            Planning <br /> studying abroad?
          </h1>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <div className="md:flex text-lg md:text-base md:gap-5 mt-8">
            {/* <div className="flex gap-1">
              <BiCheck
                size={25}
                className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
              />
              <p>No Interviews</p>
            </div> */}
            <div className="flex gap-1 md:mb-0 mb-3">
              <BiCheck
                size={25}
                className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
              />
              <p>Relocate in 90 Days</p>
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
            <Link to="/romania/about">
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
