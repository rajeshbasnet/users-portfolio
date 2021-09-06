import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </React.Fragment>
  );
}

export default App;
