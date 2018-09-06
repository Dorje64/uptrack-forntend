import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = project => (
  <div className="col-md-4 col-lg-3 col-sm-6 project-card">
    <div className="card">
      <div className="card-body">
        <h3 className="project-name">
          {project.project.name}
          {' '}
        </h3>
        <span className="sup-text">{' code is stored '}</span>
        <span className="project-name">{project.project.repo_dir}</span>
      </div>
      <div className="card-footer">
        <Link to={`/projects/${project.project.id}`}> <span>view details</span> </Link>
      </div>
    </div>
  </div>
);

export default ProjectCard;
