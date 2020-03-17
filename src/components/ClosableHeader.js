import React, { useState } from "react";
import HeaderElement from "./headerElement";
import profilePic from "../images/profilePic.jpg";
import MenuIcon from "../logos/menu.svg";

function CloseableHeader() {
 const [open, setOpen] = useState(false);
 const OpenMenu = () => {
    setOpen(!open)
 }
  return (
    <div className="closeableHeaderContainer">

  <div onClick={OpenMenu} className="menuIcon ">
        <img src={MenuIcon} />
      </div> 
     {open?  <div>
        <HeaderElement className='closeableHeaderElement' name="About" />
        <HeaderElement className='closeableHeaderElement' name="Projects" />
        <HeaderElement className='closeableHeaderElement' name="Skills" />
        <HeaderElement className='closeableHeaderElement' name="Contact" />
      </div>: null }
    </div>
  );
}

export default CloseableHeader;
