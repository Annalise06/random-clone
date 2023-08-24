import React, { useState } from "react";
import coach1 from "../../../images/coaching-1-1.jpg";
import coach2 from "../../../images/coaching-1-2.jpg";
import coach3 from "../../../images/coaching-1-3.jpg";
import coach4 from "../../../images/coaching-1-4.jpg";
import icon from "../../../images/coaching-one-hover-icon.png";
import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";

const blockData = [
  {
    image: coach1,
    title: "Citizenship Test",
    content: "IELTS is an English language test for study, migration or work",
  },
  {
    image: coach2,
    title: "IELTS Coaching",
    content: "IELTS is an English language test for study, migration or work",
  },
  {
    image: coach3,
    title: "TOEFL Coaching",
    content: "IELTS is an English language test for study, migration or work",
  },
  {
    image: coach4,
    title: "PTE Coaching",
    content: "IELTS is an English language test for study, migration or work",
  },
];

const Coaching = () => {
  const [hoveredStates, setHoveredStates] = useState(
    Array(blockData.length).fill(false)
  );

  const handleHover = (index) => {
    const newHoveredStates = [...hoveredStates];
    newHoveredStates[index] = !newHoveredStates[index];
    setHoveredStates(newHoveredStates);
  };
  return (
    <div className="bg-gray-100 py-20 relative">
      <div>
        <div className="lg:flex md:text-left  text-center lg:px-60 w-full">
          <div className="">
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              Coaching we offer
            </p>
            <div className="flex justify-center lg:block">
              <div className="relative my-5 w-10 bg-[#202094] h-[2px]">
                <div className="absolute -top-[3px] bg-white left-4t w-2 h-2 rounded-full border border-[#202094] shake-animation"></div>
              </div>
            </div>

            <p className="text-4xl flex font-semibold text-black">
              Get the Best Trainings you Deserve
            </p>
          </div>
          <div className="lg:w-1/2 pt-5 px-5 text-sm text-gray-500">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected hum randomised
            words which don't slightly.
          </div>
        </div>
      </div>
      <div>
        <div className="md:flex md:flex-row flex flex-col justify-center px-5 lg:px-20 mt-10 lg:gap-20 gap-10">
          {blockData.map((data, index) => (
            <div
              key={index}
              className="bg-red-50g0 relative overflow-visible md:w-[35%] w-[100%] bg-no-repeat h-56 hovered"
              style={{
                backgroundImage: `url(${data.image})`,
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(index)}
            >
              <div
                className={`bg-[#202094] w-full text-white bg-opacity-80 flex absolute bottom-0 md:left-10 left-0 capitalize ${
                  hoveredStates[index]
                    ? "opacity-0 transition-opacity duration-300"
                    : ""
                }`}
              >
                <div className="h-full flex">
                  <img
                    className="relative opacity-50"
                    decoding="async"
                    src="https://bracketweb.com/treckwp/wp-content/uploads/2023/04/main-header-two-social-shape.png"
                    alt="alt"
                    title="main-header-two-social-shape"
                  />
                  <div className="absolute w-full flex justify-between mt-2 px-5">
                    <p className="font-semibold">{data.title}</p>
                    <BsArrowUpRight className="mt-1 font-bold" />
                  </div>
                </div>
              </div>
              <div
                className={`bg-white py-5 pl-5 text-black ${
                  hoveredStates[index]
                    ? "opacity-100 absolute bottom-0 w-[85%] right-0 transition-opacity duration-1000"
                    : "opacity-0 transition-opacity absolute bottom-0 w-[85%] right-0 duration-1000"
                }`}
              >
                <div className="mt-5f w-full">
                  <div className="">
                    <img className="w-7" src={icon} alt="" />
                  </div>
                  <p className="text-black font-semibold py-3">{data.title}</p>
                  <p className="text-xs w-[80%]">
                    IELTS is an English language test for study, migration or
                    work
                  </p>
                  <div className="flex relative justify-endf mt-5">
                    <BsArrowDownRight className="absolute right-5 bottom-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coaching;
