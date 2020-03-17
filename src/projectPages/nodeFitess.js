import React, {useEffect} from "react";
import SourceLink from "./components/sourceLink";


import fullChallenge from '../images/projectImages/fullChallenge.png'
import nodeGraph from './projectImages/nodeChallenge/challengeGraph.png'

import ProjectPhotoContainer from "./components/projectPhotoContainer";
import SkillsContainer from "../components/SkillsContainer";
import SkillsRow from "../components/skillsRow";
import SkillsElement from "../components/skillsElement";

//skill photos

import nodeJs from "../logos/logo-nodejs.svg";
import cssSvg from '../logos/logo-css3.svg'
import mongoDb from "../logos/mongoDBStack.svg";
import reactSvg from "../logos/logo-react.svg";
import redisSvg from '../logos/redis.svg'
import dockerSvg from '../logos/docker.svg'

import ProjectHeader from '../components/projectHeader'


function NodeFitness(props) {
  const backEndSource = "https://github.com/Jwyman328/fitnessAppNode";
  const frontEndSource = "https://github.com/Jwyman328/fitnessAppNodeFrontEnd";
  const appWebSite = "https://mighty-garden-11870.herokuapp.com/login";
  
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  
  return (
    <div className="background-design">
            <ProjectHeader />

      <div className="projectTitle">
        <h1>Node Fitness App</h1>
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
            <ProjectPhotoContainer src={fullChallenge} />
            <ProjectPhotoContainer src={nodeGraph} />
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
          <SkillsElement name="React" logo={reactSvg} />
          <SkillsElement name="CSS" logo={cssSvg} />
          <SkillsElement name="Node.js" logo={nodeJs} />
          <SkillsElement name="MongoDB" logo={mongoDb} />
          <SkillsElement name="Docker" logo={dockerSvg} />
          <SkillsElement name="Redis" logo={redisSvg} />
        </SkillsRow>
      </SkillsContainer>
    </div>
  );
}

export default NodeFitness;
