import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = project => (
  <div className="col-md-4 col-lg-3 col-sm-6">
    <div className="card">
      <div className="card-body" style={{ backgroundColor: 'blue' }}>
        <Link to={`/projects/${project.project.id}`}>
          <h1>
            {project.project.name}
            {' '}
          </h1>
          {' '}
        </Link>
        {project.project.repo_dir}
      </div>
    </div>
  </div>
);

export default ProjectCard;
