import React, { useEffect } from "react";
import SourceLink from "./components/sourceLink";
import individualMeditationCoursePhoto from "../images/projectImages/meditation_web_app_fs_photo.png";
import createJournalPhoto from "../images/projectImages/meditation_web_app_journal_photo.png";
import ProjectPhotoContainer from "./components/projectPhotoContainer";
import SkillsContainer from "../components/skillsComponents/SkillsContainer";
import SkillsRow from "../components/skillsComponents/skillsRow";
import SkillsElement from "../components/skillsComponents/skillsElement";

//skill photos

import angularSvg from "../logos/angularLogo.svg";
import sassLogo from "../logos/logo-sass.svg";
import typeScriptSvg from "../logos/typescriptLogo.svg";

import nodeJs from "../logos/logo-nodejs.svg";
import mongoDb from "../logos/mongoDBStack.svg";

import ProjectHeader from "../components/headers/projectHeader";
import ProjectHeaderCloseable from "../components/headers/projectHeaderClosable";

function MeditationWebApp(props) {
  const backEndSource = "https://github.com/Jwyman328/meditation_web_app_backend";
  const frontEndSource = "https://github.com/Jwyman328/meditation_web_app";
  const appWebSite = "https://reverent-jepsen-7d1dce.netlify.app/login";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background-design">
      <ProjectHeader />
      <ProjectHeaderCloseable className="projectHeaderMobile" />

      <div className="projectTitle">
        <h1>Meditation Web App</h1>
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
          <ProjectPhotoContainer src={individualMeditationCoursePhoto} />
          <ProjectPhotoContainer src={createJournalPhoto} />
        </div>

        <div className="projectAboutTextContainer">
          <h3>Description</h3>
          <p>
            A meditation app focused on mental  health
            built with Angular, TypeScript, and Django Rest Framework.
          </p>
          <h3>Features</h3>
          <ul>
            <li>Listen to Meditations</li>
            <li>Track your Meditation Habits</li>
            <li>Track your Mood/ Mood swings</li>
            <li>Create a Journal</li>
          </ul>
          <h3>Project Story</h3>
          <p>
            A job opportunity arose that would require Angular and TypeScript, 
            having never touched Angular, and being immersed in the world of React,
            I knew I had to create a real project with Angular to prepare myself.
          </p>
          <h3>Project Challenges</h3>
          <p>
            Having to pick up a new technology  seemed challenging 
            but my previous experience with
            react helped lessen the learning curve. The general concepts 
            between the two technologies are similar but with different ways 
            to handle similar problems helped me grasp Angular's core concepts
            of observables, dependency service injection, directives and more.
          </p>
        </div>
      </div>

      <SkillsContainer>
        <h1 className="skillTitle">Main Technologies Used</h1>

        <SkillsRow>
          <SkillsElement name="Angular" logo={angularSvg} />
          <SkillsElement name="TypeScript" logo={typeScriptSvg} />
          <SkillsElement name="Sass" logo={sassLogo} />
          <SkillsElement name="Node.js" logo={nodeJs} />
          <SkillsElement name="MongoDB" logo={mongoDb} />
        </SkillsRow>
      </SkillsContainer>
    </div>
  );
}

export default MeditationWebApp;
