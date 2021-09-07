import React, { useEffect, useState } from "react";
import "./experience.css";
import { MdWork } from "react-icons/md";
import { data } from "../../utils/data";
import { FcPrevious, FcNext } from "react-icons/fc";
import { IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btnLeft: {
    position: "absolute",
    left: "0%",
    top: "25%",
  },
  btnRight: {
    position: "absolute",
    right: "0%",
    top: "25%",
  },
});

function Experience() {
  const [index, setIndex] = useState(0);
  const { workExperience } = data;

  const classes = useStyles();

  const btnHandler = (status) => {
    if (status === "prev") {
      setIndex(index - 1);
    }

    if (status === "next") {
      if (index < workExperience.length - 1) {
        setIndex(index + 1);
      }
    }
  };

  useEffect(() => {
    let timeout = setInterval(() => {
      setIndex(index + 1);
    }, 5000);

    return () => {
      clearInterval(timeout);
    };
  });

  useEffect(() => {
    if (index < 0) {
      setIndex(workExperience.length - 1);
    } else if (index >= workExperience.length - 1) {
      setIndex(0);
    }
  }, [index]);

  return (
    <div className="experience-container" id="experience">
      <div className="experience-container__heading">
        <h2 className="font-fair">Work Experience</h2>
        <div className="underline"></div>
      </div>

      <div className="experience-container__carousel font-rale">
        {workExperience.map((experience, idx) => {
          let currentStatus = "active";

          if (
            (index === workExperience.length - 1 && idx === 0) ||
            idx > index
          ) {
            currentStatus = "next";
          }

          if (
            (index === 0 && idx === workExperience.length - 1) ||
            idx < index
          ) {
            currentStatus = "previous";
          }

          const {
            title,
            institution,
            startYear,
            startMonth,
            endYear,
            endMonth,
            details,
          } = experience;

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
                <p>
                  {startMonth} {startYear} - {endMonth} {endYear}
                </p>
              </div>

              <br />

              <div className="experience__company">
                <p>{institution}</p>
                <p>{title}</p>
              </div>

              <br />

              <div
                className="experience__details"
                dangerouslySetInnerHTML={{ __html: details }}
              ></div>
            </div>
          );
        })}
        <div className="carousel__change__btn">
          <IconButton
            className={classes.btnLeft}
            onClick={() => {
              btnHandler("prev");
            }}
          >
            <FcPrevious />
          </IconButton>

          <IconButton
            className={classes.btnRight}
            onClick={() => {
              btnHandler("next");
            }}
          >
            <FcNext />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Experience;
