import React from 'react';
import {withRouter} from 'react-router-dom'

function ProjectElement(props) {
    const routeToApp = () => {
        props.history.push(props.routeName)
    }

    return (
        <div className="container">
          <img className="projectImage" src={props.src} />
          <div class="overlay">
            <div onClick={routeToApp} class="textButton">{props.appName}</div>
        </div>
        </div>
    );
}

export default withRouter(ProjectElement);