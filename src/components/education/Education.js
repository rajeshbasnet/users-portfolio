import { Grid, Icon, Paper } from "@material-ui/core";
import React from "react";
import "./education.css";

function Education() {
  return (
    <div className="education-container">
      <div className="education__container--heading">
        <h2 className="font-fair">Education History</h2>
        <div className="underline"></div>
      </div>

      <Grid container>
        <Grid item>
          <Paper elevation={3}>
            <div className="education__title">
              <p>Bachelo</p>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Education;
