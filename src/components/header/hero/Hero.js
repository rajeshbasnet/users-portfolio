import React from "react";
import "./hero.css";

function Hero() {
  return (
    <>
      <div className="hero-section"></div>
      <div className="hero-content">
        <div className="user-greeting font-fair">
          <h1>Hi! </h1>
          <h1>I'm Anuj Poudel</h1>
        </div>

        <div className="user-field">
          <h3 className="font-rubik">Blockchain and DevOps Developer</h3>
        </div>

        <div className="user-portfolio">
          <button className="uppercase font-rubik btn view-btn">
            View Portfolio
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
