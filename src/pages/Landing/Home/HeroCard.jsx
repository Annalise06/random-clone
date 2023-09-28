import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import passport from "../../../images/passport.png";
import imi from "../../../images/immigration.png";
import licen from "../../../images/licensing.png";
import sun from "../../../images/feature-one-shape-1.png";

const Card = () => {
  return (
    <div className="relative hidden md:block">
      <section className="container mx-auto md:px-10 px-4 lg:px-0 md:pt-24 lg:pt-14">
        <div className="text-white flex justify-center">
          <div
            className="relative bg-[#a1a1a1] bg-opacity-40 bg-transparent hover:border hover:border-gray-300 bg-dopacity-70 z-20 -left-0 top-0 px-10 py-5 w-full hover:transition hover:ease-in-out ease-out hover:duration-500 duration-500 hover:scale-95"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${sun})`,
                backgroundSize: "cover",
                opacity: 0.5,
                width: "70%",
              }}
            ></div>
            <div className="h-[8rem] z-20 text-2xl text-center font-semibold  font-roman">
              <p className="uppercase">Unlock Your Future with Romania!</p>
              <p className="text-xs text-left py-2">
                Ready to embark on a journey of knowledge, growth, and endless
                possibilities? Your path to success starts here. Apply for
                admission to Romania today!
              </p>
              <p className="text-left">🌟 Why Choose Romania?</p>
              <div className="text-sm text-left flex justify-between pt-3">
                <p>✅ World-class education</p>
                <p>✅ Expert faculty</p>
                <p>✅ State-of-the-art facilities</p>
                <p>✅ Diverse and inclusive community</p>
                <p>✅ Endless opportunities</p>
              </div>
            </div>
            {/* <div className="flex justify-end lg:pt-2 md:pt-20h">
              <BsArrowDownRight className="flex justify-end" size={20} />
            </div> */}
          </div>
        </div>
        {/* <div className="lg:flex">
          <div className="lg:w-[85%] w-full">
            <div className="flex lg:gap-5 gap-10 py-3 px-5 bg-[#a1a1a1] bg-opacity-40 bg-transparent">
              <div>
                <img className="w-24 pt-3" src={passport} alt="" />
              </div>
              <div className="text-white md:flex md:gap-20 lg:block">
                <div className="md:pt-5 lg:pt-0">
                  <h1 className="text-2xl font-semibold">Apply For Visa</h1>
                  <p className="text-sm pt-2">
                    Lorem ipsum dolor sit amet consectetur dtgrtr adipisicing
                    elit.
                  </p>{" "}
                </div>

                <div className="flex justify-end lg:pt-2 md:pt-20">
                  <BsArrowDownRight
                    className="text-white flex justify-end"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[85%] w-full border-x border-gray-300 border-opacity-40">
            <div className="flex lg:gap-5 gap-10 lg:py-3 mb:py-5 px-5 bg-[#a1a1a1] bg-opacity-40 bg-transparent">
              <div>
                <img className="w-24 pt-3" src={imi} alt="" />
              </div>
              <div className="text-white md:flex md:gap-20 lg:block">
                <div className="md:pt-5 lg:pt-0">
                  <h1 className="text-2xl font-semibold">Apply For Visa</h1>
                  <p className="text-sm pt-2">
                    Lorem ipsum dolor sit amet consectetur dtgrtr adipisicing
                    elit.
                  </p>{" "}
                </div>
                <div className="flex justify-end lg:pt-2 md:pt-20">
                  <BsArrowDownRight className="text-white " size={20} />
                </div>
              </div>
            </div>
            <div class="absolute top-0 left-0 w-full h-full "></div>
          </div>
          <div className="lg:w-[85%] w-full">
            <div className="flex lg:gap-5 gap-10 md:py-5 lg:py-3 px-5 bg-[#a1a1a1] bg-opacity-40 bg-transparent">
              <div>
                <img className="w-24 pt-3" src={licen} alt="" />
              </div>
              <div className="text-white md:flex md:gap-20 lg:block">
                <div className="md:pt-5 lg:pt-0">
                  <h1 className="text-2xl font-semibold">Apply For Visa</h1>
                  <p className="text-sm pt-2">
                    Lorem ipsum dolor sit amet consectetur dtgrtr adipisicing
                    elit.
                  </p>{" "}
                </div>
                <div className="flex justify-end lg:pt-2 md:pt-20">
                  <BsArrowDownRight className="text-white " size={20} />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Card;
