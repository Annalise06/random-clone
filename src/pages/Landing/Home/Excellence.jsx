import React from "react";
import { MdOutlineArrowRight } from "react-icons/md"
import bg from "../../../images/excellence-one-bg.png";
import bg1 from "../../../images/excellence-one-shape-1.png";
import bg2 from "../../../images/excellence-one-shape-2.png";

const Excellence = () => {
  return (
    <div className="bg-white pt-10">
      <section className="lg:mx-32">
        <div
          className="bg-cover relative h-72 via- overflow-hidden"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: "#3636cc",
            opacity: 2,
          }}
        >
          {/* <div className='absolute h-56 w-full top-0 bg-red-500 opacity-50'></div> */}
          <div className="flex absolute inset-y-0 w-full">
            {/* <MdOutlineArrowRight
              size={50}
              className="absolute text-black top-5 -left-5 "
            /> */}
            <div className="check-frame bg-black w-[4px] h-full"></div>
            <style jsx>{`
              .check-frame::before {
                content: "";
                position: absolute;
                padding: 0;
                margin-top: 32px;
                
                border-right: 0;
                border-top: 28px solid transparent;
                border-left: 13px solid black;
                border-bottom: 29px solid transparent;

                left: 0;
                transition: all 0.5s;
              }
            `}</style>
            <div className="lg:w-[50%] pl-10 pt-10 ">
              <p className="lg:text-4xl pt-8 text-2xl font-bold text-white">
                Excellence 
                in Admmission & Immigration
              </p>
              <button className="text-white mt-10 bg-black hover:underline hover:text-gray-100 hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-10 py-3">
                Apply for visa
              </button>
            </div>
            <div className="lg:w-[60%] lg:block hidden relative">
              <div className="relative lg:ml-28 pt-0 right-0 w-full ">
                <img
                  className="absolute -top-8 ml-[3g1rem] w-[42rem] shake-animation"
                  src={bg2}
                  alt=""
                />
                <img
                  className="absolute ml-[10rem] inset-0 w-80 h-[25.5rem] object-center bounce-animation"
                  src={bg1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Excellence;
