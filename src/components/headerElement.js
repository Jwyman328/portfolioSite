import React from "react";
import { Link, Element, } from "react-scroll";

function HeaderElement(props) {
  return (
    <Link
      activeClass="active"
      to={props.name}
      spy={true}
      smooth={true}
      offset={-100}
      duration={50}
     
    >
      <div className="headerElement">{props.name}</div>
    </Link>
  );
}

export default HeaderElement;
