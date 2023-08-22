import React from "react";
import bg from "../../../images/counter-one-bg.png";
import icon1 from "../../../images/passport1.png";

const Sectionthree = () => {
  return (
    <div className="bg-[#e20935] pyr20 text-white relative ">
      <div
        className="bg-cover relative bg-opacity-60 py-20 bg-no-repeat bg-top"
        // style={{
        //   backgroundImage: `url(${bg})`,
        //   width: "100%",
        //   backgroundPosition: "bottom",
        //   backgroundBlendMode: "linear",
        // }}
      >
        <div className="absolute bottom-0 opacity-20">
          <img src={bg} alt="" />
        </div>
        <div className="md:flex gap-10 opacity-100 justify-center px-10">
          <div className="flex border border-l-0 w-fit gap-7 border-opacity-100  py-5 px-10 border-white">
            <div>
              <img src={icon1} alt="" />
            </div>
            <div>
              <p className=" text-xl tracking-wider font-semibold">
                <span className="font-bold text-3xl">
                  30<span>+</span>{" "}
                </span>
              </p>
              <p className="font-semibold">Visa Categories</p>
            </div>
          </div>
          <div className="flex border border-l-0 w-fit gap-7 border-opacity-100  py-5 px-10 border-white">
            <div>
              <img src={icon1} alt="" />
            </div>
            <div>
              <p className=" text-xl tracking-wider font-semibold">
                <span className="font-bold text-3xl">
                  30<span>+</span>{" "}
                </span>
              </p>
              <p className="font-semibold">Visa Process</p>
            </div>
          </div>
          <div className="flex border border-l-0 w-fit gap-7 border-opacity-100  py-5 px-10 border-white">
            <div>
              <img src={icon1} alt="" />
            </div>
            <div>
              <p className=" text-xl tracking-wider font-semibold">
                <span className="font-bold text-3xl">
                  30<span>+</span>{" "}
                </span>
              </p>
              <p className="font-semibold">Success Rate</p>
            </div>
          </div>
          <div className="flex border border-l-0 w-fit gap-7 border-opacity-100  py-5 px-10 border-white">
            <div>
              <img src={icon1} alt="" />
            </div>
            <div>
              <p className=" text-xl tracking-wider font-semibold">
                <span className="font-bold text-3xl">
                  30<span>+</span>{" "}
                </span>
              </p>
              <p className="font-semibold">Pro Consultants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionthree;
