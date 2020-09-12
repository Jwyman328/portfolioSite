import React from "react";
import meditationPhoto from "../../images/projectImages/meditation.png";
import habitPhoto from "../../images/projectImages/mainPageCheckedActivity.png";
import ProjectElement from "../headers/headerElements/projectElement";
import fitnessAppPhoto from "../../images/projectImages/fitnessAppLanding.png";
import cloudNinePhoto from "../../images/projectImages/cloudNineScreen.png";
import fullChallenge from "../../images/projectImages/fullChallenge.png";
import meditationWebAppPhoto from "../../images/projectImages/meditation_web_app_fs_photo.png";
import universidadDeBastosPhoto from "../../images/projectImages/allVideos.png";

function Projects(props) {
  return (
    <div className="projectsContainerOuter">
      <h1 className="homePageProjectsTitle">Projects</h1>
      <div className="projectsContainer">
        <ProjectElement
          src={universidadDeBastosPhoto}
          routeName="UniversidadDeBastos"
          appName="Universidad Bastos"
        />
        <ProjectElement
          src={meditationWebAppPhoto}
          routeName="MeditationWebApp"
          appName="View Meditation Web App"
        />

        <ProjectElement
          src={fullChallenge}
          routeName="NodeFitness"
          appName="View Node Fitness"
        />

        <ProjectElement
          src={cloudNinePhoto}
          routeName="CloudNineBand"
          appName="View Cloud Nine Band"
        />
      </div>

      <div className="projectsContainer">
        <ProjectElement
          src={meditationPhoto}
          routeName="MeditationApp"
          appName="View Meditation Mobile App"
        />

        <ProjectElement
          src={fitnessAppPhoto}
          routeName="FitnessApp"
          appName="View Fitness Challenge"
        />
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
