import React from 'react';
import brand1 from "../../../images/brand-2-2-112x42.png"
import brand2 from "../../../images/brand-2-3-112x42.png";
import brand3 from "../../../images/brand-2-4-112x42.png";
import brand4 from "../../../images/brand-2-5.png";
import brand5 from "../../../images/brand-2-6-112x42.png";


const Sectiontwo = () => {
  return (
    <div className="bg-white relative py-20 px-32">
      <div className="relative w-full text-center flex justify-center">
        <div className="relative w-full border-b-2 border-gray-300"></div>
        <div className="absolute  -top-3 bg-white px-5 ">
          Our Partners & Supporters
        </div>
      </div>
      <div className="pt-10 flex justify-between">
        <div className="opacity-30">
          <img src={brand1} alt="" />
        </div>
        <div className="opacity-30">
          <img src={brand2} alt="" />
        </div>
        <div className="opacity-30">
          <img src={brand3} alt="" />
        </div>
        <div className="opacity-30">
          <img src={brand4} alt="" />
        </div>
        <div className="opacity-30">
          <img src={brand5} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Sectiontwo;