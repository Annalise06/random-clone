import React from "react";
import { AiFillPhone } from "react-icons/ai";
import bg1 from "../../../images/visa-offers-shape-1.jpg";
import bg2 from "../../../images/visa-offers-shape-2.jpg";
import bg3 from "../../../images/visa-offers-shape-3.jpg";
import bg4 from "../../../images/visa-offers-shape-4.jpg";
import bg5 from "../../../images/visa-offers-shape-5.jpg";
import bg6 from "../../../images/visa-offers-shape-6.jpg";
import flag from "../../../images/romania.png";
import person1 from "../../../images/student_visa.jpg";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="bg-white md:py-20 lg:px-28 px-5 py-10 font-roman">
      <section>
        <div className="pb-10">
          <div className="lg:flex lg:justify-between md:text-left lg:px-60g w-full">
            <div className="md:w-[50%]">
              <p className="text-sm tracking-widest text-gray-500 uppercase">
                check out various courses/degrees
              </p>
              <div className="relative my-5 w-10 bg-roman-red h-[2px]">
                <div className="absolute -top-[3px] bg-white left-4t w-2 h-2 rounded-full border border-roman-red] shake-animation"></div>
              </div>

              <p className="md:text-4xl text-2xl lg:px-3 flex font-semibold text-black">
                B.SC COURSES
              </p>
            </div>
            <div className="md:w-[50%] pt-5 lg:px-5 text-svm text-gray-500">
              Romania provides affordable and high-quality BSc courses in
              various fields, including engineering, computer science, and
              medicine. These programs are available in English, making Romania
              an appealing destination for international students seeking
              quality education and cultural experiences.
            </div>
          </div>
        </div>

        <div>
          <div className="md:grid md:grid-cols-2 grid grid-cols-1 gap-10">
            <div
              className="relative md:py-10 md:px-10 px-5 py-10 pb-16 bg-center"
              style={{
                backgroundImage: `url(${bg1})`,
              }}
            >
              <div>
                <div className="flex justify-between">
                  <div className="btz mt-3u h-fit">
                    <p className="text-xs uppercase">
                      Fulfill your shitty dreams
                    </p>
                  </div>
                  <style jsx>{`
                    .btz {
                      position: relative;
                      display: inline-block;
                      background-color: white;
                      padding-top: 10px;
                      padding-bottom: 8px;
                      padding-left: 15px;
                      padding-right: 25px;
                      clip-path: polygon(
                        100% 0,
                        92% 50%,
                        100% 100%,
                        0% 100%,
                        0 48%,
                        0% 0%
                      );
                    }
                  `}</style>{" "}
                  <div>
                    <img src={flag} className="w-10" alt="" />
                  </div>
                </div>

                <div>
                  <p className="text-black font-semibold text-2xl py-3">
                    Medicine and Surgery
                  </p>
                  <div>
                    <div className="md:flex flex-row text-lg md:text-base md:gap-3 mt-">
                      <div className="flex gap-1 md:mb-0 mb-3">
                        <BiCheck
                          size={25}
                          className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                        />
                        <p>Relocate in 90 Days</p>
                      </div>
                      <div className="flex gap-1">
                        <BiCheck
                          size={25}
                          className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                        />
                        <p>Affordable Fees</p>
                      </div>
                    </div>
                    <div className="flex justify-end pt-5 lg:mr-12">
                      <img
                        src={person1}
                        className="rounded-full w-[45%]"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="absolute bottom-10">
                        <p className="text-xs uppercase text-white py-1">
                          Application Fee
                        </p>
                        <p className="bg-black font-semibold text-white px-8 py-1 w-fit">
                          € 6000
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative md:px-10 md:py-10 px-5 py-10 pb-16 bg-center"
              style={{
                backgroundImage: `url(${bg2})`,
              }}
            >
              <div>
                <div className="flex justify-between">
                  <div className="btz mt-3u h-fit">
                    <p className="text-xs uppercase">
                      Fulfill your shitty dreams
                    </p>
                  </div>
                  <style jsx>{`
                    .btz {
                      position: relative;
                      display: inline-block;
                      background-color: white;
                      padding-top: 10px;
                      padding-bottom: 8px;
                      padding-left: 15px;
                      padding-right: 25px;
                      clip-path: polygon(
                        100% 0,
                        92% 50%,
                        100% 100%,
                        0% 100%,
                        0 48%,
                        0% 0%
                      );
                    }
                  `}</style>{" "}
                  <div>
                    <img src={flag} className="w-10" alt="" />
                  </div>
                </div>

                <div>
                  <p className="text-black font-semibold text-2xl py-3">
                    Business Administration
                  </p>
                  <div>
                    <div className="md:flex flex-row text-lg md:text-base md:gap-3 mt-">
                      <div className="flex gap-1 md:mb-0 mb-3">
                        <BiCheck
                          size={25}
                          className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                        />
                        <p>Relocate in 90 Days</p>
                      </div>
                      <div className="flex gap-1">
                        <BiCheck
                          size={25}
                          className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                        />
                        <p>Affordable Fees</p>
                      </div>
                    </div>
                    <div className="flex justify-end pt-5 lg:mr-12">
                      <img
                        src={person1}
                        className="rounded-full w-[45%]"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="absolute bottom-10">
                        <p className="text-xs uppercase text-white py-1">
                          Application Fee
                        </p>
                        <p className="bg-black font-semibold text-white px-8 py-1 w-fit">
                          € 3400
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative p-10 pb-16"
              style={{
                backgroundImage: `url(${bg3})`,
              }}
            >
              <div>
                <div className="flex justify-between">
                  <div className="btz mt-3u h-fit">
                    <p className="text-xs uppercase">
                      Fulfill your shitty dreams
                    </p>
                  </div>
                  <style jsx>{`
                    .btz {
                      position: relative;
                      display: inline-block;
                      background-color: white;
                      padding-top: 10px;
                      padding-bottom: 8px;
                      padding-left: 15px;
                      padding-right: 25px;
                      clip-path: polygon(
                        100% 0,
                        92% 50%,
                        100% 100%,
                        0% 100%,
                        0 48%,
                        0% 0%
                      );
                    }
                  `}</style>{" "}
                  <div>
                    <img src={flag} className="w-10" alt="" />
                  </div>
                </div>

                <div>
                  <p className="text-black font-semibold text-2xl py-3">
                    Physics
                  </p>
                  <div>
                    <div className="flex flex-row text-lg md:text-base md:gap-3 mt-">
                      <div className="flex gap-1 md:mb-0 mb-3">
                        <BiCheck
                          size={25}
                          className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                        />
                        <p>Relocate in 90 Days</p>
                      </div>
                      <div className="flex gap-1">
                        <BiCheck
                          size={25}
                          className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                        />
                        <p>Affordable Fees</p>
                      </div>
                    </div>
                    <div className="flex justify-end pt-5 lg:mr-12">
                      <img
                        src={person1}
                        className="rounded-full w-[45%]"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="absolute bottom-10">
                        <p className="text-xs uppercase text-white py-1">
                          Application Fee
                        </p>
                        <p className="bg-black font-semibold text-white px-8 py-1 w-fit">
                          € 2520
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative md:px-10 md:py-10 px-5 py-10 pb-16 bg-center"
              style={{
                backgroundImage: `url(${bg4})`,
              }}
            >
              <div>
                <div className="flex justify-between">
                  <div className="btz mt-3u h-fit">
                    <p className="text-xs uppercase">
                      Fulfill your shitty dreams
                    </p>
                  </div>
                  <style jsx>{`
                    .btz {
                      position: relative;
                      display: inline-block;
                      background-color: white;
                      padding-top: 10px;
                      padding-bottom: 8px;
                      padding-left: 15px;
                      padding-right: 25px;
                      clip-path: polygon(
                        100% 0,
                        92% 50%,
                        100% 100%,
                        0% 100%,
                        0 48%,
                        0% 0%
                      );
                    }
                  `}</style>{" "}
                  <div>
                    <img src={flag} className="w-10" alt="" />
                  </div>
                </div>

                <div>
                  <p className="text-black font-semibold text-2xl py-3">
                    Computer Science
                  </p>
                  <div>
                    <div className="md:flex flex-row text-lg md:text-base md:gap-3 mt-">
                      <div className="flex gap-1 md:mb-0 mb-3">
                        <BiCheck
                          size={25}
                          className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                        />
                        <p>Relocate in 90 Days</p>
                      </div>
                      <div className="flex gap-1">
                        <BiCheck
                          size={25}
                          className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                        />
                        <p>Affordable Fees</p>
                      </div>
                    </div>
                    <div className="flex justify-end pt-5 lg:mr-12">
                      <img
                        src={person1}
                        className="rounded-full w-[45%]"
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="absolute bottom-10">
                        <p className="text-xs uppercase text-white py-1">
                          Application Fee
                        </p>
                        <p className="bg-black font-semibold text-white px-8 py-1 w-fit">
                          € 3400
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-10 text-white ">
            <div className="bg-roman-red py-5 px-10 md:flex md:justify-between">
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

          <div>
            <div className="lg:flex py-10 lg:justify-between md:text-left w-full">
              <div className="lg:w-[50%]">
                <p className="text-sm tracking-widest text-gray-500 uppercase">
                  check out various courses/degrees
                </p>
                <div className="relative my-5 w-10 bg-roman-red h-[2px]">
                  <div className="absolute -top-[3px] bg-white left-4t w-2 h-2 rounded-full border border-roman-red] shake-animation"></div>
                </div>

                <p className="md:text-4xl text-2xl flex font-semibold text-black">
                  Masters COURSES
                </p>
              </div>
              <div className="lg:w-[50%] pt-5 md:px-5 text-svm text-gray-500">
                Romania offers a diverse array of master's degree programs
                across various disciplines, providing exceptional educational
                opportunities for international students. With a blend of
                affordability and academic excellence, pursuing a master's
                degree in Romania is an attractive choice. Many programs are
                conducted in English, ensuring accessibility to a global student
                body, while the country's cultural richness and scenic
                landscapes offer an enriching backdrop for advanced studies.
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 grid grid-cols-1 gap-10">
              <div
                className="relative md:px-10 md:py-10 px-5 py-10 pb-16 bg-center"
                style={{
                  backgroundImage: `url(${bg6})`,
                }}
              >
                <div>
                  <div className="flex justify-between">
                    <div className="btz mt-3u h-fit">
                      <p className="text-xs uppercase">
                        Fulfill your shitty dreams
                      </p>
                    </div>
                    <style jsx>{`
                      .btz {
                        position: relative;
                        display: inline-block;
                        background-color: white;
                        padding-top: 10px;
                        padding-bottom: 8px;
                        padding-left: 15px;
                        padding-right: 25px;
                        clip-path: polygon(
                          100% 0,
                          92% 50%,
                          100% 100%,
                          0% 100%,
                          0 48%,
                          0% 0%
                        );
                      }
                    `}</style>{" "}
                    <div>
                      <img src={flag} className="w-10" alt="" />
                    </div>
                  </div>

                  <div>
                    <p className="text-black font-semibold text-2xl py-3">
                      Computational Linguistics
                    </p>
                    <div>
                      <div className="md:flex flex-row text-lg md:text-base md:gap-3 mt-">
                        <div className="flex gap-1 md:mb-0 mb-3">
                          <BiCheck
                            size={25}
                            className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                          />
                          <p>Relocate in 90 Days</p>
                        </div>
                        <div className="flex gap-1">
                          <BiCheck
                            size={25}
                            className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                          />
                          <p>Affordable Fees</p>
                        </div>
                      </div>
                      <div className="flex justify-end pt-5 lg:mr-12">
                        <img
                          src={person1}
                          className="rounded-full w-[45%]"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="absolute bottom-10">
                          <p className="text-xs uppercase text-white py-1">
                            Application Fee
                          </p>
                          <p className="bg-black font-semibold text-white px-8 py-1 w-fit">
                            € 2600
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative md:px-10 md:py-10 px-5 py-10 pb-16 bg-center"
                style={{
                  backgroundImage: `url(${bg5})`,
                }}
              >
                <div>
                  <div className="flex justify-between">
                    <div className="btz mt-3u h-fit">
                      <p className="text-xs uppercase">
                        Fulfill your shitty dreams
                      </p>
                    </div>
                    <style jsx>{`
                      .btz {
                        position: relative;
                        display: inline-block;
                        background-color: white;
                        padding-top: 10px;
                        padding-bottom: 8px;
                        padding-left: 15px;
                        padding-right: 25px;
                        clip-path: polygon(
                          100% 0,
                          92% 50%,
                          100% 100%,
                          0% 100%,
                          0 48%,
                          0% 0%
                        );
                      }
                    `}</style>{" "}
                    <div>
                      <img src={flag} className="w-10" alt="" />
                    </div>
                  </div>

                  <div>
                    <p className="text-black font-semibold capitalize text-2xl py-3">
                      Advanced studies in chemistry
                    </p>
                    <div>
                      <div className="md:flex flex-row text-lg md:text-base md:gap-3 mt-">
                        <div className="flex gap-1 md:mb-0 mb-3">
                          <BiCheck
                            size={25}
                            className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                          />
                          <p>Relocate in 90 Days</p>
                        </div>
                        <div className="flex gap-1">
                          <BiCheck
                            size={25}
                            className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                          />
                          <p>Affordable Fees</p>
                        </div>
                      </div>
                      <div className="flex justify-end pt-5 lg:mr-12">
                        <img
                          src={person1}
                          className="rounded-full w-[45%]"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="absolute bottom-10">
                          <p className="text-xs uppercase text-white py-1">
                            Application Fee
                          </p>
                          <p className="bg-black font-semibold text-white px-8 py-1 w-fit">
                            € 2600
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative md:px-10 md:py-10 px-5 py-10 bg-center pb-16"
                style={{
                  backgroundImage: `url(${bg2})`,
                }}
              >
                <div>
                  <div className="flex justify-between">
                    <div className="btz mt-3u h-fit">
                      <p className="text-xs uppercase">
                        Fulfill your shitty dreams
                      </p>
                    </div>
                    <style jsx>{`
                      .btz {
                        position: relative;
                        display: inline-block;
                        background-color: white;
                        padding-top: 10px;
                        padding-bottom: 8px;
                        padding-left: 15px;
                        padding-right: 25px;
                        clip-path: polygon(
                          100% 0,
                          92% 50%,
                          100% 100%,
                          0% 100%,
                          0 48%,
                          0% 0%
                        );
                      }
                    `}</style>{" "}
                    <div>
                      <img src={flag} className="w-10" alt="" />
                    </div>
                  </div>

                  <div>
                    <p className="text-black font-semibold text-2xl py-3 capitalize w-[70%]">
                      Software Engineering
                    </p>
                    <div>
                      <div className="md:flex flex-row text-lg md:text-base md:gap-3 mt-">
                        <div className="flex gap-1 md:mb-0 mb-3">
                          <BiCheck
                            size={25}
                            className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                          />
                          <p>Relocate in 90 Days</p>
                        </div>
                        <div className="flex gap-1">
                          <BiCheck
                            size={25}
                            className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                          />
                          <p>Affordable Fees</p>
                        </div>
                      </div>
                      <div className="flex justify-end pt-5 lg:mr-12">
                        <img
                          src={person1}
                          className="rounded-full w-[45%]"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="absolute bottom-10">
                          <p className="text-xs uppercase text-white py-1">
                            Application Fee
                          </p>
                          <p className="bg-black font-semibold text-white px-8 py-1 w-fit">
                            € 2600
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="relative md:px-10 md:py-10 px-5 py-10 bg-center pb-16"
                style={{
                  backgroundImage: `url(${bg1})`,
                }}
              >
                <div>
                  <div className="flex justify-between">
                    <div className="btz mt-3u h-fit">
                      <p className="text-xs uppercase">
                        Fulfill your shitty dreams
                      </p>
                    </div>
                    <style jsx>{`
                      .btz {
                        position: relative;
                        display: inline-block;
                        background-color: white;
                        padding-top: 10px;
                        padding-bottom: 8px;
                        padding-left: 15px;
                        padding-right: 25px;
                        clip-path: polygon(
                          100% 0,
                          92% 50%,
                          100% 100%,
                          0% 100%,
                          0 48%,
                          0% 0%
                        );
                      }
                    `}</style>{" "}
                    <div>
                      <img src={flag} className="w-10" alt="" />
                    </div>
                  </div>

                  <div>
                    <p className="text-black font-semibold text-2xl py-3">
                      Computer Science
                    </p>
                    <div>
                      <div className="md:flex flex-row text-lg md:text-base md:gap-3 mt-">
                        <div className="flex gap-1 md:mb-0 mb-3">
                          <BiCheck
                            size={25}
                            className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                          />
                          <p>Relocate in 90 Days</p>
                        </div>
                        <div className="flex gap-1">
                          <BiCheck
                            size={25}
                            className="text-roman-red md:bg-wvhite md:rounded-full mt-1y"
                          />
                          <p>Affordable Fees</p>
                        </div>
                      </div>
                      <div className="flex justify-end pt-5 lg:mr-12">
                        <img
                          src={person1}
                          className="rounded-full w-[45%]"
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="absolute bottom-10">
                          <p className="text-xs uppercase text-white py-1">
                            Application Fee
                          </p>
                          <p className="bg-black font-semibold text-white px-8 py-1 w-fit">
                            € 3600
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default First;
