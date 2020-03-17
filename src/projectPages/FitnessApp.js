import React, {useEffect} from "react";
import SourceLink from "./components/sourceLink";


import monthGraph from "./projectImages/fitnessChallenge/monthGraph.png";
import fitnessAppLanding from '../images/projectImages/fitnessAppLanding.png'

import ProjectPhotoContainer from "./components/projectPhotoContainer";
import SkillsContainer from "../components/SkillsContainer";
import SkillsRow from "../components/skillsRow";
import SkillsElement from "../components/skillsElement";

//skill photos

import jsSvg from "../logos/logo-javascript.svg";
import djangoSvg from "../logos/django.svg";
import cssSvg from '../logos/logo-css3.svg'
import postgreSqlSgv from "../logos/postgresql.svg";

import ProjectHeader from '../components/projectHeader'

function FitessApp(props) {
  const backEndSource = "https://github.com/Jwyman328/fitness_app";
  const frontEndSource = "https://github.com/Jwyman328/fitness_app";
  const appWebSite = "https://whispering-cove-55290.herokuapp.com/accounts/login/";

  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  return (
    <div className="background-design">
            <ProjectHeader />
      <div className="projectTitle">
        <h1>Fitness Challenge App</h1>
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
            <ProjectPhotoContainer src={fitnessAppLanding} />
            <ProjectPhotoContainer src={monthGraph} />
          </div>

          <div className="projectAboutTextContainer">
            <h3>Description</h3>
            <p>
              A challenge fitness app focused on improving and tracking overall health!
            </p>
            <h3>Features</h3>
            <ul>
              <li>Track Health Activities</li>
              <li>Monitor Progress with Interactive Graphs</li>
              <li>Challenge/Compete against Friends</li>
              <li>Set Goals</li>
            </ul>
          </div>
      </div>

      <SkillsContainer>
        <h2 className="skillTitle">Main Technologies Used</h2>

        <SkillsRow>
          <SkillsElement name="Vanilla JS" logo={jsSvg} />
          <SkillsElement name="CSS" logo={cssSvg} />
          <SkillsElement name="Django" logo={djangoSvg} />
          <SkillsElement name="PostgeSQL" logo={postgreSqlSgv} />
        </SkillsRow>
      </SkillsContainer>
    </div>
  );
}

export default FitessApp;
