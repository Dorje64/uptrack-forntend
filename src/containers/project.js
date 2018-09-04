import React, { Component } from 'react';
import Header from '../components/header';
import Editor from '../components/editor';
import { getProject, createUpdate, fetchUpdates } from '../api';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectId: props.match.params.id,
      project: {},
      updates: [],
    };
  }

  componentDidMount() {
    const { projectId } = this.state;
    getProject(projectId)
      .then((res) => {
        this.setState({ project: res.data })
      })
      .catch((error) => { alert(error); });
    fetchUpdates(projectId)
      .then((res) => {
        this.setState({ updates: res.data })
      })
      .catch((error) => { alert(error); });
  }

  render() {
    const { project, updates } = this.state;
    return (
      <div className="page-wrapper">
        <Header />
        <div className="container">
          <div className="project-desciption">
            {project.name}
            {project.repo_dir}
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card">
                Update List
                { updates.map(update => (
                  <div className="update">
                    <p> { update.created_at } </p>
                    <span> { update.text } </span>
                  </div>)) }
              </div>
            </div>
            <div className="col-md-6">
              <Editor />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
