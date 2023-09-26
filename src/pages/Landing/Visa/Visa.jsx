import React from "react";
import NavBottom from "../../../components/Common/NavBottom";
import HomeNav from "../../../components/Common/NavTop";
import Hero from "./Hero";
import bg from "../../../images/about-header-bg.jpg";
import Footer from "../../../components/Common/Footer";
import Section from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const Visa = () => {
  return (
    <div>
      <HomeNav />
      <div
        className="bg-congtain w-full md:h-[29rem] h-[75vh] bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-gradient-to-b from-black via-black/70 to-transparent">
          <NavBottom />
          <Hero />
        </div>
        <Section />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    </div>
  );
};

export default Visa;
