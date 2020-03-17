import React from 'react';

function ProjectPhotoContainer(props) {
    return (
        <div className='photoContainer'>
            <img src={props.src} className='projectPhoto' />
        </div>
    );
}

export default ProjectPhotoContainer;