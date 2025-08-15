import { createCloseModal, createClearForm } from "./utils.js";
import "./add-task.js";
import "./edit-task.js";

const taskModal = document.getElementById("task-modal");
const taskForm = taskModal.firstElementChild;
const cancelButton = taskForm.lastElementChild.firstElementChild;

cancelButton.addEventListener("click", createCloseModal(taskModal));
taskModal.addEventListener("close", createClearForm(taskForm));
taskForm.addEventListener("submit", createCloseModal(taskModal));