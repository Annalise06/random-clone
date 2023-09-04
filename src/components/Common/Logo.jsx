import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import flag1 from "../../images/S&W-1.png";


const Logo = () => {
  return (
    <div>
      <div className="flex gap-2g">
        <div>
          <img className="w-32 h-12 object-cover" src={flag1} alt="" />
        </div>
        {/* <FaGlobeAmericas className="text-roman-red" size={40} />
        <p className="text-2xl font-bold uppercase mt-1 text-white">Logo</p> */}
      </div>
    </div>
  );
};

export default Logo;
