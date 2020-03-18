import React from 'react'
import HeaderElement from './headerElements/headerElement'

function Header(){
    return(
        <div className='headerContainer'>
            <HeaderElement className='headerElement' name ='About'/>
            <HeaderElement className='headerElement' name ='Projects'/>
            <HeaderElement className='headerElement' name ='Skills'/>
            <HeaderElement className='headerElement' name ='Contact'/>
        </div>
    )
}

export default Header