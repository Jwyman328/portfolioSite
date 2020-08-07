import React, { useState } from "react";

import profilePic from "../../images/profilePic.jpg";
import { withRouter } from "react-router-dom";
import MenuIcon from "../../logos/menu.svg";
import CloseableProjectHeaderElement from "./projectHeaderElements/projectHeaderCloseableElement";

function ProjectHeaderCloseable(props) {
  const [open, setOpen] = useState(false);
  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="closeableProjectHeaderContainer">
      {open ? (
        <CloseableProjectHeaderElement name="Home" goToLocation="/" />
      ) : null}
      {open ? (
        <CloseableProjectHeaderElement
          name="Meditation"
          goToLocation="/MeditationApp"
        />
      ) : null}
      {open ? (
        <CloseableProjectHeaderElement
          name="Fitness"
          goToLocation="/FitnessApp"
        />
      ) : null}
      {open ? (
        <CloseableProjectHeaderElement name="Habit" goToLocation="/HabitApp" />
      ) : null}
      {open ? (
        <CloseableProjectHeaderElement
          name="Node-Fitness"
          goToLocation="/NodeFitness"
        />
      ) : null}
      {open ? (
        <CloseableProjectHeaderElement
          name="Cloud-Nine"
          goToLocation="/CloudNineBand"
        />
      ) : null}
       {open ? (
        <CloseableProjectHeaderElement
          name="Meditation-Web-App"
          goToLocation="/MeditationWebApp"
        />
      ) : null}
             {open ? (
        <CloseableProjectHeaderElement
          name="Universidad Bastos"
          goToLocation="/UniversidadDeBastos"
        />
      ) : null}


      <div onClick={OpenMenu} className="projectMenuIcon ">
        <img src={MenuIcon} />
      </div>
    </div>
  );
}

export default withRouter(ProjectHeaderCloseable);
