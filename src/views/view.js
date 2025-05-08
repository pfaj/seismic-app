export function buildElement(tagName, attributeMap, textContent) {
  let newElement = document.createElement(tagName);
  for (let attributeName of attributeMap.keys()) {
    newElement.setAttribute(attributeName, attributeMap.get(attributeName));
  }
  if (textContent != null) {
    newElement.innerHTML = textContent;
  }
  return newElement;
}

export function buildDivContainer(className) {
  let attributeMap = new Map();
  attributeMap.set("class", className);

  let newDivElement = buildElement("div", attributeMap);
  return newDivElement;
}

export function buildDivElement(className) {
  let attributeMap = new Map();
  attributeMap.set("class", className);
  return buildElement("div", attributeMap);
}

export function buildTextEntry(tagName, content) {
  let textElement = document.createElement(tagName);
  textElement.innerHTML = content;
  return textElement;
}

export function buildImage(url) {
  let attributeMap = new Map();
  attributeMap.set("src", url);
  attributeMap.set("height", "1080" + "px");
  attributeMap.set("width", "1920" + "px");

  let newImage = buildElement("img", attributeMap);
  return newImage;
}

export function buildClickObject(functionName) {
  return buildElement("a", new Map().set("onClick", functionName));
}

export function addProject(project) {
  let clickFunction = buildClickObject(
    "showProjectSlideshow(" + project.id + ")",
  );
  let newProject = buildDivElement("galleryItem");
  newProject.append(buildImage(project.projectStills[0]));
  let overlay = buildDivContainer("overlay");
  overlay.append(buildTextEntry("h2", project.projectTitle));
  overlay.append(buildTextEntry("p", project.clientName));
  newProject.append(overlay);
  clickFunction.append(newProject);
  return clickFunction;
}

export function populateProjects(projectList) {
  let projectGallery = document.getElementById("gallery");
  projectGallery.innerHTML = ""; // Clears the gallery to input the new objects
  for (let project of projectList) {
    let newProject = addProject(project);
    projectGallery.append(newProject);
  }
}
