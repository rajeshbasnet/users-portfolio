import { Grid, LinearProgress, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
import "./skills.css";
import illustration1 from "../../resources/illustrations/SVG/Asset 3.svg";
import illustration2 from "../../resources/illustrations/SVG/Asset 4.svg";
import illustration3 from "../../resources/illustrations/SVG/Asset 5.svg";

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

  return (
    <div className="skills-container font-rale">
      <div className="container-heading">
        <h2 className="font-fair">Skills</h2>
        <div className="underline"></div>
      </div>

      <Grid container spacing={8}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="body1" className={classes.progressBarHeading}>
            Blockchain
          </Typography>
          <LinearProgress
            variant="buffer"
            value={80}
            className={classes.progressBar}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="body1" className={classes.progressBarHeading}>
            Java and Spring Boot
          </Typography>
          <LinearProgress
            variant="buffer"
            value={80}
            className={classes.progressBar}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="body1" className={classes.progressBarHeading}>
            Android
          </Typography>
          <LinearProgress
            variant="buffer"
            value={80}
            className={classes.progressBar}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="body1" className={classes.progressBarHeading}>
            Django
          </Typography>
          <LinearProgress
            variant="buffer"
            value={80}
            className={classes.progressBar}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="body1" className={classes.progressBarHeading}>
            Tensorflow and Keras
          </Typography>
          <LinearProgress
            variant="buffer"
            value={80}
            className={classes.progressBar}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant="body1" className={classes.progressBarHeading}>
            Docker
          </Typography>
          <LinearProgress
            variant="buffer"
            value={80}
            className={classes.progressBar}
          />
        </Grid>
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
