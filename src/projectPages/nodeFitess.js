import React, {useEffect} from "react";
import SourceLink from "./components/sourceLink";


import fullChallenge from '../images/projectImages/fullChallenge.png'
import nodeGraph from './projectImages/nodeChallenge/challengeGraph.png'

import ProjectPhotoContainer from "./components/projectPhotoContainer";
import SkillsContainer from "../components/skillsComponents/SkillsContainer";
import SkillsRow from "../components/skillsComponents/skillsRow";
import SkillsElement from "../components/skillsComponents/skillsElement";

//skill photos

import nodeJs from "../logos/logo-nodejs.svg";
import cssSvg from '../logos/logo-css3.svg'
import mongoDb from "../logos/mongoDBStack.svg";
import reactSvg from "../logos/logo-react.svg";
import redisSvg from '../logos/redis.svg'
import dockerSvg from '../logos/docker.svg'

import ProjectHeader from '../components/headers/projectHeader'
import ProjectHeaderCloseable from '../components/headers/projectHeaderClosable'

function NodeFitness(props) {
  const backEndSource = "https://github.com/Jwyman328/fitnessAppNode";
  const frontEndSource = "https://github.com/Jwyman328/fitnessAppNodeFrontEnd";
  const appWebSite = "https://mighty-garden-11870.herokuapp.com/login";
  
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  
  return (
    <div className="background-design">
            <ProjectHeader className='projectHeaderMain'/>
            <ProjectHeaderCloseable className='projectHeaderMobile' />

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
            <h3>Project Story</h3>
          <p>
            This project is an adaptation of another project, the Fitness Challenge App.
            To expand my knowledge but avoiding coming up with a brand new idea I rewrote the 
            Challenge Fitness App in completely different technologies.
              The app was previously written with django, bootstrap/CSS, postgreSQL
              and vanillaJS, but this version is written with react, node, mongoDB, redis, 
              django REST framework and css flexbox. Below is the story for 
              the original Fitness Challenge App
            </p>

            <p>
            My family considers themselves occasional workout enthusiasts that tend to 
            get competitive at any sign of competition. One year, in order to promote 
            each other to be healthier we started a fitness competition, simply 
            tracking our sleep, steps, workout and diet by logging it into 
            google sheets. As soon as I got my programming skills up, I knew exactly 
            what I wanted to build, a web app that would allow my family to easily track
            thier health habits and compete against one another by scoring points for how 
            healthy they had been. The project ended up growing well beyond what was once 
            just a simple google sheet, allowing users to set goals for themselves, 
            challenge other family members and see all their hard work laid out in 
            visually appealing graphs.
          </p>
          <h3>Project Challenges</h3>
          <p>
            The main challenges I faced was taking the leap to write the program in a test-drive 
            development manner. This worked out well at first but as the program grew, and my self
            imposed time limit of two week crept closer, I saw myself aboning strict TDD rules.
            Although I did not reach the complete code coverage I was seeking I did have to deal with
            the trade-offs of TDD, better written code, but an uptick in project length.
           
          </p>
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
