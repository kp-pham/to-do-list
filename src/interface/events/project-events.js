import { createProject } from "../../modals";
import { viewTodoItems, updateProjectDropdown } from "./utils.js";

function setUpProjectEvents(app) {
    setUpProjectExpanded(app);
    setUpProjectCreated(app);
    setUpProjectEdited(app);
    setUpProjectDeleted(app);
}

function setUpProjectExpanded(app) {
    const projects = document.querySelector(".projects");

    const projectExpanded = target => target.tagName === "BUTTON";

    projects.addEventListener("click", function(event) {
        if (projectExpanded(event.target))
            app.expandProject(event.target.dataset.id);
    });
}

function setUpProjectCreated(app) {
    const projectModal = document.getElementById("project-modal");

    const creatingProject = () => projectModal.classList.contains("adding-project");

    projectModal.addEventListener("submit", function(event) {
        event.preventDefault();

        const project = createProject();

        if (creatingProject()) {
            app.storeProject(project);
            app.displayProjects();

            updateProjectDropdown(app);
        }
    });
}

function setUpProjectEdited(app) {
    const projectModal = document.getElementById("project-modal");

    const editingProject = () => projectModal.classList.contains("editing-project");

    projectModal.addEventListener("submit", function(event) {
        event.preventDefault();

        const project = createProject();

        if (editingProject()) {
            project.id = document.querySelector(".project-view").dataset.id;
            app.editProject(project);
        }
    });
}

function setUpProjectDeleted(app) {
    const confirmDeleteModal = document.getElementById("confirm-delete");

    const deletingProject = () => confirmDeleteModal.classList.contains("deleting-project");
    const getProjectId = () => document.querySelector(".project-view").dataset.id;

    confirmDeleteModal.addEventListener("submit", function(event) {
        event.preventDefault();

        if (deletingProject()) {
            app.deleteProject(getProjectId());
            app.displayTodoItems();
            app.displayProjects();

            updateProjectDropdown(app);
            viewTodoItems();
        }
    });
}

export default setUpProjectEvents;