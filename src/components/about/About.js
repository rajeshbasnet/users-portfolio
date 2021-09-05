import React from "react";
import "./about.css";
import defaultImage from "../../resources/images/pexels-pixabay-220453.jpg";
import defaultImage2 from "../../resources/illustrations/SVG/Asset 2.svg";
import { BiCodeAlt } from "react-icons/bi";

function About() {
  return (
    <section className="about__section">
      <div className="about__section__container">
        <div className="about__section--heading">
          <h2 className="font-fair">About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="user__description">
          <div className="user__description--info font-rale">
            <p>
              I recently finished my bachelors in Computer Engineering from
              Pulchowk Engineering Campus, located at Pulchowk Lalitpur. I had a
              passion for computers from a very young age. And my only aim in
              life is to improve Nepal through IT sector.
            </p>

            <br />
            <br />

            <p>
              Currently I would like to think of myself as a Professional
              Blockchain and DevOps Developer as I have gained vast experience
              in deployment by working in a number of companies and projects
              over the past 3-4 years. But I am comfortable handling the
              backend, core blockchain and security of the project well.
            </p>
          </div>

          <div className="user__description--media">
            <img src={defaultImage} alt="" />
          </div>
        </div>

        <div className="user__description--media__bg">
          <img src={defaultImage2} alt="" />
        </div>

        <div className="about__section--skills font-rale">
          <div className="user__basic__skills">
            <p className="base-icons">
              <BiCodeAlt />
            </p>
            <p>Blockchain Developer</p>
          </div>

          <div className="user__basic__skills">
            <p className="base-icons">
              <BiCodeAlt />
            </p>
            <p>DevOps Developer</p>
          </div>

          <div className="user__basic__skills">
            <p className="base-icons">
              <BiCodeAlt />
            </p>
            <p>AI and ML Developer</p>
          </div>

          <div className="user__basic__skills">
            <p className="base-icons">
              <BiCodeAlt />
            </p>
            <p>Android Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
