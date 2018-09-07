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
            <div className="card">
              <div className="card-body">
                <h3 className="project-name"> {project.name} </h3>
                <p className="desciption-tex"> {project.description} </p>
              </div>
              <div className="card-footer">
                <span className="project-details"> {project.repo_dir} </span>
                <span className="project-details"> Total Updates:{updates.length} </span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 update-list">
              {this.renderProjectList(updates)}
            </div>
            <div className="col-md-6 editor order-sm-1">
              <Editor updateData={this.updateData} projectId={project.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
