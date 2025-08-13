import { createDisplayModal, createCloseModal, createClearForm } from "./utils.js";

const addProjectButton = document.getElementById("add-project");
const newProjectModal = document.getElementById("new-project");
const newProjectForm = newProjectModal.firstElementChild;
const cancelProjectButton = newProjectForm.lastElementChild.firstElementChild;

addProjectButton.addEventListener("click", createDisplayModal(newProjectModal));
cancelProjectButton.addEventListener("click", createCloseModal(newProjectModal));
newProjectModal.addEventListener("close", createClearForm(newProjectForm));
newProjectForm.addEventListener("submit", createCloseModal(newProjectModal));