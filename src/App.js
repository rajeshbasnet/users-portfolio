import React from "react";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Header from "./components/header/Header";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Skills />
      <Education />
    </React.Fragment>
  );
}

export default App;
