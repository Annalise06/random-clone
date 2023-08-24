import React from "react";
import { BsCheck2, BsPeople } from "react-icons/bs";
import clock from "../../../images/circular-clock.png";
import abt1 from "../../../images/benefits-two-img-1.jpg";
import abt2 from "../../../images/benefits-two-img-2.jpg";
import shp1 from "../../../images/about-two-shape-1.png";
import sun from "../../../images/about-four-shape-2.png";
import "../../CSS/SectionAbt.css";

const Section2 = () => {
  return (
    <div className="bg-gray-100 relative py-20 px-5 lg:px-20 lg:pt-28 lg:pb-44">
      <img
        className="md:flex hidden w-44 absolute bottom-28 md:right-20 opacityb-80 bounce-animation py-10"
        src={sun}
        alt=""
      />
      <section className="z-10">
        <div className="md:flex md:gap-32 block gap-10">
          <div className="lg:w-[35rem] gap-5 w-full relative flex justify-center">
            <img
              className="object-cover object-right relative lg:w-[28jrem] w-[20rem]"
              src={abt1}
              alt=""
            />{" "}
            <img
              className="md:flex hidden object-cover object-left top-20 relative lg:w-[28jrem] w-[20rem]"
              src={abt2}
              alt=""
            />{" "}
            {/* <div className="border-[6px] lg:w-[28rem] w-[20rem] lg:left-8 -left-1 rounded-t-full rounded-br-full h-full top-0 border-red-600 absolute"></div> */}
            <div className="get absolute bottom-3 bg-gray-50">
              <img
                className="w-20 bg-transparent bg-clip-border absolute top-0 left-0"
                src={shp1}
                alt=""
              />
              <div className="flex flex-col text-center px-10 py-4 bg-clip-contfent ">
                <span className="text-3xl font-bold text-red-600">28</span>{" "}
                <span>Years of Experience</span>
              </div>
            </div>
          </div>
          <div className="md:pt-10 pt-0 z-10">
            <p className="text-sm tracking-widest uppercase text-gray-500">
              our benefit list
            </p>
            <div className="relative my-5 w-10 bg-red-500 h-[2px]">
              {" "}
              <div className="absolute -top-[3.5px] bg-white left-4 w-2 h-2 rounded-full border border-red-500"></div>
            </div>
            <h1 className="lg:text-5xl text-2xl font-semibold lg:w-[33rem] text-black">
              See Why You Should Choose Romania
            </h1>
            {/* <p>
              <BsPeople />
              <span>The best in Visa & Immigration since 2013</span>
            </p> */}
            <p className="py-5 lg:w-[30rem] text-sm">
              There are many variations of passages of available but the
              majority have suffered. Alteration in some form, lipsum is simply
              free text by injected humou or randomised words even believable.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex gap-10 border py-5 px-5 bg-white">
                <div>
                  <img
                    className="hover:transition hover:transform hover:scale-95 hover:duration-500 hover:ease-in-out ease-out duration-500"
                    src={clock}
                    alt=""
                  />
                </div>
                <div className="check relative border-l hover:transition hover:ease-in-out hover:duration-500 ease-out duration-500 hover:border-l hover:border-blue-600 py-3 px-8 border-gray-200">
                  <p>Benefit 01</p>
                  <p>Our Process is Very Fast</p>
                </div>

                <style jsx>{`
                  .check::before {
                    content: "";
                    height: 20%;
                    position: absolute;
                    padding: 0;
                    top: 30%;
                    margin-top: 3px;
                    border-right: 0;
                    border-top: 8px solid transparent;
                    border-left: 7px solid #e3dbd8;
                    border-bottom: 8px solid transparent;

                    left: 0;
                    transition: all 0.5s;
                  }
                  .check:hover::before {
                    border-left: 7px solid blue;
                  }
                `}</style>
              </div>

              <div className="flex gap-10 border py-5 px-5 bg-white">
                <div>
                  <img
                    className="hover:transition hover:transform hover:scale-95 hover:duration-500 hover:ease-in-out ease-out duration-500"
                    src={clock}
                    alt=""
                  />
                </div>
                <div className="check relative border-l hover:transition hover:ease-in-out hover:duration-500 ease-out duration-500 hover:border-l hover:border-blue-600 py-3 px-8 border-gray-200">
                  <p>Benefit 01</p>
                  <p>Our Process is Very Fast</p>
                </div>

                <style jsx>{`
                  .check::before {
                    content: "";
                    height: 20%;
                    position: absolute;
                    padding: 0;
                    top: 30%;
                    margin-top: 3px;
                    border-right: 0;
                    border-top: 8px solid transparent;
                    border-left: 7px solid #e3dbd8;
                    border-bottom: 8px solid transparent;

                    left: 0;
                    transition: all 0.5s;
                  }
                  .check:hover::before {
                    border-left: 7px solid blue;
                  }
                `}</style>
              </div>

              <div className="flex gap-10 border py-5 px-5 bg-white">
                <div>
                  <img
                    className="hover:transition hover:transform hover:scale-95 hover:duration-500 hover:ease-in-out ease-out duration-500"
                    src={clock}
                    alt=""
                  />
                </div>
                <div className="check relative border-l hover:transition hover:ease-in-out hover:duration-500 ease-out duration-500 hover:border-l hover:border-blue-600 py-3 px-8 border-gray-200">
                  <p>Benefit 01</p>
                  <p>Our Process is Very Fast</p>
                </div>

                <style jsx>{`
                  .check::before {
                    content: "";
                    height: 20%;
                    position: absolute;
                    padding: 0;
                    top: 30%;
                    margin-top: 3px;
                    border-right: 0;
                    border-top: 8px solid transparent;
                    border-left: 7px solid #e3dbd8;
                    border-bottom: 8px solid transparent;

                    left: 0;
                    transition: all 0.5s;
                  }
                  .check:hover::before {
                    border-left: 7px solid blue;
                  }
                `}</style>
              </div>
            </div>

            {/* <div className="md:w-[30rem]">
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
            </div> */}
            {/* <div className="mt-5">
              <div className="flex justify-between">
                <p>construction</p> <p>90%</p>
              </div>
              <div className="bg-gradient-to-r from-black to-blue-600 border border-gray-300 py-1"></div>
            </div> */}
            {/* <div className="mt-10 z-50">
              <button className="text-white bg-[#202094] hover:underline hover:text-gray-100 hover:bg-[#202084] hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-10 py-3">
                Discover More
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
