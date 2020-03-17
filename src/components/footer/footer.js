import React from 'react'
import FooterElement from './footerElement'
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import gitLogo from '../../logos/github.png'
import linkdenLogo from '../../logos/linkdenin.png'
import githubSvg from '../../logos/logo-github.svg'
import linkdenSvg from '../../logos/logo-linkedin.svg'

function Footer(props){
    const gitPho = <img className='footerLogo' src = {githubSvg} />
    const linkPho = <img className='footerLogo' src = {linkdenLogo} />

    const githubLink = <a   target="_blank" href='https://github.com/Jwyman328'> {gitPho} </a>
    const linkedinLink = <a   target="_blank" href='https://www.linkedin.com/in/joseph-wyman-3a1a65132/'> {linkPho} </a>

    return(
        <div className='footerContainer'>

            <FooterElement title='Joseph Wyman' content='Web Developer' />
            <FooterElement title='Location' content='Massachusetts, USA' />
            <FooterElement title='Email' content='jwymandev@gmail.com' />
            <FooterElement title='Github' content={githubLink} />
            <FooterElement title='Linkedin' content={linkedinLink} />
            
        </div>
    )
}

export default withRouter(Footer);