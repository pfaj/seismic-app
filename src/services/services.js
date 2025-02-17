import {populateProjects} from '../views/view.js'
const projectPath = "project";
const projectsPath = "projects";

const getProjectsURL = process.env.REACT_APP_DOMAIN + "/" + projectsPath;
const baseProjectURL = process.env.REACT_APP_DOMAIN + "/" + projectPath;
const getProjectURL = baseProjectURL;
const createProjectURL = baseProjectURL;
const deleteProjectURL = baseProjectURL;
const editProjectURL = baseProjectURL;

function buildFetchOptions(method,bodyObject) {
    let fetchOptions = {};
    fetchOptions.method = method.toLowerCase();
    if (fetchOptions.method == 'post' || fetchOptions.method == 'put') {
        fetchOptions.body = JSON.stringify(bodyObject);
        fetchOptions.headers = {"Content-Type":"application/json"};
    }
    return fetchOptions;
}

async function makeAPICall(url,method,idParam,bodyObject) {
    let fetchOptions = buildFetchOptions(method,bodyObject);
    if (idParam && idParam != null) {
        url += "/"+idParam;
    }
    console.log("API Call: " + url);
    console.log(bodyObject);
    let apiResponse = await fetch(url,fetchOptions);
    if (apiResponse.status != 200) return undefined;
    let apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
}

export async function getProjectList() {
    let projectList = await makeAPICall(getProjectsURL,"get");
    
    //reversed so most recent is first
    return projectList.reverse();
}

export async function loadProjects() {
    let projectList = await getProjectList();

    populateProjects(projectList);
}

export async function getProject(projectId) {
    let project = await makeAPICall(getProjectURL,"get",projectId);
    return project;
}

