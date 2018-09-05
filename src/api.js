import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8000/' });

export function createProject(payload) {
  return api.post('projects/', payload);
}

export function fetchProjects() {
  return api.get('projects/');
}

export function getProject(projectId) {
  return api.get(`projects/${projectId}`);
}

export function createUpdate(payload) {
  const { project } = payload;
  return api.post(`projects/${project}/updates/`, payload);
}

export function fetchUpdates(projectId) {
  return api.get(`projects/${projectId}/updates/`);
}
