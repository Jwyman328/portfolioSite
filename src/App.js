import React from "react";
import profilePic from "./images/profilePic.jpg";
import "./App.css";
import Header from "./components/header";
import Skills from "./components/skills";
import About from "./components/about";
import Projects from "./components/projects";
import { Link, Element } from "react-scroll";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import HomePage from "./homePage";
import HabitApp from "./projectPages/HabitApp";
import FitnessApp from "./projectPages/FitnessApp";
import NodeFitness from "./projectPages/nodeFitess";
import MeditationApp from "./projectPages/MeditationApp";

function App() {
  return (
    <div className="App">
    <Router >

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
        <Element name='Contact'  className='Contact' > <Footer /> </Element>
    </Router>
    
    </div>
  );
}

export default App;
