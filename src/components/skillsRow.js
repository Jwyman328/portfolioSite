import React from 'react';

function SkillsRow(props) {
    return (
        <div className="skillsRow">
            {props.children}
        </div>
    );
}

export default SkillsRow;