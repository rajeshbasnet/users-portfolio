import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <div className="hamburger-menu">
        <button
          className="btn navbar-btn"
          onClick={() => {
            setShow(true);
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <nav className={`navbar ${show ? "navbar-open" : ""} font-rubik`}>
        <ul className="navbar__list">
          <li className="navbar__list--item">
            <a href="" className="no-underline">
              Home
            </a>
          </li>
          <li className="navbar__list--item">
            <a href="" className="no-underline">
              About Me
            </a>
          </li>
          <li className="navbar__list--item">
            <a href="" className="no-underline">
              Education
            </a>
          </li>
          <li className="navbar__list--item">
            <a href="" className="no-underline">
              Skills
            </a>
          </li>
          <li className="navbar__list--item">
            <a href="" className="no-underline">
              Experience
            </a>
          </li>
          <li className="navbar__list--item">
            <a href="" className="no-underline">
              Contact Us
            </a>
          </li>
        </ul>

        <div className="navbar-close">
          <button
            className="btn navbar-close--btn"
            onClick={() => {
              setShow(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
