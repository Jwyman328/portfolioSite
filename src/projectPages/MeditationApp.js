import React, {useEffect} from "react";
import SourceLink from "./components/sourceLink";
import healthLanding from "./projectImages/meditationImages/healthDataLanding.png";
import chooseCourse from "./projectImages/meditationImages/chooseCourse.png";
import playMeditation from "./projectImages/meditationImages/playMeditation.png";
import ProjectPhotoContainer from "./components/projectPhotoContainer";
import SkillsContainer from "../components/skillsComponents/SkillsContainer";
import SkillsRow from "../components/skillsComponents/skillsRow";
import SkillsElement from "../components/skillsComponents/skillsElement";

//skill photos

import DRFLogo from "../logos/djangoREST.png";
import djangoSvg from "../logos/django.svg";
import reactSvg from "../logos/logo-react.svg";
import postgreSqlSgv from "../logos/postgresql.svg";
import reduxSvg from "../logos/redux.svg";

import ProjectHeader from '../components/headers/projectHeader'
import ProjectHeaderCloseable from '../components/headers/projectHeaderClosable'

function MeditationApp(props) {
  const backEndSource = "https://github.com/Jwyman328/meditation_app_backend";
  const frontEndSource = "https://github.com/Jwyman328/meditation_app";
  const appWebSite = "https://expo.io/@jwyman328/meditation_app";
  
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="background-design">
      <ProjectHeader />
      <ProjectHeaderCloseable className='projectHeaderMobile' />


      <div className="projectTitle">
        <h1>Meditation App</h1>
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
            <ProjectPhotoContainer src={chooseCourse} />
            <ProjectPhotoContainer src={playMeditation} />
          </div>

          <div className="projectAboutTextContainer">
            <h3>Description</h3>
            <p>
              A meditation and fitness app focused on mental and physical health
              built with React Native and Redux.
            </p>
            <h3>Features</h3>
            <ul>
              <li>Listen to Meditations</li>
              <li>Track Steps</li>
              <li>Track Calories</li>
              <li>Track your Mood/ Mood swings</li>
              <li>Create a Journal</li>
              <li>Message Friends</li>
            </ul>
          </div>
      </div>

      <SkillsContainer>
        <h2 className="skillTitle">Main Technologies Used</h2>

        <SkillsRow>
          <SkillsElement name="React Native" logo={reactSvg} />
          <SkillsElement name="Redux" logo={reduxSvg} />
          <SkillsElement name="Django REST Framework" logo={djangoSvg} />
          <SkillsElement name="PostgeSQL" logo={postgreSqlSgv} />
        </SkillsRow>
      </SkillsContainer>
    </div>
  );
}

export default MeditationApp;
