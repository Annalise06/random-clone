import React, { useState } from "react";
import coach1 from "../../../images/coaching-1-1.jpg";
import coach2 from "../../../images/coaching-1-2.jpg";
import coach3 from "../../../images/coaching-1-3.jpg";
import coach4 from "../../../images/coaching-1-4.jpg";
import icon from "../../../images/coaching-one-hover-icon.png";

import { BsArrowUpRight, BsArrowDownRight } from "react-icons/bs";

const blockData = [
  // {
  //   image: coach1,
  //   title: "Citizenship Test",
  //   content:
  //     "Master your knowledge and skills to achieve citizenship. Our comprehensive test prep program ensures your success.",
  // },
  {
    image: coach2,
    title: "Visa Interview Preparation",
    content:
      "Elevate your visa interview readiness for Romania with expert coaching with Us. Boost confidence, ace the process, and embark on your Romanian journey!",
  },
  // {
  //   image: coach3,
  //   title: "Masters Coaching",
  //   content:
  //     "Elevate your expertise with our Master's education programs. We offer advanced studies that will open doors to leadership roles and exciting career opportunities.",
  // },
  {
    image: coach4,
    title: "Secure Employment Opportunities",
    content:
      " Our expert guidance will helping you find fulfilling part-time jobs that complements your studies or stay in Romania, ensuring an enriching experience during your stay.",
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
        <div className="lg:block md:text-lefft  text-center lg:px-60 w-full">
          <div className="text-center">
            <p className="text-sm tracking-widest px-5 text-gray-500 uppercase">
              Additional Services we offer
            </p>
            <div className="flex justify-center">
              <div className="relative my-5 w-10 bg-roman-red h-[2px]">
                <div className="absolute -top-[3px] bg-white left-4t w-2 h-2 rounded-full border border-roman-red] shake-animation"></div>
              </div>
            </div>

            <p className="md:text-4xl  justify-center text-2xl px-3 flex font-semibold text-black">
              Get the Best Trainings you Deserve
            </p>
          </div>
          <div className=" pt-5 px-5 text-svm text-gray-500">
            At our work and study agency, we go beyond traditional assistance by
            offering effective services to enhance your journey in
            Romania. Firstly, our visa interview preparations ensure you're
            well-equipped to navigate the complexities of the visa application
            process, setting you on the path to success. Secondly, we help you
            secure fulfilling part-time employment opportunities that perfectly
            complement your studies or stay in Romania. These services combine
            to provide a holistic and enriching experience during your time in
            this beautiful country. We're here to support your aspirations,
            making your time in Romania both rewarding and memorable.
          </div>
        </div>
      </div>
      <div>
        <div className="lg:flex lg:flex-row md:grid md:grid-cols-2 md:gap-10 flex flex-col justify-center md:px-10 px-5 lg:px-20 mt-10 lg:gap-20 gap-10">
          {blockData.map((data, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              key={index}
              className="bg-red-50g0 relative overflow-visible lg:w-[20rem] object-contain md:w-[90%] w-[100%] bg-no-repeat h-56 hovered"
              style={{
                backgroundImage: `url(${data.image})`,
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(index)}
            >
              <div
                className={`bg-roman-red w-full text-white bg-ophacity-80 flex absolute bottom-0 md:left-10 left-0 capitalize ${
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
                  <p className="text-2xs w-[90%]">{data.content}</p>
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
