import React from 'react'
import HeaderElement from './headerElement'
import profilePic from '../images/profilePic.jpg';

function Header(){
    return(
        <div className='headerContainer'>
           {/* <div >
                <img src={profilePic} className='profilePic' />
           </div>*/}
            <HeaderElement className='headerElement' name ='About'/>
            <HeaderElement className='headerElement' name ='Projects'/>
            <HeaderElement className='headerElement' name ='Skills'/>
            <HeaderElement className='headerElement' name ='Contact'/>
        </div>
    )
}

export default Header