import React from "react";
import NavBottom from "../../../components/Common/NavBottom";
import HomeNav from "../../../components/Common/NavTop";
import Hero from "./Hero";
import bg from "../../../images/about-header-bg.jpg";
import Footer from "../../../components/Common/Footer";
import Section from "./Section";

const Contact = () => {
  return (
    <div>
      <HomeNav />
      <div
        className="bg-congtain w-full h-[29rem] bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-black/40 ">
          <NavBottom />
          <Hero />
        </div>
        <Section />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
