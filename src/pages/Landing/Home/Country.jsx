import React, { useState } from "react";
import { FaPeopleCarry } from "react-icons/fa";
import { FaGlobeEurope } from "react-icons/fa";
import { GiShinyPurse } from "react-icons/gi";
import { BsFillPatchCheckFill } from "react-icons/bs";
import flag1 from "../../../images/Romania.jpg";
import flag2 from "../../../images/somebg.webp";
import flag3 from "../../../images/Revolution.jpg";
import flag4 from "../../../images/affordable.png";
import flag5 from "../../../images/theater.png";
import person2 from "../../../images/testimonial-one-img-2.png";
import slider from "../../../images/site-footer-map-1.png";
import "../../CSS/Country.css";
import { Link } from "react-router-dom";

const Country = ({ src, alt }) => {
  const [zoomed, setZoomed] = useState(false);

  const handleZoomClick = () => {
    setZoomed(!zoomed);
  };
  return (
    <div
      className="bg-rfoman-red font-roman bg-white md:py-20 py-10 px-5 md:px-20 bg-no-repeat bg-contain bg-opacity-5d0 bg-transparrent text-whfite"
      style={{
        backgroundImage: `url(${slider}`,
        opacity: 1,
      }}
    >
      <div className="flex justify-center">
        <div>
          <h1 className="text-xs tracking-widest text-gray-500 font-semibold text-center uppercase">
            Our Country, Your Choice
          </h1>
          <div className="flex justify-center">
            <div className="relative my-3 w-10 bg-red-500 h-[2px]">
              {" "}
              <div className="absolute -top-[3px] bg-white vleft-4 w-2 h-2 rounded-full border border-red-500 shake-animation"></div>
            </div>
          </div>
          <h1 className="lg:text-5xl text-2xl font-bold lg:w-[30rem] text-center text-black">
            ABOUT ROMANIA
          </h1>
        </div>
      </div>
      <div className="flexjustify-center mt-10">
        <div className="md:flex md:flex-row-reverse flex flex-col-reverse justify-center gap-10">
          <div className="md:w-[40%] relative bg-roman-red">
            <p className="text-white text-lg font-serif font-semibold text-center py-3">Explore our Services and Enjoy your dreams abroad</p>
            <div className=" flex justify-center ">
              <img
                src={flag1}
                className="w-72 zh-10 border-4 border-dotted border-yellow-300 rounded-full"
                alt=""
              />
            </div>
            <div className="lg:py-5 py-5 flex flex-col gap-5 mx-10 font-semibold uppercase">
              <div className="text-lgi flex justify-between text-black bg-white px-10 py-3 border border-black rounded-md hover:bg-transparent hover:text-white hover:border-white hover:transition hover:ease-in-out ease-out duration-500 hover:duration-500">
                <p className="mt-1">Affordable Education</p>
                <GiShinyPurse className="md:mt-0 mt-2.5" size={30} />
              </div>
              <div className="text-lgi flex justify-between text-black bg-white px-10 py-3 border border-black rounded-md hover:bg-transparent hover:text-white hover:border-white hover:transition hover:ease-in-out ease-out duration-500 hover:duration-500">
                <p className="mt-1">Work Opportunities</p>
                <FaPeopleCarry className="md:mt-0 mt-2.5" size={30} />
              </div>
              <div className="text-lgi flex justify-between text-black bg-white px-10 py-3 border border-black rounded-md hover:bg-transparent hover:text-white hover:border-white hover:transition hover:ease-in-out ease-out duration-500 hover:duration-500">
                <p className="mt-1">Cultural Diversities</p>
                <FaGlobeEurope className="md:mt-0 mt-2.5" size={30} />
              </div>
            </div>
            <div className="flex relative justify-center py-5">
              <img
                className="w-[20rem] relative md:border-4 border-y md:bg-white  md:border-yellow-300 md:border-dotted pl-5 pt-32"
                src={person2}
                alt=""
              />
              <div>
                <BsFillPatchCheckFill
                  className="absolute md:left-44 left-28 top-16 text-green-500 bgd-white rounded-full"
                  size={55}
                />
                <p className="absolute md:right-28 right-20 top-10 w-[20%] text-2xl font-semibold md:text-roman-red text-white">
                  100% Guarantee Approval
                </p>
              </div>
              <div className="absolute bottom-10 z-10">
                <button className="text-white bg-roman-red bg-opacity-70 border border-roman-red hover:underline hover:text-gray-100 fover:bg-[#202084] hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-10 py-3">
                  <a href="/public/contact">Apply Now</a>
                </button>
              </div>
            </div>

            {/* <div className="absolute top-72 left-24">
              <img
                src={slider}
                className="bg-redv-500 w-[25rem] bounce-animation"
                alt=""
              />
            </div> */}
          </div>
          <div className="md:w-[60%] font-serif md:pt-0 pt-h10 text-black">
            <div className="">
              {/* <h1 className="text-black font-roman uppercase md:text-4xl font-bold">
                Romania
              </h1> */}
              <p className="py-5 ">
                Romania is a Country in the East of Europe. There are 27
                countries in the East of Europe, and Romania is a part of them.
                As a member state of the Europian Union and a signatory to all
                European institutions, its laws are European standards, modeled
                after German, French and English laws. Being a member of the
                European Union, every certificate or degree issued by a
                legitimate institution in Romania is recognized and accepted in
                all the countries of the European Union.{" "}
                {/* <span className="text-red-600 text-sm hover:underline">
                  Read more
                </span> */}
              </p>
            </div>
            <div className="md:flex md:flex-row justify-center flex flex-col gap-10 w-[50h%]">
              {/* <div className="w-full overflow-hidden">
                <img
                  className="h-[22rem] object-cover object-right w-[90h%] transition-transform transform-origin-left hover:scale-110 hover:ease-gin-out hover:duration-500 duration-500 hover:overflow-hidden"
                  src={flag2}
                  alt=""
                />
              </div> */}

              <div className="w-full flex justify-center overflow-hidden">
                <img
                  className="h-[22rem] object-cover object-left w-full transition-transform transform-origin-left hover:scale-110 hover:ease-gin-out hover:duration-500 duration-500 hover:overflow-hidden"
                  src={flag3}
                  alt={alt}
                />
              </div>
            </div>
            <p className="mt-5">
              This means that when you study in Romania, you can practise in any
              other European country without having to write an exam. You also
              have easy movement between member countries, whereas life in
              Romania is very affordable compared to other European countries.
            </p>
            <p className=" text-yellow-400 font-bold my-10">
              Make Romania your gateway to quality education and get a good
              eduaction for the fraction of the cost. Make Romania your gateway
              to Europe
            </p>
            <div>
              <h1 className="text-black font-roman uppercase md:text-4xl font-bold mb-5">
                Why Choose Romania?
              </h1>
              <p className="">
                Choosing Romania for work and educational opportunities offers a
                multitude of advantages that make it an attractive destination
                for individuals seeking an accessible and affordable visa. Here
                are some reasons why Romania might be an excellent choice for
                your organization specializing in facilitating visa services for
                work and education:
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid md:grid-cols-2 gap-5">
                <div className="flex gap-5 border border-black text-black cursor-pointer rounded-md px-5 py-4 hover:text-red-600 hover:transition-color hover:ease-in-out hover:duration-500 ease-out duration-500">
                  <div>
                    <img className="w-14" src={flag4} alt="" />
                  </div>
                  <div className="flex justify-center font-semibold pt-4">
                    <p>Affordable Living Costs</p>
                  </div>
                </div>
                <div className="flex gap-5 border border-black text-black cursor-pointer rounded-md px-5 py-4 hover:text-red-600 hover:transition-color hover:ease-in-out hover:duration-500 ease-out duration-500">
                  <div>
                    <img className="w-14" src={flag4} alt="" />
                  </div>
                  <div className="flex justify-center font-semibold pt-4">
                    <p>EU-recognized Degrees</p>
                  </div>
                </div>

                <div className="flex gap-5 border border-black text-black cursor-pointer rounded-md px-5 py-4 hover:text-red-600 hover:transition-color hover:ease-in-out hover:duration-500 ease-out duration-500">
                  <div>
                    <img className="w-14" src={flag4} alt="" />
                  </div>
                  <div className="flex justify-center font-semibold pt-4">
                    <p>Endless Opportunities</p>
                  </div>
                </div>
                <div className="flex gap-5 border border-black text-black cursor-pointer rounded-md px-5 py-4 hover:text-red-600 hover:transition-color hover:ease-in-out hover:duration-500 ease-out duration-500">
                  <div>
                    <img className="w-14" src={flag4} alt="" />
                  </div>
                  <div className="flex justify-center font-semibold pt-4">
                    <p>World-class Education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lg:flex lg:justify-center ">
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
      </div> */}
    </div>
  );
};

export default Country;
