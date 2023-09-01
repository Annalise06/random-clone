import React from "react";
import person from "../../../images/student_visa.jpg";
import obtain from "../../../images/obtain.png";
import { BsCheck } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";

const Section3 = () => {
  return (
    <div className="bg-white md:px-32 py-20 px-5  font-roman">
      <div className="md:flex">
        <div className="md:w-[70%]">
          <div className="md:flex gap-10">
            <div className="w-[50%f]">
              <img
                className="rounded-full md:w-[33rem] w-full "
                src={person}
                alt=""
              />
            </div>
            <div className="w-[40%]g md:px-5">
              <div className="mt-12">
                <h2 className="text-black md:text-left text-center font-bold text-2xl tracking-wider">
                  VISA
                </h2>
                <p className="text-lg text-red-500 md:py-7 py-5 font-medium tracking-wide">
                  United Kingdom Allows you Easy Setting up Your Business in
                  Country
                </p>

                <div>
                  <div className="flex gap-5 md:text-lfg font-medium">
                    <BsCheck
                      size={20}
                      className="text-white bg-roman-red rounded-full mt-1"
                    />
                    <p>Setup Your Business in Romania</p>
                  </div>
                  <div className="flex gap-5 md:text-lfg font-medium py-3">
                    <BsCheck
                      size={20}
                      className="text-white bg-roman-red rounded-full mt-1"
                    />
                    <p>Grow Your Business to Next Level</p>
                  </div>
                  <div className="flex gap-5 md:text-lfg font-medium">
                    <BsCheck
                      size={20}
                      className="text-white bg-roman-red rounded-full mt-1"
                    />
                    <p>Get in 2 Years Residence</p>
                  </div>
                  <div className="flex gap-5 md:text-lfg font-medium py-3">
                    <BsCheck
                      size={20}
                      className="text-white bg-roman-red rounded-full mt-1"
                    />
                    <p>Get 30% Tax Reductions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <p className="md:text-base text-lg md:tracking-normal tracking-wide">
              There are many variations of passages of lorem ipsum is simply
              free text available in the market, but the majority time you put
              aside to be in our office. Lorem ipsum dolor sit amet,
              consectetLorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="border-l-4 py-5 md:px-10 px-5 md:text-lg my-5 text-black font-medium border-roman-red">
              We stand for quality, safety & credibility, so you could be trust
              us fully about city government and our working process.
            </p>
            <p className="md:text-base text-lg md:tracking-normal tracking-wide">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </div>
          <div className="my-5">
            <div>
              <h1 className="text-2xl font-medium text-black pb-5">
                Visa Process
              </h1>
            </div>
            <div className="flex md:flex-row flex-col justify-center md:justify-between pt-5 px-10">
              <div className="md:w-1/6">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-b from-gray-200 to-white w-fit rounded-full p-4">
                    <img className="w-10" src={obtain} alt="" />
                  </div>
                </div>

                {/* <HiArrowLongDown/> */}
                <div className="flex justify-center my-5">
                  <div className="relative">
                    <div className="h-10 relative w-[2px] bg-gray-300"></div>
                    <AiOutlineCaretDown
                      className="absolute -bottom-1 -left-1 text-gray-300"
                      size={10}
                    />
                  </div>
                </div>
                <div className="text-xs w-[20%]x text-center text-black">
                  <p>
                    Obtain a letter of acceptance from the Ministry of Education
                  </p>
                </div>
              </div>
              <div className="md:w-1/6 md:py-0 py-10">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-b from-gray-200 to-white w-fit rounded-full p-4">
                    <img className="w-10" src={obtain} alt="" />
                  </div>
                </div>

                {/* <HiArrowLongDown/> */}
                <div className="flex justify-center my-5">
                  <div className="relative">
                    <div className="h-10 relative w-[2px] bg-gray-300"></div>
                    <AiOutlineCaretDown
                      className="absolute -bottom-1 -left-1 text-gray-300"
                      size={10}
                    />
                  </div>
                </div>
                <div className="text-xs w-[20%]x text-center text-black">
                  <p>
                    Obtain a letter of acceptance from the Ministry of Education
                  </p>
                </div>
              </div>
              <div className="md:w-1/6">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-b from-gray-200 to-white w-fit rounded-full p-4">
                    <img className="w-10" src={obtain} alt="" />
                  </div>
                </div>

                {/* <HiArrowLongDown/> */}
                <div className="flex justify-center my-5">
                  <div className="relative">
                    <div className="h-10 relative w-[2px] bg-gray-300"></div>
                    <AiOutlineCaretDown
                      className="absolute -bottom-1 -left-1 text-gray-300"
                      size={10}
                    />
                  </div>
                </div>
                <div className="text-xs w-[20%]x text-center text-black">
                  <p>
                    Obtain a letter of acceptance from the Ministry of Education
                  </p>
                </div>
              </div>
              <div className="md:w-1/6 md:py-0 py-10">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-b from-gray-200 to-white w-fit rounded-full p-4">
                    <img className="w-10" src={obtain} alt="" />
                  </div>
                </div>

                {/* <HiArrowLongDown/> */}
                <div className="flex justify-center my-5">
                  <div className="relative">
                    <div className="h-10 relative w-[2px] bg-gray-300"></div>
                    <AiOutlineCaretDown
                      className="absolute -bottom-1 -left-1 text-gray-300"
                      size={10}
                    />
                  </div>
                </div>
                <div className="text-xs w-[20%]x text-center text-black">
                  <p>
                    Obtain a letter of acceptance from the Ministry of Education
                  </p>
                </div>
              </div>
              <div className="md:w-1/6">
                <div className="flex justify-center">
                  <div className="bg-gradient-to-b from-gray-200 to-white w-fit rounded-full p-4">
                    <img className="w-10" src={obtain} alt="" />
                  </div>
                </div>

                {/* <HiArrowLongDown/> */}
                <div className="flex justify-center my-5">
                  <div className="relative">
                    <div className="h-10 relative w-[2px] bg-gray-300"></div>
                    <AiOutlineCaretDown
                      className="absolute -bottom-1 -left-1 text-gray-300"
                      size={10}
                    />
                  </div>
                </div>
                <div className="text-xs w-[20%]x text-center text-black">
                  <p>
                    Obtain a letter of acceptance from the Ministry of Education
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="text-white bg-roman-red hover:underline hover:text-gray-100 hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-12 py-3">
                Book Appointment
              </button>
            </div>
          </div>
        </div>

        <div>
          <p>some butotns</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
