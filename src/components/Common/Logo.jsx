import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

const Logo = () => {
  return (
    <div>
      <div className="flex gap-2">
        <FaGlobeAmericas className="text-roman-red" size={40} />
        <p className="text-2xl font-bold uppercase mt-1 text-white">Logo</p>
      </div>
    </div>
  );
};

export default Logo;
