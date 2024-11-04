import React from "react";
import About from "../components/About.js";
import Contact from "../components/Contact.js";
import Education from "../components/Education.js";
import Experience from "../components/Experience.js";
import Projects from "../components/Projects.js";
import Certification from "../components/Certification.js";
import Skills from "../components/Skills.js";
import Main from "../components/Main.js";
import "../styles/page.css"

const HomePage = () => {

  return (
    <div className="page-container">
      <Main />

      <About />

      <Education />

      


      <Skills />

      <Experience />

      <Certification />

      <Projects />

      <Contact />
    </div>
  );

};

export default HomePage;
