import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import passport from "../../../images/passport.png";
import imi from "../../../images/immigration.png";
import licen from "../../../images/licensing.png";

const Card = () => {
  return (
    <div className="relative hidden md:block">
      <section className="container mx-auto px-4 lg:px-36 fpy-5 lg:pt-20">
        <div className="lg:flex">
          <div className="md:w-[85%] w-full">
            <div className="flex gap-5 py-3 px-5 bg-[#a1a1a1] bg-opacity-40 bg-transparent">
              <div>
                <img className="w-24 pt-3" src={passport} alt="" />
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-semibold">Apply For Visa</h1>
                <p className="text-sm pt-2">
                  Lorem ipsum dolor sit amet consectetur dtgrtr adipisicing
                  elit.
                </p>{" "}
                <div className="flex justify-end pt-2">
                  <BsArrowDownRight className="text-white " size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[85%] w-full border-x border-gray-300 border-opacity-40">
            <div className="flex gap-5 py-3 px-5 bg-[#a1a1a1] bg-opacity-40 bg-transparent">
              <div>
                <img className="w-24 pt-3" src={imi} alt="" />
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-semibold">Apply For Visa</h1>
                <p className="text-sm pt-2">
                  Lorem ipsum dolor sit amet consectetur dtgrtr adipisicing
                  elit.
                </p>{" "}
                <div className="flex justify-end pt-2">
                  <BsArrowDownRight className="text-white " size={20} />
                </div>
              </div>
            </div>
            <div class="absolute top-0 left-0 w-full h-full "></div>
          </div>
          <div className="md:w-[85%] w-full">
            <div className="flex gap-5 py-3 px-5 bg-[#a1a1a1] bg-opacity-40 bg-transparent">
              <div>
                <img className="w-24 pt-3" src={licen} alt="" />
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-semibold">Apply For Visa</h1>
                <p className="text-sm pt-2">
                  Lorem ipsum dolor sit amet consectetur dtgrtr adipisicing
                  elit.
                </p>{" "}
                <div className="flex justify-end pt-2">
                  <BsArrowDownRight className="text-white " size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
