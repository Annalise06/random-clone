import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Hero = () => {
  return (
    <div className="flex md:px-36 px-5 pt-24 text-white">
      <div>
        <div>
          <h1 className="md:text-[5rem] text-3xl md:leading-[5rem] font-semibold tracking-wider capitalize">
            Planning <br /> studying abroad
          </h1>
        </div>
        <div className="md:flex md:gap-5 mt-10">
          <div className="flex gap-2">
            <MdCheckCircle className="text-[#3636cc] bg-white rounded-full mt-1" />
            <p>No Interviews</p>
          </div>
          <div className="flex gap-2 md:my-0 my-3">
            <MdCheckCircle className="text-[#3636cc] bg-white rounded-full mt-1" />
            <p>Relocate in 30 Days</p>
          </div>
          <div className="flex gap-2">
            <MdCheckCircle className="text-[#3636cc] bg-white rounded-full mt-1" />
            <p>Affordable Fees</p>
          </div>
        </div>
        <div className="mt-5">
          <button className="text-white bg-[#202094] hover:underline hover:text-gray-100 hover:bg-[#202084] hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-10 py-3">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
