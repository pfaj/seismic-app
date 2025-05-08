import { useState } from "react";
import { validateForm } from "../../views/admin.js";

export default function ProjectEditForm({ project, type }) {
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    setSubmit(!submit);
    validateForm(e, type, project);
  };

  return (
    <form
      id="userForm"
      role="input"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
    >
      <legend className="formLegend">
        <h2>Edit Project</h2>
        <hr className="heroLine" />
      </legend>
      <div className="formItems">
        <div className="formItem">
          <label htmlFor="projectTitle">Project Name *</label>
          <input
            id="projectTitle"
            placeholder="Sour Note"
            type="text"
            name="projectTitle"
            defaultValue={!submit ? project?.projectTitle : ""}
          />
          <center>
            <div className="formError" id="formErrorTitle"></div>
          </center>
        </div>

        <div className="formItem">
          <label htmlFor="clientName">Client Name *</label>
          <input
            id="clientName"
            placeholder="Seismic Studios"
            type="text"
            name="clientName"
            defaultValue={!submit ? project?.clientName : ""}
          />
          <center>
            <div className="formError" id="formErrorClient"></div>
          </center>
        </div>

        <div className="formItem">
          <br />
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            placeholder="Select an Option"
            name="category"
            defaultValue={!submit ? project?.category : ""}
          >
            <option value=""></option>
            <option value="Animation">Animation</option>
            <option value="Commercial">Commercial</option>
            <option value="Corporate">Corporate</option>
            <option value="Documentary">Documentary</option>
            <option value="Experimental">Experimental</option>
            <option value="Feature Film">Feature Film</option>
            <option value="Music Video">Music Video</option>
            <option value="Narrative">Narrative</option>
            <option value="News/Current Affairs">News</option>
            <option value="Promotional">Promotional</option>
            <option value="Short Film">Short Film</option>
            <option value="Sports Documentary">Sports</option>
            <option value="Television">Television</option>
            <option value="Training/Educational">Educational</option>
            <option value="VR/360° Video">VR/360° Video</option>
            <option value="Web Series">Web Series</option>
          </select>
          <center>
            <div className="formError" id="formErrorCategory"></div>
          </center>
          <div className="formItem">
            <label htmlFor="projectFile">Project Stills *</label>
            <input
              type="file"
              placeholder="Project Stills"
              name="projectStills"
              multiple
              defaultValue={project?.Stills}
            />
          </div>
        </div>

        <div className="formItem">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            placeholder="Enter description..."
            name="description"
            cols="30"
            rows="5"
            defaultValue={!submit ? project?.description : ""}
          ></textarea>
          <center>
            <div className="formError" id="formErrorDescription"></div>
          </center>
        </div>
        <div className="formItem">
          <label htmlFor="link">Project Link</label>
          <input
            id="link"
            placeholder="Project Link"
            type="text"
            name="projectLink"
            defaultValue={!submit ? project?.projectLink : ""}
          />
        </div>

        <button className="button" id="submit" type="submit">
          Submit
        </button>

        <center>
          <div className="formSuccess" id="formSuccess"></div>
        </center>
      </div>
    </form>
  );
}
