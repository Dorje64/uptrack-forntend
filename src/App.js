import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import Project from './containers/project';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects/:id" component={Project} />
    </Switch>
  </Router>
);

export default App;
