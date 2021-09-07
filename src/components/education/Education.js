import { Grid, Icon, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import "./education.css";
import { FaUserGraduate } from "react-icons/fa";
import { data } from "../../utils/data";

const useStyles = makeStyles({
  para: {
    fontFamily: "var(--primary-font)",
    fontWeight: "500",
  },

  box: {
    padding: "3rem 2rem",
    minHeight: "400px",
    position: "relative",
    boxShadow: "1px 1px 75px -5px rgba(176,176,176,0.37)",
  },
});

function Education() {
  const classes = useStyles();

  const { education } = data;

  return (
    <section className="education-container" id="education">
      <div className="education__container--heading">
        <h2 className="font-fair">Education History</h2>
        <div className="underline"></div>
      </div>

      <Grid container spacing={8}>
        {education.map((edu, index) => {
          const { title, institution, startYear, endYear, details } = edu;

          return (
            <Grid
              item
              lg={6}
              xl={6}
              key={index}
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <Paper elevation={3} className={classes.box}>
                <div className="education__title">
                  <Typography variant={"body1"} className={classes.para}>
                    {title}
                  </Typography>
                </div>

                <div className="education__schooling">
                  <Typography variant={"body1"} className={classes.para}>
                    {`${startYear} - ${endYear}`}
                  </Typography>
                  <Typography variant={"body1"} className={classes.para}>
                    {institution}
                  </Typography>
                </div>

                <br />

                <div
                  className="education__info"
                  dangerouslySetInnerHTML={{ __html: details }}
                ></div>

                <div className="education__heading--icon">
                  <Icon>
                    <FaUserGraduate />
                  </Icon>
                </div>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
}

export default Education;
