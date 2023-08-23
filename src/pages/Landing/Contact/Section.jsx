import React from "react";
import bg from "../../../images/testimonial-one-bg.png"

const Section = () => {
  return (
    <div
      className="bg-gray-100 md:py-20 py-10 bg-no-repeat bg-bottom h-full"
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundColor: "rgba(255, 255, 255, 0.5)",
      // }}
    >
      <div className="px-5">
        <div>
          <h1 className="text-xs tracking-widest text-center uppercase">
            Our Country List
          </h1>
          <div className="flex justify-center">
            <div className="relative my-3 w-10 bg-red-500 h-[2px]">
              {" "}
              <div className="absolute -top-[3.5px] bg-white left-4 w-2 h-2 rounded-full border border-red-500"></div>
            </div>
          </div>
          <div className="flex justify-center">
            <h1 className="lg:text-5xl text-2xl font-bold lg:w-[30rem] text-center text-black">
              Feel Free to Get in Touch with us
            </h1>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <form action="" className="md:w-[60%] px-5 w-full">
            <div className="md:grid md:grid-cols-2 flex flex-col md:gap-10 gap-5">
              <div>
                <input
                  className="outline-none bg-stone-200 w-full py-3 hover:border hover:border-orange-500 hover:transition hover:ease-out hover:duration-500 ease-out duration-500 px-5 text-sm"
                  placeholder="Full Name"
                  type="text"
                />
              </div>
              <div>
                <input
                  className="outline-none bg-stone-200 w-full py-3 hover:border hover:border-orange-500 hover:transition hover:ease-out hover:duration-500 ease-out duration-500 px-5 text-sm"
                  placeholder="Email Address"
                  type="text"
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 flex flex-col md:gap-10 gap-5 pt-5">
              <div>
                <input
                  className="outline-none bg-stone-200 w-full py-3 hover:border hover:border-orange-500 hover:transition hover:ease-out hover:duration-500 ease-out duration-500 px-5 text-sm"
                  placeholder="Phone number"
                  type="text"
                />
              </div>
              <div className="">
                <input
                  className="outline-none bg-stone-200 w-full py-3 hover:border hover:border-orange-500 hover:transition hover:ease-out hover:duration-500 ease-out duration-500 px-5 text-sm"
                  placeholder="Subject"
                  type="text"
                />
              </div>
            </div>
            <div className="pt-5">
              <textarea
                className="outline-none bg-stone-200 w-full py-3 hover:border hover:border-orange-500 hover:transition hover:ease-out hover:duration-500 ease-out duration-500 px-5 text-sm"
                name=""
                placeholder="Write a message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="flex justify-center pt-5">
              <button className="bg-[#e20935] px-10 py-2 text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section;
