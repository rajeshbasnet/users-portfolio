import { Button, Grid, TextField, makeStyles } from "@material-ui/core";
import React, { useRef, useState } from "react";
import "./contact.css";
import { FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import contactIllustration from "../../resources/illustrations/SVG/contact_us.svg";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { data } from "../../utils/data";

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

  const [errors, setErrors] = useState({
    usernameErr: "",
    emailErr: "",
    subjectErr: "",
    messageErr: "",
  });

  const [fields, setFields] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const refContainer = useRef(null);

  const { email, phone, address } = data;

  const formHandler = (event) => {
    event.preventDefault();

    if (fields.username && fields.email && fields.subject && fields.message) {
      setErrors({
        usernameErr: false,
        emailErr: false,
        subjectErr: false,
        messageErr: false,
      });

      refContainer.current.textContent = "Submitted";
      refContainer.current.style.backgroundColor = "#0bba48";
    }

    if (!fields.username) {
      setErrors((prevState) => {
        return {
          ...prevState,
          usernameErr: true,
        };
      });
    }

    if (!fields.email) {
      setErrors((prevState) => {
        return {
          ...prevState,
          emailErr: true,
        };
      });
    }

    if (!fields.subject) {
      setErrors((prevState) => {
        return {
          ...prevState,
          subjectErr: true,
        };
      });
    }

    if (!fields.message) {
      setErrors((prevState) => {
        return {
          ...prevState,
          messageErr: true,
        };
      });
    }

    console.log(errors);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-container--heading">
        <h2 className="font-fair">Contact Me</h2>
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
          <div
            className="user-contact__details font-rale"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <p>
              <MdEmail color="var(--primary-color)" />
              <span>&nbsp;&nbsp;Email : {email}</span>
            </p>

            <br />

            <p>
              <FaPhoneAlt color="var(--primary-color)" />
              &nbsp;&nbsp; Phone : {phone}
            </p>

            <br />

            <p>
              <HiLocationMarker color="var(--primary-color)" />
              &nbsp;&nbsp;
              <span>Address : {address}</span>
            </p>
          </div>

          <div
            className="contact__illustration"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
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
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <form action="" method="" onSubmit={formHandler}>
            <TextField
              type="text"
              error={errors.usernameErr}
              margin={"normal"}
              fullWidth
              id="name"
              label="Name"
              variant="outlined"
              value={fields.username}
              onChange={(event) => {
                setFields({ ...fields, username: event.target.value });
              }}
            />
            <TextField
              type="email"
              error={errors.emailErr}
              margin={"normal"}
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              value={fields.email}
              onChange={(event) => {
                setFields({ ...fields, email: event.target.value });
              }}
            />
            <TextField
              type="text"
              error={errors.subjectErr}
              margin={"normal"}
              fullWidth
              id="subject"
              label="Subject"
              variant="outlined"
              value={fields.subject}
              onChange={(event) => {
                setFields({ ...fields, subject: event.target.value });
              }}
            />

            <TextField
              error={errors.messageErr}
              margin={"normal"}
              fullWidth
              id="message"
              label="Message"
              variant="outlined"
              multiline
              minRows="5"
              value={fields.message}
              onChange={(event) => {
                setFields({ ...fields, message: event.target.value });
              }}
            />

            <br />
            <br />

            <Button
              ref={refContainer}
              type="submit"
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
