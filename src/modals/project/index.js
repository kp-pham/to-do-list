import { createCloseModal, createClearForm } from "../utils.js";
import "./add-project.js";
import "./edit-project.js";

const projectModal = document.getElementById("project-modal");
const projectForm = projectModal.firstElementChild;
const cancelButton = projectForm.lastElementChild.firstElementChild;

cancelButton.addEventListener("click", createCloseModal(projectModal));
projectModal.addEventListener("close", createClearForm(projectForm));
projectForm.addEventListener("submit", createCloseModal(projectModal));