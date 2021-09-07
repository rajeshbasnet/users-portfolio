import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  hamburgerMenuBtn: {
    fontSize: "2.2rem",
    color: "rgb(255, 247, 233)",
    cursor: "pointer",
  },
  navbarCloseBtn: {
    cursor: "pointer",
    fill: "white",
    fontSize: "2rem",
  },
});

function Navbar() {
  const [show, setShow] = useState(false);

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="hamburger-menu">
        <IconButton
          className={`btn ${classes.hamburgerMenuBtn}`}
          onClick={() => {
            setShow(true);
          }}
        >
          <GiHamburgerMenu />
        </IconButton>
      </div>

      <nav className={`navbar ${show ? "navbar-open" : ""} font-rubik`}>
        <ul className="navbar__list">
          <li className="navbar__list--item">
            <a
              href="#header"
              className="no-underline"
              onClick={() => setShow(false)}
            >
              Home
            </a>
          </li>
          <li className="navbar__list--item">
            <a
              href="#about"
              className="no-underline"
              onClick={() => setShow(false)}
            >
              About Me
            </a>
          </li>
          <li className="navbar__list--item">
            <a
              href="#education"
              className="no-underline"
              onClick={() => setShow(false)}
            >
              Education
            </a>
          </li>
          <li className="navbar__list--item">
            <a
              href="#skills"
              className="no-underline"
              onClick={() => setShow(false)}
            >
              Skills
            </a>
          </li>
          <li className="navbar__list--item">
            <a
              href="#experience"
              className="no-underline"
              onClick={() => setShow(false)}
            >
              Experience
            </a>
          </li>
          <li className="navbar__list--item">
            <a
              href="#contact"
              className="no-underline"
              onClick={() => setShow(false)}
            >
              Contact Me
            </a>
          </li>
        </ul>

        <div className="navbar-close">
          <IconButton
            className={`btn`}
            onClick={() => {
              setShow(false);
            }}
          >
            <AiOutlineClose className={classes.navbarCloseBtn} />
          </IconButton>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
