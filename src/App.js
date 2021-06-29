import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./Theme.css";
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Projects from './components/pages/Projects/Projects';
import Experience from './components/pages/Experience/Experience';
import AboutMe from './components/pages/AboutMe/AboutMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
          <Route path='/about-me' component={AboutMe} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
