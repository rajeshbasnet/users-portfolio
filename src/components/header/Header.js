import React from "react";
import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";

function Header() {
  return (
    <header id="header">
      <Navbar />
      <Hero />
    </header>
  );
}

export default Header;
