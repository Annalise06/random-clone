import React from "react";
import NavBottom from "../../../components/Common/NavBottom";
import HomeNav from "../../../components/Common/NavTop";
import Hero from "./Hero";
import Footer from "../../../components/Common/Footer";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="bg-black/20">
          <HomeNav />
          <NavBottom />
        </div>
        <Hero />
       <Footer />
      </div>
    </div>
  );
};

export default Contact;
