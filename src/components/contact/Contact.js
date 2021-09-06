import { Button, Grid, TextField, makeStyles } from "@material-ui/core";
import React from "react";
import "./contact.css";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import contactIllustration from "../../resources/illustrations/SVG/contact_us.svg";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";

const useStyles = makeStyles({
  contactContainer: {
    width: "90%",
    margin: "5rem auto",
  },
  formContainer: {
    width: "50%",
    margin: "0 auto",
  },
  btnSubmit: {
    padding: "0.85rem 0",
    fontFamily: "var(--secondary-font)",
  },

  illustrations: {
    marginTop: "3rem",
  },
});

function Contact() {
  const classes = useStyles();

  return (
    <div className="contact-container">
      <div className="contact-container--heading">
        <h2 className="font-fair">Contact Us</h2>
        <div className="underline"></div>
      </div>
      <Grid container className={classes.contactContainer}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className={classes.illustrations}
        >
          <div className="user-contact__details font-rale">
            <p>
              <MdEmail />
              <span>&nbsp;&nbsp;Email : poudel.01anuj@gmail.com</span>
            </p>

            <br />

            <p>
              <FaPhoneAlt />
              &nbsp;&nbsp; Phone : +977 9849933272
            </p>

            <br />

            <p>
              <HiLocationMarker />
              &nbsp;&nbsp;
              <span>Address : Mahalaxmi - 09, Lalitpur, Nepal</span>
            </p>
          </div>

          <div className="contact__illustration">
            <img src={contactIllustration} alt="" />
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={5}
          xl={5}
          className={classes.formContainer}
        >
          <form action="" method="">
            <TextField
              margin={"normal"}
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
            />
            <TextField
              margin={"normal"}
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              required
            />
            <TextField
              margin={"normal"}
              fullWidth
              id="subject"
              label="Subject"
              variant="outlined"
            />

            <TextField
              margin={"normal"}
              fullWidth
              id="message"
              label="Message"
              variant="outlined"
              multiline
              minRows="5"
            />

            <br />
            <br />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              endIcon={<FaTelegramPlane />}
              size="large"
              className={classes.btnSubmit}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
