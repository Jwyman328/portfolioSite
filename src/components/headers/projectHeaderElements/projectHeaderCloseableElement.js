import React from 'react';
import { withRouter } from "react-router-dom";

function CloseableProjectHeaderElement(props) {

    const navigateTo = location => {
        console.log('location', location)
        props.history.push(location);
      };

    return (
        <div className="closeableHeaderElement" onClick={() => navigateTo(props.goToLocation)}>
        {props.name}
      </div>
    );
}

export default withRouter(CloseableProjectHeaderElement);