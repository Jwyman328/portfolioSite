import React from "react";
import smallMainPhoto from "../../images/smallMainSide.png";

function About(props) {
  return (
    <div className="aboutContainer">
      <div>
        <img className="aboutPhoto" src={smallMainPhoto} />
      </div>
      <div className="aboutTextContainer">
        <h1 className='name-header'>Joseph Wyman</h1>
        <h3>Full Stack Web Developer</h3>
        <p>
          Hello there! I'm Joe, a passionate self-taught web developer on a
          journey to never stop learning. My passion for learning isn't only
          seen in web development but throughout many aspects of my life,
          including foreign language (Spanish), and music (guitar, keyboard).
        </p>
        <p> <span className='main-focus'>Main Focuses:</span> Web Applications, REST APIs</p>
      
        <div className="aboutEducation">
          <h4 className='education-title'>Education:</h4>
          <p>Masters: Economics </p>
          <li className="university">
            University of Rey Juan Carlos, Madrid, Spain{" "}
          </li>
          <p>Bachelors: Economics & Entrepreneurial Studies</p>
          <li className="university">
            Framingham State University, Massachusets, USA
          </li>
        </div>
      </div>
    </div>
  );
}

export default About;
