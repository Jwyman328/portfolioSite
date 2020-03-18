import React from "react";
import profilePic from "./images/profilePic.jpg";

import Header from "./components/headers/header";
import CloseableHeader from "./components/headers/ClosableHeader";
import Skills from "./components/homePageSections/skills";
import About from "./components/homePageSections/about";
import Projects from "./components/homePageSections/projects";
import { Link, Element } from "react-scroll";
import Footer from "./components/footer/footer";

function HomePage(props) {
  return (
    <div>
      <div className="background-design">
        <CloseableHeader className="mobileHeader" />
        <Header className="mainHeader" />
        <Element name="About">
  
          <About />
        </Element>
        <Element name="Projects" className="projects">

          <Projects />
        </Element>
        <Element name="skills" className="Skills">
          <Skills />
        </Element>
      </div>
    </div>
  );
}

export default HomePage;
