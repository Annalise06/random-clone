import React, { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import bg from "../../../images/faq-one-bg.jpg";
import { BsPlus } from "react-icons/bs";
import { BiShieldQuarter } from "react-icons/bi";
import { Link } from "react-router-dom";

const Collapse = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="bordter routnded ">
      <div className="flex justify-between overflow-hidden">
        <h2 className="md:text-lg font-semibold ml-2 py-3">{title}</h2>
        <button
          className="bg-gray-30g0 text-xl text-red-600 hover:bg-gravy-400 px-2 py-1 rounded"
          onClick={toggleCollapse}
        >
          {collapsed ? "+" : "-"}
        </button>
      </div>

      <div
        className={`mt-2  ${
          collapsed
            ? "max-h-0 overflow-hidden transition-max-height ease-in-out duration-1000"
            : "max-h-[1000px] transition-max-height ease-in duration-1000"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Questions = () => {
  return (
    <div className="bg-white px-20">
      <div className="md:flex w-full font-roman lg:h-screen pb-20 md:pb-0 ">
        {/* <div
          className="lg:w-[45%] lg:h-[90vh] h-[50%] w-full bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        > */}
        <div className="relative">
          <div>
            <div className="my-10 text-white ">
              <div className="bg-roman-red py-5 px-10 md:fflex md:justify-between">
                <div>
                  <p>For More Details</p>
                  <p className="font-bold uppercase text-lg">Call Now!</p>
                  <div className="flex gap-2 mt-3">
                    <div className="">
                      <AiFillPhone
                        className="bg-black text-white p-3 rounded-full"
                        size={50}
                      />
                    </div>
                    <div className="text-gray-300 mt-2 text-xs">
                      <p className=" font-semibold">Have Questions?</p>
                      <p className="text-white">
                        {" "}
                        <span className="text-gray-300">Free</span>+234 (3313) -
                        7535
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="font-bold uppercase text-lg text-center pb-3">
                    OR
                  </p>
                  <button className="text-roman-red bg-white hover:underline hover:border-2 hover:border-dotted border-roman-red fover:bg-[#202084] hover:transition-all hover:ease-in-out ease-out duration-500 hover:duration-500 px-10 py-3">
                    <Link to="/public/contact"> Contact Us</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="md:w-[70%]">
          <div className="md:px-20 pt-10  text-center md:text-left">
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              Common Faqs
            </p>
            <div className="flex justify-center md:block py-3 md:py-0">
              <div className="relative my-2 w-10 bg-roman-red h-[2px]">
                <div className="absolute -top-[3px] bg-white left-4t w-2 h-2 rounded-full border border-roman-red shake-animation"></div>
              </div>
            </div>

            <p className="md:text-5xl text-3xl flex font-semibold text-black">
              Frequently Asked Questions?
            </p>
          </div>

          <div className="flex justify-cenvter mt-10 md:mx-28 mx-5 ">
            <div className="bg-blacvk overflow-hidden">
              <div className="border border-gray-200 py-5 px-5">
                <Collapse title="What services do you offer for those interested in Romania?">
                  <p>
                    We offer comprehensive services for visa application,
                    interview preparation, and assistance in securing part-time
                    employment in Romania.
                  </p>
                </Collapse>
                <Collapse title="What types of visas can you assist with for Romania?">
                  <p>
                    We can assist with various types of visas, including student
                    visas, work visas, tourist visas, and more. Please specify
                    your needs, and we'll provide tailored guidance.
                  </p>
                </Collapse>
                <Collapse title="Is Romania a safe and welcoming destination for international visitors and students?">
                  <p>
                    Yes, Romania is known for its hospitality and safety. We'll
                    provide you with information on safety measures and cultural
                    insights to help you feel at home.
                  </p>
                </Collapse>
                <Collapse title="Why should I consider studying in Romania?">
                  <p>
                    Romania offers high-quality education, affordable tuition
                    fees, and a rich cultural experience. It's a great choice
                    for international students.
                  </p>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
