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
        className="bg-conztain w-full md:h-[85vh] h-[75vh] bg-top bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="bg-gradient-to-b from-black via-black/70 to-transparent">
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
