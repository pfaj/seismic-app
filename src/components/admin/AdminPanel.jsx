import { useEffect, useState } from "react";
import { getProjectList, deleteProject } from "../../services/services.js";

import ProjectAddingForm from "./ProjectAddingForm";

export default function AdminPanel() {
  const [projectList, setProjectList] = useState([]);
  const [popup, setPopup] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);

  async function initProjects() {
    let res = await getProjectList();
    console.log(res);
    setProjectList(res);
  }

  const handleEdit = (project) => {
    setSelectedProject(JSON.stringify(project));
    setPopup({ visible: true, type: "edit" });
  };

  const handleAdd = () => {
    setPopup({ visible: true, type: "new" });
  };

  useEffect(() => {
    initProjects();
  }, []);

  return (
    <>
      <div className="topRow">
        <button className="editButton" onClick={() => handleAdd()}>
          <div>+ Add New Project</div>
        </button>
      </div>
      <table className="projectTable">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Project</th>
            <th>Client</th>
            <th>Description</th>
            <th>Project Link</th>
            <th>Stills</th>
            <th></th>
          </tr>
          {projectList.map((p, index) => (
            <tr className="projectRow" key={index + "-tr"}>
              <td id={index + "-id"}>{p.id}</td>
              <td id={index + "-title"}>{p.projectTitle}</td>
              <td id={index + "-client"}>{p.clientName}</td>
              <td id={index + "-description"}>{p.description}</td>
              <td id={index + "-project-link"}>
                {p.projectLink == "" ? "No Link" : p.projectLink}
              </td>
              <td id={index + "-stills"}>Stills</td>
              <td id={index + "-edit"} className="buttonContainer">
                <button
                  className="editButton"
                  onClick={() => {
                    handleEdit(p);
                    setSelectedProject(p);
                  }}
                >
                  <img
                    className="editIcon"
                    src="/images/edit.svg"
                    alt="Edit Icon"
                  />
                </button>
                <button
                  className="deleteButton"
                  onClick={() => {
                    deleteProject(p.id);
                    initProjects();
                  }}
                >
                  <img
                    className="editIcon"
                    src="/images/trash.svg"
                    alt="Delete Icon"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popup.visible && (
        <section className="editProjectPopup" id="editProjectPopup">
          <div className="editProjectContainer" id="editProjectContainer">
            {popup.type == "new" ? (
              <ProjectAddingForm type={"new"} />
            ) : (
              <ProjectAddingForm project={selectedProject} type={"edit"} />
            )}
          </div>
          <a
            className="editProjectBackground"
            onClick={() => setPopup({ visible: false, type: null })}
          >
            <div className="editProjectBackground hidden"></div>
          </a>
        </section>
      )}
    </>
  );
}
