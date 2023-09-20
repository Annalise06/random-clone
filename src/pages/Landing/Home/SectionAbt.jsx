import React from "react";
import { BsCheck2 } from "react-icons/bs";
import abt1 from "../../../images/about-two-img-1.jpg";
import shp1 from "../../../images/about-two-shape-1.png";
import sun from "../../../images/about-two-shape-2.png";
import "../../CSS/SectionAbt.css";
import { Link } from "react-router-dom";

const Abt = () => {
  return (
    <div className="bg-gray-50 relative py-20 px-5 lg:px-20">
      <img
        className="w-56 absolute top-0 left-0 opacity-10 bounce-animation py-10"
        src={sun}
        alt=""
      />
      <section data-aos="fade-up" data-aos-duration="1000">
        <div className="lg:flex gap-10">
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="lg:w-[35rem] w-full relative flex justify-center bg-rfed-500"
          >
            <img
              className="object-cover relative lg:w-[28rem] w-[20rem] rounded-t-full rounded-bl-full"
              src={abt1}
              alt=""
            />{" "}
            <div className="border-[6px] lg:w-[28rem] w-[20rem] lg:left-8 md:left-[18rem] -left-1 rounded-t-full rounded-br-full h-full top-0 border-red-600 absolute"></div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="get absolute lg:bottom-16 lg:-left-10 bottom-16 -left-10 md:left-44 md:bottom-10 bg-white"
            >
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
          <div className="px-0 lg:px-0 md:px-[13rem]">
            <p className="text-sm md:pt-16 lg:pt-0 pt-10 uppercase tracking-widest text-gray-500">
              ABOUT ROMANIA AGENCY
            </p>
            <div className="relative my-5 w-10 bg-red-500 h-[2px]">
              <div className="absolute -top-[3px] bg-white vleft-4 w-2 h-2 rounded-full border border-red-500 shake-animation"></div>
            </div>
            <h1 className="lg:text-[2.5rem] leading-[2.8rem] text-2xl font-semibold lg:w-[35rem] text-black">
              Providing the Best Admission Services for Students
            </h1>
            <p className="py-5 lg:w-[30rem] text-sm">
              At Romania: Work and Study, we're dedicated to delivering top-tier
              admission services. Whether you're aiming for prestigious
              institutions, advancing your education, or starting a new academic
              journey, we've got you covered. Our expert team offers
              personalized, hassle-free solutions to help you achieve your
              educational dreams. We understand the importance of your future,
              and we're committed to providing the highest quality of service.
            </p>
            <div className="md:w-[30rem]">
              <div className="md:flex">
                <div className="flex gap-2">
                  <BsCheck2 className="bg-blue-100 w-8 h-8 p-2 text-red-500 mt-2 rounded-full" />
                  <p className="text-black font-semibold md:pt-0 pt-3">
                    Trust us as your success partner.
                  </p>
                </div>
                <div className="flex gap-2 py-3 md:py-0">
                  <BsCheck2 className="bg-blue-100 w-8 text-roman-red mt-2 h-8 p-2 rounded-full" />
                  <p className="text-black font-semibold md:pt-0 pt-3">
                    Explore our services today 
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex text-black justify-between">
                <p className="uppercase font-semibold text-sm">construction</p> <p className="font-semibold">90%</p>
              </div>
              <div className="bg-gradient-to-r from-black via-roman-red border to-gray-400 border-gray-300 py-1"></div>
            </div>
            <div className="mt-10">
              <Link to="/public/about"> 
                <button className="text-white bg-roman-red hover:underline hover:text-gray-100 hover:bg-roman-red hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-10 py-3">
                  Discover More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abt;
