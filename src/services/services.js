import { populateProjects } from '../views/view.js'
const projectsPath = "projects";

const baseProjectsURL = import.meta.env.VITE_DOMAIN + "/" + projectsPath;

function buildFetchOptions(method, bodyObject) {
  let fetchOptions = {
    method: method.toLowerCase(),
    headers: {}
  };

  if (method.toLowerCase() === 'post' || method.toLowerCase() === 'put' || method.toLowerCase() === 'patch') {
    fetchOptions.body = JSON.stringify(bodyObject);
    fetchOptions.headers['Content-Type'] = 'application/json';
  }

  const jwtToken = localStorage.getItem("JWT");
  if (jwtToken) {
    fetchOptions.headers['Authorization'] = `Basic ${jwtToken}`;
  }

  return fetchOptions;
}
async function makeAPICall(url, method, idParam, bodyObject) {
  let fetchOptions = buildFetchOptions(method, bodyObject);
  if (idParam && idParam != null) {
    url += "/" + idParam;
  }
  console.log("API Call: " + url);
  console.log(bodyObject);
  let apiResponse = await fetch(url, fetchOptions);
  if (apiResponse.status != 200) return undefined;
  let apiResponseJSON = await apiResponse.json();
  return apiResponseJSON;
}

export async function getProjectList() {
  let projectList = await makeAPICall(baseProjectsURL, "get");

  //reversed so most recent is first
  return projectList.reverse();
}

export async function loadProjects() {
  let projectList = await getProjectList();

  populateProjects(projectList);
}

export async function getProject(projectId) {
  let project = await makeAPICall(baseProjectsURL, "get", projectId);
  return project;
}

export async function deleteProject(projectId) {
  await makeAPICall(baseProjectsURL, "delete", projectId)
  loadProjects();
}

