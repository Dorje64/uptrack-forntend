import React, { Component } from 'react';
import ProjectCard from '../components/project-card';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      // project: {},
    };
  }

  render() {
    return (
      <div className="page-wrapper">
        <header> fa </header>
        <div className="container">
          <div className="row page-info">
            Dashboard
          </div>
          <div className="row project-info">
            <ProjectCard />
            <ProjectCard />
          </div>
          <div className="row project-details" />
        </div>
      </div>
    );
  }
}
