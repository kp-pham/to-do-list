import { createDisplayModal, createCloseModal, createClearForm } from "./utils.js";

const addTaskButton = document.getElementById("add-task");
const newTaskModal = document.getElementById("new-task");
const newTaskForm = newTaskModal.firstElementChild;
const cancelTaskButton = newTaskForm.lastElementChild.firstElementChild;

addTaskButton.addEventListener("click", createDisplayModal(newTaskModal));
cancelTaskButton.addEventListener("click", createCloseModal(newTaskModal));
newTaskModal.addEventListener("close", createClearForm(newTaskForm));
newTaskForm.addEventListener("submit", createCloseModal(newTaskModal));