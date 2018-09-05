import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = project => (
  <div className="col-md-4 col-lg-3 col-sm-6">
    <div className="card">
      <div className="card-body">
        <h1>
          {project.project.name}
          {' '}
        </h1>
        {' '}
        {project.project.repo_dir}
        <Link to={`/projects/${project.project.id}`}> <span>details</span> </Link>
      </div>
    </div>
  </div>
);

export default ProjectCard;
