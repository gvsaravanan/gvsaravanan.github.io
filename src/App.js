import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Experiences from './components/pages/Experiences';
import Accomplishments from './components/pages/Accomplishments';
import AboutMe from './components/pages/AboutMe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/experiences' component={Experiences} />
          <Route path='/accomplishments' component={Accomplishments} />
          <Route path='/projects' component={Projects} />
          <Route path='/about-me' component={AboutMe} /> 
        </Switch>
      </Router>
    </>
  );
}

export default App;
