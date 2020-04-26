import React from "react";
import meditationPhoto from "../../images/projectImages/meditation.png";
import habitPhoto from "../../images/projectImages/mainPageCheckedActivity.png";
import ProjectElement from "../headers/headerElements/projectElement";
import fitnessAppPhoto from "../../images/projectImages/fitnessAppLanding.png";
import cloudNinePhoto from "../../images/projectImages/cloudNineScreen.png";
import fullChallenge from "../../images/projectImages/fullChallenge.png";

function Projects(props) {
  return (
    <div className="projectsContainerOuter">
      <h1 className="homePageProjectsTitle">Projects</h1>

      <div className="projectsContainer">
        <ProjectElement
          src={meditationPhoto}
          routeName="MeditationApp"
          appName="View Meditation App"
        />
        <ProjectElement
          src={cloudNinePhoto}
          routeName="CloudNineBand"
          appName="View Cloud Nine Band"
        />
        <ProjectElement
          src={fitnessAppPhoto}
          routeName="FitnessApp"
          appName="View Fitness Challenge"
        />

        <ProjectElement
          src={fullChallenge}
          routeName="NodeFitness"
          appName="View Node Fitness"
        />
      </div>
      <div className="projectsContainer">
        <ProjectElement
          src={habitPhoto}
          routeName="HabitApp"
          appName="View Habit App"
        />
      </div>
    </div>
  );
}

export default Projects;
