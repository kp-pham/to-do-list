import { createDisplayModal } from "../utils.js";

const addProjectButton = document.getElementById("add-project");
const newProjectModal = document.getElementById("project-modal");
const newProjectForm = newProjectModal.firstElementChild;

addProjectButton.addEventListener("click", createNewProjectModal);

function createNewProjectModal() {
    newProjectModal.classList.remove(...newProjectModal.classList);
    newProjectModal.classList.add("adding-project");
    newProjectForm.lastElementChild.lastElementChild.textContent = "Create project";

    createDisplayModal(newProjectModal)();
}