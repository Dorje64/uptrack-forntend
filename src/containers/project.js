import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import Header from '../components/header';
import Editor from '../components/editor';
import { getProject, fetchUpdates } from '../api';
import '../styles/project.css';
import { dateInWords } from '../helpers';

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

  renderProjectList = updates => (
    <div className="card">
      <div className="card-header heading">Update List</div>
      { updates.map(update => (
        <div className="update">
          <div>
            { renderHTML(update.text) }
          </div>
          <span className="date">
            {dateInWords(update.created_at)}
          </span>
        </div>)) }
    </div>)

  updateData = (response) => {
    const { updates } = this.state;
    this.setState({ updates: [response.data, ...updates] });
  }

  render() {
    const { project, updates } = this.state;
    return (
      <div className="page-wrapper">
        <Header />
        <div className="container">
          <div className="project-desciption">
            <div className="card container">
              <h3 className="project-name"> Project: {project.name} </h3>
              <h6 className="project-details">Repo Dir:{project.repo_dir} </h6>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              {this.renderProjectList(updates)}
            </div>
            <div className="col-md-6">
              <Editor updateData={this.updateData} projectId={project.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
