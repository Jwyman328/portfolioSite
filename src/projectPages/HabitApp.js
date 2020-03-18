import React, { useEffect } from "react";
import SourceLink from "./components/sourceLink";

import dailyGraph from "./projectImages/habitImages/timedTimeGraph.png";
import habitPhoto from "../images/projectImages/mainPageCheckedActivity.png";

import ProjectPhotoContainer from "./components/projectPhotoContainer";
import SkillsContainer from "../components/skillsComponents/SkillsContainer";
import SkillsRow from "../components/skillsComponents/skillsRow";
import SkillsElement from "../components/skillsComponents/skillsElement";

//skill photos

import djangoSvg from "../logos/django.svg";
import cssSvg from "../logos/logo-css3.svg";
import postgreSqlSgv from "../logos/postgresql.svg";
import reactSvg from "../logos/logo-react.svg";

import ProjectHeader from "../components/headers/projectHeader";
import ProjectHeaderCloseable from "../components/headers/projectHeaderClosable";

function HabitApp(props) {
  const backEndSource = "https://github.com/Jwyman328/habit_tracket";
  const frontEndSource = "https://github.com/Jwyman328/habit_tracket_frontend";
  const appWebSite = "http://habit-tracker-app-frontend.herokuapp.com/login";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background-design">
      <ProjectHeader />
      <ProjectHeaderCloseable className="projectHeaderMobile" />

      <div className="projectTitle">
        <h1>Habit Tracking App</h1>
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
          <ProjectPhotoContainer src={habitPhoto} />
          <ProjectPhotoContainer src={dailyGraph} />
        </div>

        <div className="projectAboutTextContainer">
          <h3>Description</h3>
          <p>An app to track your habits and accomplish your goals!</p>
          <h3>Features</h3>
          <ul>
            <li>Daily and custom habit tracking</li>
            <li>Daily accomplished habit displays</li>
            <li>Graphs for each habit</li>
          </ul>
          <h3>Project Story</h3>
          <p>
            As a way to dive head first into react, while also having it talk with a
            completely seperate programming languaged backend, I decide to
            developed a habit tracking app. Not only was this app made for
            learning purposes but I felt that I could actually use it
             to track my time spent programming.
          </p>
          <h3>Project Challenges</h3>
          <p>Having previously been focused in stricly django I faced the challenges of leaving the comfort
            of coding in a world where everything was nicely bundled together.
            The batteries included aspect of django is nice to point you in the right direction,
            but separating myself from such restrictions propelled me to learn more, including 
            jwt vs cookie authentication, CORS, babel and webpack.
            The challenges of coding in two different enviornments, with completely different 
            syntax, package/enviornment managers, and communities seemed daunting at first,
            but once I navigated through to get both systems talking to one another I really 
            picked up steam.
            </p>
        </div>
      </div>

      <SkillsContainer>
        <h2 className="skillTitle">Main Technologies Used</h2>

        <SkillsRow>
          <SkillsElement name="React" logo={reactSvg} />
          <SkillsElement name="CSS" logo={cssSvg} />
          <SkillsElement name="Django REST Framework" logo={djangoSvg} />
          <SkillsElement name="PostgeSQL" logo={postgreSqlSgv} />
        </SkillsRow>
      </SkillsContainer>
    </div>
  );
}

export default HabitApp;
