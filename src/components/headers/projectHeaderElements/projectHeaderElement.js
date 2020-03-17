import React from 'react';
import { withRouter } from "react-router-dom";

function ProjectHeaderElement(props) {

    const navigateTo = location => {
        console.log('location', location)
        props.history.push(location);
      };

    return (
        <div className="headerElement" onClick={() => navigateTo(props.goToLocation)}>
        {props.name}
      </div>
    );
}

export default withRouter(ProjectHeaderElement);