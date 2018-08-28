import React from 'react';

const ProjectCard = project => (
  <div className="col-md-4 col-lg-3 col-sm-6">
    <div className="card">
      <div className="card-body" style={{ backgroundColor: 'blue' }}>
        <h1>{project.project.name}</h1>
        {project.project.repo}
      </div>
    </div>
  </div>
);

export default ProjectCard;
