import React from "react";
import "./hero.css";
import { data } from "../../../utils/data";

function Hero() {
  const { firstName, middleName, lastName, cvLink, mainJobTitle } = data;

  return (
    <>
      <div className="hero-section"></div>
      <div className="hero-content">
        <div
          className="user-greeting font-fair"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h1>Hi! </h1>
          <h1>
            I'm {firstName} {middleName} {lastName}
          </h1>
        </div>

        <div
          className="user-field"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h3 className="font-rubik">{mainJobTitle}</h3>
        </div>

        <div
          className="user-portfolio"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <a href={cvLink} className="uppercase font-rubik btn view-btn">
            View Portfolio
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
