import React from "react";
import FooterElement from "./footerElement";
import { BrowserRouter, Route, Link, withRouter } from "react-router-dom";
import gitLogo from "../../logos/github.png";
import linkdenLogo from "../../logos/linkdenin.png";
import githubSvg from "../../logos/logo-github.svg";
import linkdenSvg from "../../logos/logo-linkedin.svg";
import resume from './JosephWymanResume.pdf'
function Footer(props) {
  const gitPho = <img className="footerLogo" src={githubSvg} />;
  const linkPho = <img className="footerLogo" src={linkdenLogo} />;

  const githubLink = (
    <a target="_blank" href="https://github.com/Jwyman328">
      {gitPho}
    </a>
  );
  const linkedinLink = (
    <a
      target="_blank"
      href="https://www.linkedin.com/in/joseph-wyman-3a1a65132/"
    >
      {linkPho}
    </a>
  );

  const resumeTag = (
    <a className="Resume" href={resume} download>
      Download
    </a>
  );

  return (
    <div className="footerContainer">
      <FooterElement title="Phone" content="1-508-745-9689" />
      <FooterElement title="Location" content="Massachusetts" />
      <FooterElement title="Email" content="jwymandev@gmail.com" />
      <FooterElement title="Resume" content={resumeTag} />
      <FooterElement title="Github" content={githubLink} />
      <FooterElement title="Linkedin" content={linkedinLink} />
    </div>
  );
}

export default withRouter(Footer);
