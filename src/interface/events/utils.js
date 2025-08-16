const viewTodoItems = () =>  document.getElementById("view-tasks").dispatchEvent(new MouseEvent("click", { bubbles: true }));

function updateProjectDropdown(app) {
    const projectsDropdown = document.querySelector("select");

    projectsDropdown.replaceChildren(projectsDropdown.firstElementChild);
    Object.values(app.projects).forEach(project => projectsDropdown.appendChild(createOption(project)));
}

function createOption(project) {
    const option = document.createElement("option");
    option.textContent = project.title;
    option.value = project.title;
    option.dataset.id = project.id;

    return option;
}

export { viewTodoItems, updateProjectDropdown };