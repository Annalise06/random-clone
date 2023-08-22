import React from "react";
import { GrStar } from "react-icons/gr";
import icon from "../../../../images/testimonial-one-chatting-icon.png";
import bg from "../../../../images/testimonial-one-bg.png";
import person1 from "../../../../images/testimonial-one-img-1.png";
import person2 from "../../../../images/testimonial-one-img-2.png";
import person3 from "../../../../images/testimonial-one-img-3.png";
import person4 from "../../../../images/testimonial-one-img-4.png";

const Rating = () => {
  return (
    <div className="hidden md:flex relative overflow-hidden bg-white py-20">
      <div className="flex justify-center w-full">
        <div
          className="bg-gray-100 relative p-10 h-[74vh] bg-no-repeat bg-bottom[0] mx-[13rem] bg-top w-full"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "bottom",
          }}
        >
          <div className="flex">
            <div className="w-[50%]">
              <div className="flex justify-between">
                <div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex pt-8 text-red-600">
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                  <GrStar />
                </div>
              </div>
              <p className="w-[5g0%]">
                Thank you for making the process of getting a Canada visa so
                easy. Your phone and email response was prompt and courteous. I
                received my passport with the visa one day earlier than I had
                anticipated.
              </p>
              <div className="flex justify-between pt-5">
                <div className="flex gap-5 text-black font-semibold">
                  <p className="border-t border-gray-600 h-1 w-10 mt-3.5"></p>
                  <p> Sarah Gilbert</p>
                </div>
                <div>
                  <p className="uppercase text-xs text-gray-400 font-semibold underline">
                    Happy customer
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%f absolute right-0 bottom-0 -topg-5 bg-purple-500j">
              <img
                className="w-full bg-red-500j h-[80vh]"
                src={person2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
