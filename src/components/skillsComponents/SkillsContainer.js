import React from "react";

function SkillsContainer(props) {
  return (
    <div className="skillsContinerOpacity">
      <div className="skillsContiner">
            {props.children}

      </div>
    </div>
  );
}

export default SkillsContainer;
