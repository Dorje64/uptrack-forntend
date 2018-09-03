import React, { Component } from 'react';
import Header from '../components/header';
import Editor from '../components/editor';

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // projectId: props.match.params.id ,
    };
  }

  render() {
    return (
      <div className="page-wrapper">
        <Header />
        <div className="container">
          <div className="project-desciption">
            Project name
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="card">
                project list
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
