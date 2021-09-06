import React, { useEffect, useState } from "react";
import "./experience.css";
import { MdWork } from "react-icons/md";

function Experience() {
  const [index, setIndex] = useState(0);
  const array = [1, 2, 3, 4];

  useEffect(() => {
    let timeout = setInterval(() => {
      if (index < 0) {
        setIndex(array.length - 1);
      } else if (index >= array.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 5000);

    return () => {
      clearInterval(timeout);
    };
  });

  return (
    <div className="experience-container">
      <div className="experience-container__heading">
        <h2 className="font-fair">Work Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="experience-container__carousel font-rale">
        {array.map((item, idx) => {
          let currentStatus = "active";

          if ((index === array.length - 1 && idx === 0) || idx > index) {
            currentStatus = "next";
          }

          if ((index === 0 && idx === array.length - 1) || idx < index) {
            currentStatus = "previous";
          }

          return (
            <div
              className={`experience__carousel--item ${currentStatus}`}
              key={idx}
            >
              <div className="experience__carousel--heading__icon">
                <span className="work-icon">
                  <MdWork />
                </span>
              </div>

              <br />
              <br />

              <div className="experience__title">
                <p>September 2018 - Present</p>
              </div>

              <br />

              <div className="experience__company">
                <p>Dallo Tech Pvt. Ltd. Sep</p>
                <p>Sr. DevOps and Blockchain Developer</p>
              </div>

              <br />

              <div className="experience__details">
                <p>
                  DalloTechis an IT based company established in 2018 by a group
                  of enthusiastic engineers who believe in the marvels of
                  technological innovations to uplift the development of
                  society.
                </p>

                <p>Website: https://dallotech.com/</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
