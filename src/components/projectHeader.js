import React from 'react'

import profilePic from '../images/profilePic.jpg';
import { withRouter} from "react-router-dom";

function ProjectHeader(props){
    const goHome = () => {
        props.history.push('/')
    }
    return(
        <div className='projectHeaderContainer'>
            <div >
                <img src={profilePic} className='profilePic' />
            </div>
            <div className='headerElement' onClick={goHome}>
                Home
            </div>


        </div>
    )
}

export default withRouter(ProjectHeader);