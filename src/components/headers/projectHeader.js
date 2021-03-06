import React from "react";

import profilePic from "../../images/profilePic.jpg";
import { withRouter } from "react-router-dom";
import MenuIcon from "../../logos/menu.svg";
import ProjectHeaderElement from './projectHeaderElements/projectHeaderElement'

function ProjectHeader(props) {
  const navigateTo = location => {
    props.history.push(location);
  };


  return (
    <div className="projectHeaderContainer">
         <ProjectHeaderElement name='Home' goToLocation='/' />
         <ProjectHeaderElement name='Meditation' goToLocation='/MeditationApp' />
         <ProjectHeaderElement name='Fitness' goToLocation='/FitnessApp' />
         <ProjectHeaderElement name='Habit' goToLocation='/HabitApp' />
         <ProjectHeaderElement name='Node-Fitness' goToLocation='/NodeFitness' />
         <ProjectHeaderElement name='Cloud-Nine' goToLocation='/CloudNineBand' />
         <ProjectHeaderElement name='Meditation-Web-App' goToLocation='/MeditationWebApp' />
         <ProjectHeaderElement name='Universidad-Bastos' goToLocation='/UniversidadDeBastos' />

        </div>
      

  );
}

export default withRouter(ProjectHeader);
