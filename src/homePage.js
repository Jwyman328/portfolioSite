import React from 'react';
import profilePic from './images/profilePic.jpg';
import './App.css';
import Header from './components/header'
import Skills from './components/skills'
import About from './components/about'
import Projects from './components/projects'
import { Link, Element, } from "react-scroll";
import Footer from './components/footer/footer'
 


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function HomePage(props) {
    return (
    <div >
      <div className="background-design">
        <Header />

        <Element name='About' > <About /></Element>
        <Element name='Projects'  className='projects' > <Projects /></Element>
        <Element name='skills'  className='Skills' ><Skills /></Element> 
      </div>
    </div>
    );
}

export default HomePage;