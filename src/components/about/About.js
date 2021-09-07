import React from "react";
import "./about.css";
import defaultImage from "../../resources/images/pexels-pixabay-220453.jpg";
import defaultImage2 from "../../resources/illustrations/SVG/Asset 2.svg";
import { BiCodeAlt } from "react-icons/bi";
import { data } from "../../utils/data";
import Parser from "html-react-parser";

function About() {
  const { aboutMe1, aboutMe2, basicSkills } = data;

  return (
    <section className="about__section" id="about">
      <div className="about__section__container">
        <div
          className="about__section--heading"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <h2 className="font-fair">About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="user__description">
          <div
            className="user__description--info font-rale"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            {Parser(aboutMe1)}

            <br />
            <br />

            {Parser(aboutMe2)}
          </div>

          <div className="user__description--media">
            <img src={defaultImage} alt="" />
          </div>
        </div>

        <div className="user__description--media__bg">
          <img src={defaultImage2} alt="" />
        </div>

        <div className="about__section--skills font-rale">
          {basicSkills.map((skill, index) => {
            return (
              <div
                className="user__basic__skills"
                key={index}
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                <p className="base-icons">
                  <BiCodeAlt />
                </p>
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
