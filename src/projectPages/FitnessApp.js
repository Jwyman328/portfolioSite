import React, { useEffect } from "react";
import SourceLink from "./components/sourceLink";

import monthGraph from "./projectImages/fitnessChallenge/monthGraph.png";
import fitnessAppLanding from "../images/projectImages/fitnessAppLanding.png";

import ProjectPhotoContainer from "./components/projectPhotoContainer";
import SkillsContainer from "../components/skillsComponents/SkillsContainer";
import SkillsRow from "../components/skillsComponents/skillsRow";
import SkillsElement from "../components/skillsComponents/skillsElement";

//skill photos

import jsSvg from "../logos/logo-javascript.svg";
import djangoSvg from "../logos/django.svg";
import cssSvg from "../logos/logo-css3.svg";
import postgreSqlSgv from "../logos/postgresql.svg";

import ProjectHeader from "../components/headers/projectHeader";
import ProjectHeaderCloseable from "../components/headers/projectHeaderClosable";

function FitessApp(props) {
  const backEndSource = "https://github.com/Jwyman328/fitness_app";
  const frontEndSource = "https://github.com/Jwyman328/fitness_app";
  const appWebSite =
    "https://whispering-cove-55290.herokuapp.com/accounts/login/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="background-design">
      <ProjectHeader />
      <ProjectHeaderCloseable className="projectHeaderMobile" />

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
            A challenge fitness app focused on improving and tracking overall
            health!
          </p>
          <h3>Features</h3>
          <ul>
            <li>Track Health Activities</li>
            <li>Monitor Progress with Interactive Graphs</li>
            <li>Challenge/Compete against Friends</li>
            <li>Set Goals</li>
          </ul>
          <h3>Project Story</h3>
          <p>
            My family considers themselves occasional workout enthusiasts that
            tend to get competitive at any sign of competition. One year, in
            order to promote each other to be healthier we started a fitness
            competition, simply tracking our sleep, steps, workout and diet by
            logging it into google sheets. As soon as I got my programming
            skills up, I knew exactly what I wanted to build, a web app that
            would allow my family to easily track their health habits and
            compete against one another by scoring points for how healthy they
            had been. The project ended up growing well beyond what was once
            just a simple google sheet, allowing users to set goals for
            themselves, challenge other family members and see all their hard
            work laid out in visually appealing graphs.
          </p>
          <h3>Project Challenges</h3>
          <p>
            The main challenges I faced was when I was forced to make the site
            responsive. Being more focused on getting the apps features to work
            properly I opted to use bootstrap to handle the responsiveness. This
            helped immensely but also felt quite restrictive at times. The other
            big challenge faced was when it came to structuring the relational
            databases. Mapping out relational database tables that handled
            challenge invitations while also separately handling tables for only
            those that had accepted the challenge really pushed me forward to
            learn the ins and outs of many-to-many table relationships.
          </p>
        </div>
      </div>

      <SkillsContainer>
        <h1 className="skillTitle">Main Technologies Used</h1>

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
