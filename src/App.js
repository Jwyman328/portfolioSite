import React from "react";
import profilePic from "./images/profilePic.jpg";

import "../src/css/App.scss";

import "../src/css/MobileHeader.scss";
import "../src/css/MainHeader.scss";
import "../src/css/ProjectHeader.scss";
import "../src/css/Footer.scss";
import "../src/css/Skills.scss";
import "../src/css/About.scss";
import "../src/css/Projects.scss";

import Header from "./components/headers/header";
import Skills from "./components/homePageSections/skills";
import About from "./components/homePageSections/about";
import Projects from "./components/homePageSections/projects";
import { Link, Element } from "react-scroll";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import HomePage from "./homePage";
import HabitApp from "./projectPages/HabitApp";
import FitnessApp from "./projectPages/FitnessApp";
import NodeFitness from "./projectPages/nodeFitess";
import MeditationApp from "./projectPages/MeditationApp";
import CloudNine from './projectPages/CloudNine';
import MeditationWebApp from './projectPages/MeditationWebApp';
import UniversidadDeBastos from "./projectPages/UniversidadDeBastos";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/FitnessApp">
            <FitnessApp />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/NodeFitness">
            <NodeFitness />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/MeditationApp">
            <MeditationApp />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/HabitApp">
            <HabitApp />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/CloudNineBand">
            <CloudNine />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/MeditationWebApp">
            <MeditationWebApp />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/UniversidadDeBastos">
            <UniversidadDeBastos />
          </Route>
        </Switch>
        <Element name="Contact" className="Contact">
          <Footer />
        </Element>
      </Router>
    </div>
  );
}

export default App;
