import React from "react";
import NavBottom from "../../../components/Common/NavBottom";
import HomeNav from "../../../components/Common/NavTop";
import Hero from "./Hero";
import Country from "../Home/Country";
import Abt from "./Section1";
import Questions from "../Home/Questions";
import Sectiontwo from "./Sectiontwo";
import Sectionthree from "./Sectionthree";
import Footer from "../../../components/Common/Footer";
import bg from "../../../images/about-header-bg.jpg";

const About = () => {
  return (
    <div>
      {" "}
      <HomeNav />
      <div
        className="bg-congtain w-full h-[29rem] bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-black/40 ">
          <NavBottom />
          <Hero/>
        </div>
        <Abt />
        <Country />
        <Questions />
        <Sectiontwo />
        <Sectionthree />
        <Footer />
      </div>
    </div>
  );
};

export default About;
