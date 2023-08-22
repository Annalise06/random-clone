import React from "react";
import C1 from "../../../images/feature-1-1.png";
import C2 from "../../../images/feature-1-2.png";
import C3 from "../../../images/feature-1-3.png";
import sun from "../../../images/about-two-shape-2.png";

const Section = () => {
  return (
    <div className="bg-gradient-to-b from-white via-white to-gray-100 md:px-10 px-3 py-10 md:py-20 relative">
      <section>
        <div className="">
          <div className="lg:flex lg:flex-row flex flex-col w-full gap-5">
            <div className="relative bg-gray-300 bg-opacity-50 py-5 lg:h-fit lg:w-full lgi:w-[430px] mid:w-[200px] wi-[150px]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${sun})`,
                  backgroundSize: "cover",
                  opacity: 0.1,
                  width: "50%",
                }}
              ></div>

              <div
                className="absolute inset-y-0 inset-xi-0 right-0 bottyom-5 bg-no-repeat bg-left"
                style={{
                  backgroundImage: `url(${C1})`,
                  backgroundSize: "360px",
                  opacity: 1,
                  width: "84%",
                }}
              ></div>

              <div className="relative h-56 pj-0 px-10 pt-10">
                <div className="pb-3">
                  <h1 className="uppercase text-gray-500">Online Form</h1>
                  <p className="text-black text-2xl md:w-[60%] font-semibold">
                    Apply Online for New Visa
                  </p>
                </div>
                <button className="bg-white hover:bg-red-500 hover:text-white hover:bg-transition hover:ease-in-out hover:duration-700 ease-out duration-700 px-10 py-3">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative bg-gray-300 bg-opacity-50 py-5 lg:h-fit lg:w-full lgi:w-[430px] mid:w-[200px] wi-[150px]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${sun})`,
                  backgroundSize: "cover",
                  opacity: 0.1,
                  width: "50%",
                }}
              ></div>

              <div
                className="absolute inset-y-0  bg-top lg:-right-4 right-0 lg:left-[5.8rem] top-0 bg-no-repeat"
                style={{
                  backgroundImage: `url(${C2})`,
                  backgroundSize: "360px",
                  opacity: 1,
                  width: "78%",
                }}
              ></div>

              <div className="relative h-56 pj-0 px-10 pt-10">
                <div className="pb-3">
                  <h1 className="uppercase text-gray-500">Positive Result</h1>
                  <p className="text-black text-2xl md:w-[60%] font-semibold">
                    Best Immigration Process
                  </p>
                </div>
                <button className="bg-white hover:bg-red-500 hover:text-white hover:bg-transition hover:ease-in-out hover:duration-700 ease-out duration-700 px-10 py-3">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative bg-gray-300 py-5 bg-opacity-50 lg:h-fit lg:w-full mid:w-[200px] wi-[150px]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${sun})`,
                  backgroundSize: "cover",
                  opacity: 0.1,
                  width: "50%",
                }}
              ></div>

              <div
                className="absolute inset-y-0  bg-top-righjht bg-center right-0 lg:left-20 top-0 bg-no-repeat"
                style={{
                  backgroundImage: `url(${C3})`,
                  backgroundSize: "340px",
                  opacity: 1,
                  width: "84%",
                }}
              ></div>

              <div className="relative h-56 pj-0 px-10 pt-10">
                <div className="pb-3">
                  <h1 className="uppercase text-gray-500">Download From</h1>
                  <p className="text-black text-2xl md:w-[60%] font-semibold">
                    Best Immigration Process
                  </p>
                </div>
                <button className="bg-white hover:bg-red-500 hover:text-white hover:bg-transition hover:ease-in-out hover:duration-700 ease-out duration-700 px-10 py-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:text-left text-center pt-10 text-gray-500 font- text-xl">
            <p>
              Providing a One-Stop Solution for all Your{" "}
              <span className="text-black border-b-2 border-red-600">Visa</span>{" "}
              &{" "}
              <span className="text-black border-b-2 border-red-600 mr-1">
                Immigration
              </span>
              Needs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
