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
            <h3>Project Story</h3>
          <p>
            One day I was approached by my brother to see if I was interested in a 
            freelancing gig to build a MVP meditation app for a friend of his who is a mindfull meditation 
            specialist. I had never built an app before, so before I agreed to the deal I
             wanted to see for myself if I could build a full fledge IOS app. After spending just 
             a few weeks getting the basics down of React Native I jumped right into building the app,
             seeing just how far I could take it. When I was finished I had an app far beyond what 
             I believed I could do in just a few short weeks. Everything from authentication, integrating audio,
             communicating with the phone to track steps, and much more. 
          </p>
          <h3>Project Challenges</h3>
          <p> Having to pick up a new technology (React Native and mobile development) seemed 
            challenging but my previous experience with react helped lessen the learning curve. 
            A major pitfall I fell into early was getting the program to deal with audio,
            but after lots of determination I finally got the audio mediations to work. As the 
            program grew and grew I needed to handle the challenges of managing large amounts of data 
            at each section of the program. This led me straight to redux. Quickly redux gave me problems 
            as I had to integrate it with my API calls, but once I got redux-thunk middleware 
            working, data management become easily manageable.</p>
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
