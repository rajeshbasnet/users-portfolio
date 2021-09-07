import { Grid, LinearProgress, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import "./skills.css";
import illustration1 from "../../resources/illustrations/SVG/Asset 3.svg";
import illustration2 from "../../resources/illustrations/SVG/Asset 4.svg";
import illustration3 from "../../resources/illustrations/SVG/Asset 5.svg";
import { data } from "../../utils/data";

const useStyles = makeStyles({
  progressBarHeading: {
    fontFamily: "var(--primary-font)",
    padding: "1rem 0",
  },
  progressBar: {
    height: "5px",
    borderRadius: "2px",
  },
});

function Skills() {
  const classes = useStyles();

  const { skills } = data;

  return (
    <div className="skills-container font-rale" id="skills">
      <div className="skills-container--heading">
        <h2 className="font-fair">Skills</h2>
        <div className="underline"></div>
      </div>

      <Grid container spacing={8}>
        {skills.map((skill, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              key={index}
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <Typography
                variant="body1"
                className={classes.progressBarHeading}
              >
                {skill.name}
              </Typography>
              <LinearProgress
                variant="buffer"
                value={parseInt(skill.percentage)}
                className={classes.progressBar}
              />
            </Grid>
          );
        })}
      </Grid>

      <img
        src={illustration1}
        className="illustration--triangle"
        alt="triangle-illustrations"
      />
      <img
        src={illustration2}
        className="illustration--star"
        alt="triangle-illustrations"
      />
      <img
        src={illustration3}
        className="illustration--circle"
        alt="triangle-illustrations"
      />
    </div>
  );
}

export default Skills;
