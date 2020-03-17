import React from 'react'
import HeaderElement from './headerElement'
import profilePic from '../images/profilePic.jpg';

function Header(){
    return(
        <div className='headerContainer'>
            <div >
                <img src={profilePic} className='profilePic' />
            </div>
            <HeaderElement name ='About'/>
            <HeaderElement name ='Projects'/>
            <HeaderElement name ='Skills'/>
            <HeaderElement name ='Contact'/>
        </div>
    )
}

export default Header