import React, { Component } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Input, Label, FormGroup,
} from 'reactstrap';
import ProjectCard from '../components/project-card';
import Header from '../components/header';
import Graph from '../components/graph';
import '../styles/home.css';
import { createProject, fetchProjects } from '../api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      modal: false,
    };
  }

  componentDidMount() {
    fetchProjects()
      .then((res) => {
        this.setState({ projects: res.data })
      })
  }

  renderPageInfo = () => (
    <div className="page-info">
      <span className="text"> DASHBOARD </span>
      <Button onClick={this.toggle} className="btn btn-primary create-button"> Create Project </Button>
      {this.modal()}
    </div>
  )

  modal = () => {
    const { modal } = this.state;
    return (
      <Modal isOpen={modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Create Project</ModalHeader>
        <ModalBody>
          {this.form()}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.createProject}>Create</Button>
        ;;  {' '}
          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  createProject = () => {
    const { repo_dir, projectName, projects } = this.state;
    const payload = { name: projectName, repo_dir: repo_dir };
    createProject(payload)
      .then((res) => {
        this.setState({ projects: [...projects, res.data] });
        this.toggle();
      })
      .catch((error) => { alert(error); })
  }

  form = () => (
    <div className="container">
      <FormGroup row>
        <Label>Project Name</Label>
        <Input type="text" name="projectName" placeholder="Project Name" onChange={this.handleInput} />
      </FormGroup>
      <FormGroup row>
        <Label>Project Repo</Label>
        <Input type="text" name="repo_dir" placeholder="github" onChange={this.handleInput} />
      </FormGroup>
      <FormGroup row>
        <Label>Username</Label>
        <Input type="email" name="username" placeholder="Repo username" onChange={this.handleInput} />
      </FormGroup>
      <FormGroup row>
        <Label>Password</Label>
        <Input type="password" name="password" onChange={this.handleInput} />
      </FormGroup>
    </div>
  );;

  render() {
    const { projects } = this.state;
    return (
      <div className="page-wrapper">
        <Header />
        <div className="container">
          <div className="row container">
            {this.renderPageInfo()}
          </div>
          <div className="row project-info">
            {projects.map(project => (<ProjectCard project={project} />))}
          </div>
          <div className="row project-details">
            <div className="col-sm-12 col-md-7">
              <Graph />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
