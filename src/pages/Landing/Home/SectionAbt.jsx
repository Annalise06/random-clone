import React from "react";
import { BsCheck2 } from "react-icons/bs";
import abt1 from "../../../images/about-two-img-1.jpg";
import shp1 from "../../../images/about-two-shape-1.png";
import sun from "../../../images/about-two-shape-2.png";
import "../../CSS/SectionAbt.css";

const Abt = () => {
  return (
    <div className="bg-gray-50 relative py-20 px-5 lg:px-20">
      <img
        className="w-56 absolute top-0 left-0 opacity-10 bounce-animation py-10"
        src={sun}
        alt=""
      />
      <section>
        <div className="lg:flex gap-10">
          <div className="lg:w-[35rem] w-full relative flex justify-center bg-rfed-500">
            <img
              className="object-cover relative lg:w-[28rem] w-[20rem] rounded-t-full rounded-bl-full"
              src={abt1}
              alt=""
            />{" "}
            <div className="border-[6px] lg:w-[28rem] w-[20rem] lg:left-8 -left-1 rounded-t-full rounded-br-full h-full top-0 border-red-600 absolute"></div>
            <div className="get absolute bottom-16 -left-10  bg-white">
              <img
                className="w-14 bg-transparent bg-clip-border absolute top-0 left-0"
                src={shp1}
                alt=""
              />
              <div className="flex flex-col text-center px-10 py-4 bg-clip-contfent ">
                <span className="text-3xl font-bold text-red-600">28</span>{" "}
                <span>Years of Experience</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm tracking-widest text-gray-500">
              ABOUT TRECK AGENCY
            </p>
            <div className="relative my-5 w-10 bg-red-500 h-[2px]">
              {" "}
              <div className="absolute -top-[3.5px] bg-white left-4 w-2 h-2 rounded-full border border-red-500"></div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-semibold lg:w-[33rem] text-black">
              Providing the Best Visa Services to Clients
            </h1>
            <p className="py-5 lg:w-[30rem] text-sm">
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected hum
              randomised words which don't simply free text now slightly.
            </p>
            <div className="md:w-[30rem]">
              <div className="md:flex">
                <div className="flex gap-2">
                  <BsCheck2 className="bg-blue-100 w-8 h-8 p-2 text-red-500 mt-2 rounded-full" />
                  <p className="text-black font-semibold md:pt-0 pt-3">
                    Ready to Help You in Immigration
                  </p>
                </div>
                <div className="flex gap-2 py-3 md:py-0">
                  <BsCheck2 className="bg-blue-100 w-8 text-red-500 mt-2 h-8 p-2 rounded-full" />
                  <p className="text-black font-semibold md:pt-0 pt-3">
                    Ready to Help You in Immigration
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between">
                <p>construction</p> <p>90%</p>
              </div>
              <div className="bg-gradient-to-r from-black to-blue-600 border border-gray-300 py-1"></div>
            </div>
            <div className="mt-10">
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
