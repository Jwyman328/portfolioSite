import React from "react";

function SkillsElement(props) {
  return (
    <div className="skillsElement">
      <div>
        <img className="skillsPhoto" src={props.logo} />
      </div>
      <div>{props.name}</div>
    </div>
  );
}

export default SkillsElement;
