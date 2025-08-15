import { createDisplayModal } from "../utils.js";

const addTaskButton = document.getElementById("add-task");
const newTaskModal = document.getElementById("task-modal");
const newTaskForm = newTaskModal.firstElementChild;

addTaskButton.addEventListener("click", createNewTaskModal);

function createNewTaskModal() {
    newTaskModal.classList.remove(...newTaskModal.classList);
    newTaskModal.classList.add("adding-task");
    newTaskForm.lastElementChild.lastElementChild.textContent = "Create task";

    createDisplayModal(newTaskModal)();
}