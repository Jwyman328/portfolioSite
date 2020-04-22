import React, { useEffect } from "react";
import SourceLink from "./components/sourceLink";

import cloudNinePhoto from "../images/projectImages/cloudNineScreen.png";
import cloudNineNewsPhoto from "../images/projectImages/cloudNineNewsScreen.png";
import nodeGraph from "./projectImages/nodeChallenge/challengeGraph.png";

import ProjectPhotoContainer from "./components/projectPhotoContainer";
import SkillsContainer from "../components/skillsComponents/SkillsContainer";
import SkillsRow from "../components/skillsComponents/skillsRow";
import SkillsElement from "../components/skillsComponents/skillsElement";

//skill photos
import sassSvg from "../logos/logo-sass.svg";
import reactSvg from "../logos/logo-react.svg";
import djangoSvg from "../logos/django.svg";
import postgreSqlSgv from "../logos/postgresql.svg";


import ProjectHeader from "../components/headers/projectHeader";
import ProjectHeaderCloseable from "../components/headers/projectHeaderClosable";

function NodeFitness(props) {
  const backEndSource = "https://github.com/Jwyman328/cloud_nine_backend";
  const frontEndSource = "https://github.com/Jwyman328/cloud_nine";
  const appWebSite = "https://cloudnineband.netlify.app/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="background-design">
      <ProjectHeader className="projectHeaderMain" />
      <ProjectHeaderCloseable className="projectHeaderMobile" />

      <div className="projectTitle">
        <h1>Cloud Nine Band Site</h1>
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
          <ProjectPhotoContainer src={cloudNinePhoto} />
          <ProjectPhotoContainer src={cloudNineNewsPhoto} />
        </div>

        <div className="projectAboutTextContainer text-top">
          <h3>Description</h3>
          <p>
            A band site for Cloud Nine, a local band in the Boston area.
          </p>
          <h3>Features</h3>
          <ul>
            <li>Post Tour Dates</li>
            <li>Post Band news, including new releases</li>
            <li>Links to all important social media outlets</li>
          </ul>
          <h3>Project Story</h3>
          <p>
          This project is a professional band site for Cloud Nine a local rock band
           out of Boston, Massachusetts. The site is built with a user 
           friendly backend allowing the band to post tour and band news updates to be shown in the front-end.
          </p>
          <h3>Project Challenges</h3>
          <p>
          Creating a site with little interactivity, put
           pressure on the need to make the design really pop.
            In order to fulfill that goal, I embedded band videos, 
            focused on mobile friendly designs and added a touch of css animations.
          </p>

        </div>
      </div>

      <SkillsContainer>
        <h1 className="skillTitle">Main Technologies Used</h1>

        <SkillsRow>
          <SkillsElement name="React" logo={reactSvg} />
          <SkillsElement name="Sass" logo={sassSvg} />
          <SkillsElement name="Django REST Framework" logo={djangoSvg} />
          <SkillsElement name="PostgeSQL" logo={postgreSqlSgv} />


        </SkillsRow>
      </SkillsContainer>
    </div>
  );
}

export default NodeFitness;
