import React, { useState } from "react";
import bg from "../../../images/faq-one-bg.jpg";
import { BsPlus } from "react-icons/bs";

const Collapse = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="bordter routnded">
      <div className="flex justify-between">
        <h2 className="text-sm font-semibold ml-2">{title}</h2>
        <button
          className="bg-gray-30g0 text-xl text-red-600 hover:bg-gravy-400 px-2 py-1 rounded"
          onClick={toggleCollapse}
        >
          {collapsed ? "+" : "-"}
        </button>
      </div>

      <div
        className={`mt-2 ${
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
    <div>
      <div className="md:flex w-full lg:h-screen pb-20 md:pb-0 bg-white">
        {/* <div
          className="lg:w-[45%] lg:h-[90vh] h-[50%] w-full bg-contain bg-no-repeat"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        > */}
        <img className="lg:w-[45%] lg:h-[90vh]" src={bg} alt="" />
        {/* </div> */}
        <div className="md:w-1/2 ">
          <div className="md:px-20 pt-10 md:pt-32 text-center md:text-left">
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              Common Faqs
            </p>
            <div className="flex justify-center md:block py-3 md:py-0">
              <div className="relative my-2 w-10 bg-[#202094] h-[2px]">
                <div className="absolute -top-[3px] bg-white left-4t w-2 h-2 rounded-full border border-[#202094] shake-animation"></div>
              </div>
            </div>

            <p className="md:text-5xl text-3xl flex font-semibold text-black">
              Frequently Asked Questions?
            </p>
          </div>

          <div className="flex justify-center mt-10 md:mx-28 mx-5 ">
            <div className="bg-blacvk">
              <div className="border border-gray-200 py-5 px-5">
                <Collapse title="What are Immigration Services?">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus fermentum nunc ac massa tincidunt, ut commodo dui
                    vulputate.
                  </p>
                </Collapse>
                <Collapse title="What are the Benefits of Visa Consultancy?">
                  <p>
                    Ut vehicula ipsum et hendrerit. Cras nec ullamcorper mi, ac
                    euismod lorem.
                  </p>
                </Collapse>
                <Collapse title="What We should do If our Visa get Rejection?">
                  <p>
                    Integer sit amet libero vel dolor feugiat faucibus eget ut
                    nisi.
                  </p>
                </Collapse>
                <Collapse title="Which Documents are Required to Apply Visa Online?">
                  <p>
                    Integer sit amet libero vel dolor feugiat faucibus eget ut
                    nisi.
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
