import React from 'react';

function SourceLink(props) {

    return (
        <a target="_blank" href={props.source}>
        <div onClick='goToSource' className='sourceLink'>
            {props.title}
        </div>
        </a>
    );
}

export default SourceLink;