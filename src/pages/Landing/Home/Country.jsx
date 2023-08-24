import React from "react";
import { BsCheck2 } from "react-icons/bs";
import {AiFillCaretDown} from "react-icons/ai"
import flag1 from "../../../images/countries-2-1.jpg";
import flag2 from "../../../images/countries-2-2.jpg";
import flag3 from "../../../images/countries-2-3.jpg";
import "../../CSS/Country.css";

const Country = () => {
  return (
    <div className="bg-white py-10 px-5">
      <div className="flex justify-center">
        <div>
          <h1 className="text-xs tracking-widest text-center uppercase">
            Our Country List
          </h1>
          <div className="flex justify-center">
            <div className="relative my-3 w-10 bg-red-500 h-[2px]">
              {" "}
              <div className="absolute -top-[3px] bg-white vleft-4 w-2 h-2 rounded-full border border-red-500 shake-animation"></div>
            </div>
          </div>
          <h1 className="lg:text-5xl text-2xl font-bold lg:w-[30rem] text-center text-black">
            Select the Country of Your Choice
          </h1>
        </div>
      </div>
      <div className="lg:flex lg:justify-center ">
        <div class="carousel-container py-10">
          <div class="carouse w-full lg:flex lg:flex-row flex flex-col gap-5">
            <div class="card border border-gray-300 rounded-none p-5">
              <div className="flex justify-between">
                <h1 className="text-lg text-black mt-1">Australia</h1>
                <img className="rounded-full w-10" src={flag1} alt="" />
              </div>

              <div className="mt-5">
                <div>
                  <div className="flex relative">
                    <AiFillCaretDown className="text-gray-300  " />{" "}
                    <div className="absolute w-32 bg-gray-300 ml-1 mt-[5px] h-[1px]"></div>
                  </div>
                </div>
                <p className="flex gap-2 textc-xs">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
                <p className="flex gap-2 text-cxs">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
                <p className="flex gap-2 textc-xs">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
              </div>
            </div>
            <div class="card border border-gray-300 rounded-none p-5">
              <div className="flex justify-between">
                <h1 className="text-lg text-black mt-1">Dubai</h1>
                <img className="rounded-full w-10" src={flag2} alt="" />
              </div>
              <div className="mt-5">
                <div>
                  <div className="flex relative">
                    <AiFillCaretDown className="text-gray-300  " />{" "}
                    <div className="absolute w-32 bg-gray-300 ml-1 mt-[5px] h-[1px]"></div>
                  </div>
                </div>
                <p className="flex gap-2">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
                <p className="flex gap-2">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
                <p className="flex gap-2">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
              </div>
            </div>
            <div class="card border border-gray-300 rounded-none p-5">
              <div className="flex justify-between">
                <h1 className="text-lg text-black mt-1">Paris</h1>
                <img className="rounded-full w-10" src={flag1} alt="" />
              </div>
              <div className="mt-5">
                <div>
                  <div className="flex relative">
                    <AiFillCaretDown className="text-gray-300  " />{" "}
                    <div className="absolute w-32 bg-gray-300 ml-1 mt-[5px] h-[1px]"></div>
                  </div>
                </div>
                <p className="flex gap-2">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
                <p className="flex gap-2">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
                <p className="flex gap-2">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
              </div>
            </div>
            <div class="card border border-gray-300 rounded-none p-5">
              <div className="flex justify-between">
                <h1 className="text-lg text-black mt-1">United States</h1>
                <img className="rounded-full w-10" src={flag3} alt="" />
              </div>
              <div className="mt-5">
                <div>
                  <div className="flex relative">
                    <AiFillCaretDown className="text-gray-300  " />{" "}
                    <div className="absolute w-32 bg-gray-300 ml-1 mt-[5px] h-[1px]"></div>
                  </div>
                </div>
                <p className="flex gap-2">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
                <p className="flex gap-2">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
                <p className="flex gap-2">
                  <BsCheck2 className="mt-1" />
                  <span>5 Years Business Visa</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
