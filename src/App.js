import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./Theme.css";
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Projects from './components/pages/Projects/Projects';
import Experience from './components/pages/Experience/Experience';
import ReactGA from "react-ga";

function App() {

  useEffect(() => { 
    ReactGA.initialize("G-88LT0JCR7Z") 
    ReactGA.pageview(window.location.pathname + window.location.search) 
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path='/experience' exact component={Experience} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
