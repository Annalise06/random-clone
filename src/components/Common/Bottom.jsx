import React from "react";
import Logo from "./Logo";
import flag1 from "../../images/S&W-1.png";

const Bottom = () => {
  return (
    <div className=" px-[17.6rem]">
      <div className="flex justify-between relative ">
        <div className="flex gap-20 border-b border-gray-300 border-opacity-20 py-5">
          <p>lksnd</p>
          <p>lknjs</p>
          <p>ksjnkdjsdsds</p>
        </div>

        <div className="relatifve flex justify-center">
          <div className="">
            <img
              className="absolute left-[19.5rem] z-10 top-0 w-32 h-326 object-cover border-b border-gray-300 border-opacity-20 rounded-full"
              src={flag1}
              alt=""
            />
          </div>
        </div>

        <div className="flex gap-20 border-b border-gray-300 border-opacity-20 py-5">
          <p>kjvndkf</p>
          <p>sjnrinf</p>
          <p>lkonrnfininkr</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
