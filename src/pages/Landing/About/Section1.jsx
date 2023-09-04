import React from "react";
import { BsCheck2, BsPeople } from "react-icons/bs";
import abt1 from "../../../images/about-four-img-1.jpg";
import abt2 from "../../../images/about-four-img-2.jpg";
import shp1 from "../../../images/about-two-shape-1.png";
import sun from "../../../images/about-four-shape-2.png";
import "../../CSS/SectionAbt.css";



const Abt = () => {
  return (
    <div className="bg-gray-50 relative py-20 px-5 lg:px-20 lg:pt-28 lg:pb-44">
      <img
        className="md:flex hidden w-44 absolute bottom-28 md:left-20 opacityb-80 bounce-animation py-10"
        src={sun}
        alt=""
      />
      <section className="z-10">
        <div className="lg:flex lg:flex-row-reverse block gap-10">
          <div className="lg:w-[35rem] gap-5 w-full relative flex justify-center">
            <img
              data-aos="flip-left"
              data-aos-duration="1000"
              className="object-cover object-right relative lg:w-[28jrem] w-[20rem]"
              src={abt1}
              alt=""
            />{" "}
            <img
              data-aos="flip-left"
              data-aos-duration="2000"
              className="md:flex hidden object-cover object-left top-20 relative lg:w-[28jrem] w-[20rem]"
              src={abt2}
              alt=""
            />{" "}
            {/* <div className="border-[6px] lg:w-[28rem] w-[20rem] lg:left-8 -left-1 rounded-t-full rounded-br-full h-full top-0 border-red-600 absolute"></div> */}
            <div data-aos="zoom-in"
                data-aos-duration="1000" className="get absolute bottom-3 bg-gray-50">
              <img
                className="w-20 bg-transparent bg-clip-border absolute top-0 left-0"
                src={shp1}
                alt=""
              />
              <div
                
                className="flex flex-col text-center px-10 py-4 bg-clip-contfent "
              >
                <span className="text-3xl font-bold text-red-600">28</span>{" "}
                <span>Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="md:pt-10 pt-5 z-10">
            <p className="text-sm tracking-widest uppercase text-gray-500">
              ABOUT Romania AGENCY
            </p>
            <div className="relative my-5 w-10 bg-red-500 h-[2px]">
              {" "}
              <div className="absolute -top-[3.5px] bg-white lefgt-4 w-2 h-2 rounded-full border border-red-500 shake-animation"></div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-semibold lg:w-[33rem] text-black">
              Leading Visa & Immigration Agency
            </h1>
            <p>
              <BsPeople />
              <span>The best in Visa & Immigration since 2013</span>
            </p>
            <p className="py-5 lg:w-[30rem] text-sm">
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected hum
              randomised words which don't simply free text now slightly.
            </p>
            <div className="md:w-[30rem]">
              <div className="md:flex gap-5">
                <div className="flex gap-2">
                  <BsCheck2 className="bg-blue-100 w-8 h-8 p-2 text-red-500 mt-2i rounded-full" />
                  <p className="text-black font-semibold md:pt-1 pt-3">
                    Fast Processing
                  </p>
                </div>
                <div className="flex gap-2 py-3 md:py-0">
                  <BsCheck2 className="bg-blue-100 w-8 text-red-500 mt-2i h-8 p-2 rounded-full" />
                  <p className="text-black font-semibold md:pt-1 pt-3">
                    Guarantee Approval
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="mt-5">
              <div className="flex justify-between">
                <p>construction</p> <p>90%</p>
              </div>
              <div className="bg-gradient-to-r from-black to-blue-600 border border-gray-300 py-1"></div>
            </div> */}
            <div className="mt-10 z-50">
              <button className="text-white bg-[#202094] hover:underline hover:text-gray-100 hover:bg-[#202084] hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-10 py-3">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abt;
