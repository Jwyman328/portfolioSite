import React from 'react'


function FooterElement(props){
    return(
        <div className='footerElement'>
                <div>
                    {props.title}
                </div>
                <div className = 'footerContent'>
                    {props.content}
                </div>
        </div>
    )
}

export default FooterElement;