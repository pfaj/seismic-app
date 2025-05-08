export async function validateForm(event, type, project) {
  event.preventDefault();

  document.getElementById("formErrorTitle").innerHTML = "";
  document.getElementById("formErrorClient").innerHTML = "";
  document.getElementById("formErrorCategory").innerHTML = "";
  document.getElementById("formErrorDescription").innerHTML = "";
  document.getElementById("formSuccess").innerHTML = "";

  let isValid = true;

  let projectTitle = document.getElementById("projectTitle").value.trim();
  let clientName = document.getElementById("clientName").value.trim();
  let category = document.getElementById("category").value.trim();
  let description = document.getElementById("description").value.trim();
  // let projectStills = document.querySelector('input[name="projectStills"]').files;

  if (!projectTitle) {
    document.getElementById("formErrorTitle").innerHTML =
      "Project name is required.";
    isValid = false;
  }

  if (!clientName) {
    document.getElementById("formErrorClient").innerHTML =
      "Client name is required.";
    isValid = false;
  }

  if (!category) {
    document.getElementById("formErrorCategory").innerHTML =
      "Please select a category.";
    isValid = false;
  }

  if (!description) {
    document.getElementById("formErrorDescription").innerHTML =
      "Description is required.";
  } else if (description.length < 10 || description.length > 250) {
    document.getElementById("formErrorDescription").innerHTML =
      "Must be between 10 and 250 characters.";
    isValid = false;
  }

  if (isValid) {
    const form = event.target;
    const formData = new FormData(form);

    try {
      if (type == "new") {
        await uploadProject(formData);
      }
      if (type == "edit") {
        await editProject(formData, project);
      }
      document.getElementById("formSuccess").innerHTML =
        "Form submitted successfully!";
      form.reset();
    } catch (error) {
      document.getElementById("formSuccess").innerHTML =
        "Error submitting form. Please try again.";
      console.error("Form submission error:", error);
    }
  }
}

const projectUrl = "http://localhost:9010/v1/projects/upload";
async function uploadProject(formData) {
  try {
    let fetchOptions = {
      method: "POST",
      body: formData,
      mode: "cors",
      headers: {},
    };
    const jwtToken = localStorage.getItem("JWT");
    fetchOptions.headers["Authorization"] = `Basic ${jwtToken}`;
    const response = await fetch(projectUrl, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Upload project error:", errorData);
      throw new Error(
        `HTTP error! status: ${response.status} - ${JSON.stringify(errorData)}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Upload project error:", error);
    throw error;
  }
}

async function editProject(formData, project) {
  const projectUrlEdit = `http://localhost:9010/v1/projects/${project?.id}`;
  try {
    let fetchOptions = {
      method: "PUT",
      body: formData,
      mode: "cors",
      headers: {},
    };
    const jwtToken = localStorage.getItem("JWT");
    fetchOptions.headers["Authorization"] = `Basic ${jwtToken}`;
    const response = await fetch(projectUrlEdit, fetchOptions);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Edit project error:", errorData);
      throw new Error(
        `HTTP error! status: ${response.status} - ${JSON.stringify(errorData)}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Edit project error:", error);
    throw error;
  }
}
