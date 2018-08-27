import React, { Component } from 'react';
import ProjectCard from '../components/project-card';
import '../styles/home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          name: 'Limelight',
          repo: 'github',
          commit: '111',
        },
      ],
    };
  }

  renderPageInfo = () => (
    <div className="page-info">
      <span className="text"> DASHBOARD </span>
      <div type="button" className="btn btn-primary create-button"> Create Project </div>
    </div>
  )

  render() {
    const { projects } = this.state;
    return (
      <div className="page-wrapper">
        <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
          <span className="logo">
            Up | Track
          </span>
        </header>
        <div className="container">
          <div className="row container">
            {this.renderPageInfo()}
          </div>
          <div className="row project-info">
            {projects.map(project => (<ProjectCard project={project} />))}
          </div>
          <div className="row project-details" />
        </div>
      </div>
    );
  }
}
