import { createDisplayModal, createCloseModal, createClearForm } from "./utils.js";

const addTaskButton = document.getElementById("add-task");
const newTaskModal = document.getElementById("task-modal");
const newTaskForm = newTaskModal.firstElementChild;
const cancelTaskButton = newTaskForm.lastElementChild.firstElementChild;

addTaskButton.addEventListener("click", createNewTaskModal);
cancelTaskButton.addEventListener("click", createCloseModal(newTaskModal));
newTaskModal.addEventListener("close", createClearForm(newTaskForm));
newTaskForm.addEventListener("submit", createCloseModal(newTaskModal));

function createNewTaskModal() {
    newTaskModal.classList.remove(...newTaskModal.classList);
    newTaskModal.classList.add("adding-task");
    newTaskForm.lastElementChild.lastElementChild.textContent = "Create task";

    createDisplayModal(newTaskModal)();
}