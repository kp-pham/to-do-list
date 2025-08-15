import { createDisplayModal, createCloseModal, createClearForm } from "./utils.js";

const addProjectButton = document.getElementById("add-project");
const newProjectModal = document.getElementById("project-modal");
const newProjectForm = newProjectModal.firstElementChild;
const cancelProjectButton = newProjectForm.lastElementChild.firstElementChild;

addProjectButton.addEventListener("click", createNewProjectModal);
cancelProjectButton.addEventListener("click", createCloseModal(newProjectModal));
newProjectModal.addEventListener("close", createClearForm(newProjectForm));
newProjectForm.addEventListener("submit", createCloseModal(newProjectModal));

function createNewProjectModal() {
    newProjectModal.classList.remove(...newProjectModal.classList);
    newProjectModal.classList.add("adding-project");
    newProjectForm.lastElementChild.lastElementChild.textContent = "Create project";

    createDisplayModal(newProjectModal)();
}