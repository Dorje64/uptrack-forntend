import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });
// const githubApi = axios.create({ baseURL: 'https://api.github.com' });
// console.log(process.env)
// debugger;
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

export function getUpdateCount() {
  return api.get('updates-count');
}

// export function getCommits(username, repo) {
//   return githubApi.get(`${username}/${repo}/commit_activity`);
// }
