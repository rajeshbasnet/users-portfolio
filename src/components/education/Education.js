import { Grid, Icon, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import "./education.css";
import { FaUserGraduate } from "react-icons/fa";

const useStyles = makeStyles({
  para: {
    fontFamily: "var(--primary-font)",
    fontWeight: "500",
  },

  box: {
    padding: "3rem 2rem",
    position: "relative",
    boxShadow: "1px 1px 75px -5px rgba(176,176,176,0.37)",
  },
});

function Education() {
  const classes = useStyles();

  return (
    <div className="education-container">
      <div className="education__container--heading">
        <h2 className="font-fair">Education History</h2>
        <div className="underline"></div>
      </div>

      <Grid container spacing={8}>
        <Grid item lg={6} xl={6}>
          <Paper elevation={3} className={classes.box}>
            <div className="education__title">
              <Typography variant={"body1"} className={classes.para}>
                Bachelors in Computer Engineering
              </Typography>
            </div>

            <div className="education__schooling">
              <Typography variant={"body1"} className={classes.para}>
                2014-2018
              </Typography>
              <Typography variant={"body1"} className={classes.para}>
                Pulchowk Engineering Campus
              </Typography>
            </div>

            <br />

            <div className="education__info">
              <p>
                Established in&nbsp;<strong>1972 A.D. (2029 B.S)</strong>, it is
                one of the best and the most reputed engineering institution in
                Nepal.
              </p>
              <p>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    Minor Project: OMR Based Ballot Paper Vote Counting
                  </span>
                </em>
              </p>
              <p>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    Major Project: Cryptocurrencies Data Visualization And
                    Sentiment Analysis With Correlation Based Prediction
                  </span>
                </em>
              </p>
              <p>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    Aggregate Percent: 74%
                  </span>
                </em>
              </p>
            </div>

            <div className="education__heading--icon">
              <Icon>
                <FaUserGraduate />
              </Icon>
            </div>
          </Paper>
        </Grid>

        <Grid item lg={6} xl={6}>
          <Paper elevation={3} className={classes.box}>
            <div className="education__title">
              <Typography variant={"body1"} className={classes.para}>
                Bachelors in Computer Engineering
              </Typography>
            </div>

            <div className="education__schooling">
              <Typography variant={"body1"} className={classes.para}>
                2014-2018
              </Typography>
              <Typography variant={"body1"} className={classes.para}>
                Pulchowk Engineering Campus
              </Typography>
            </div>

            <br />

            <div className="education__info">
              <p>
                Established in&nbsp;<strong>1972 A.D. (2029 B.S)</strong>, it is
                one of the best and the most reputed engineering institution in
                Nepal.
              </p>
              <p>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    Minor Project: OMR Based Ballot Paper Vote Counting
                  </span>
                </em>
              </p>
              <p>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    Major Project: Cryptocurrencies Data Visualization And
                    Sentiment Analysis With Correlation Based Prediction
                  </span>
                </em>
              </p>
              <p>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    Aggregate Percent: 74%
                  </span>
                </em>
              </p>
            </div>

            <div className="education__heading--icon">
              <Icon>
                <FaUserGraduate />
              </Icon>
            </div>
          </Paper>
        </Grid>

        <Grid item lg={6} xl={6}>
          <Paper elevation={3} className={classes.box}>
            <div className="education__title">
              <Typography variant={"body1"} className={classes.para}>
                Bachelors in Computer Engineering
              </Typography>
            </div>

            <div className="education__schooling">
              <Typography variant={"body1"} className={classes.para}>
                2014-2018
              </Typography>
              <Typography variant={"body1"} className={classes.para}>
                Pulchowk Engineering Campus
              </Typography>
            </div>

            <br />

            <div className="education__info">
              <p>
                Established in&nbsp;<strong>1972 A.D. (2029 B.S)</strong>, it is
                one of the best and the most reputed engineering institution in
                Nepal.
              </p>
              <p>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    Minor Project: OMR Based Ballot Paper Vote Counting
                  </span>
                </em>
              </p>
              <p>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    Major Project: Cryptocurrencies Data Visualization And
                    Sentiment Analysis With Correlation Based Prediction
                  </span>
                </em>
              </p>
              <p>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    Aggregate Percent: 74%
                  </span>
                </em>
              </p>
            </div>

            <div className="education__heading--icon">
              <Icon>
                <FaUserGraduate />
              </Icon>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Education;
