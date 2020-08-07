import React, { useEffect } from "react";
import SourceLink from "./components/sourceLink";

import allVideos from "../images/projectImages/allVideos.png";
import videoTakeNote from "../images/projectImages/videoTakeNote.png";

import ProjectPhotoContainer from "./components/projectPhotoContainer";
import SkillsContainer from "../components/skillsComponents/SkillsContainer";
import SkillsRow from "../components/skillsComponents/skillsRow";
import SkillsElement from "../components/skillsComponents/skillsElement";

//skill photos

import nodeJs from "../logos/logo-nodejs.svg";
import sassSvg from "../logos/logo-sass.svg";
import mongoDb from "../logos/mongoDBStack.svg";
import Angular from "../logos/angularLogo.svg";
import typeScript from "../logos/typescriptLogo.svg";
import express from "../logos/express.png";

import ProjectHeader from "../components/headers/projectHeader";
import ProjectHeaderCloseable from "../components/headers/projectHeaderClosable";

function UniversidadDeBastos(props) {
  const backEndSource = "https://github.com/Jwyman328/universidad_de_bastos_backend";
  const frontEndSource = "https://github.com/Jwyman328/universidad_de_bastos";
  const appWebSite = "https://universidad-de-bastos.netlify.app/login";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background-design">
      <ProjectHeader className="projectHeaderMain" />
      <ProjectHeaderCloseable className="projectHeaderMobile" />

      <div className="projectTitle">
        <h1>Universidad de Miguel Anxo Bastos</h1>
      </div>

      <div className="sourceLinksContainer">
        <div className="sourceLinks">
          <SourceLink source={appWebSite} title="Visit App" />
          <SourceLink source={frontEndSource} title="Front-End Code" />
          <SourceLink source={backEndSource} title="Back-End Code" />
        </div>
      </div>

      <div className="projectAboutContainer">
        <div className="photoSetContainer">
          <ProjectPhotoContainer src={allVideos} />
          <ProjectPhotoContainer src={videoTakeNote} />
        </div>

        <div className="projectAboutTextContainer">
          <h3>Description</h3>
          <p>
            A video platform that allows users to easily access and take notes on youtube videos of Miguel Anxo Bastos.
          </p>
          <h3>Features</h3>
          <ul>
            <li>Organize Videos by Miguel Anxo Bastos</li>
            <li>Allow users to take notes on videos</li>
          </ul>
          <h3>Project Story</h3>
          <p>
            To be completed...
          </p>

          <p>
            
          </p>
          <h3>Project Challenges</h3>
          <p>
            To be completed.
          </p>
        </div>
      </div>

      <SkillsContainer>
        <h1 className="skillTitle">Main Technologies Used</h1>

        <SkillsRow>
          <SkillsElement name="Angular" logo={Angular} />
          <SkillsElement name="TypeScript" logo={typeScript} />
          <SkillsElement name="Sass" logo={sassSvg} />
          <SkillsElement name="Node.js" logo={nodeJs} />
          <SkillsElement name="Express" logo={express} />
          <SkillsElement name="MongoDB" logo={mongoDb} />
        </SkillsRow>
      </SkillsContainer>
    </div>
  );
}

export default UniversidadDeBastos;
