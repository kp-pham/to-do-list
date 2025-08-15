import { createDisplayModal } from "../utils.js";

const content = document.getElementById("content");
const deleteTaskModal = document.getElementById("confirm-delete");

const selectedDeleteTask = target => target.id === "delete-task";

content.addEventListener("click", event => {
    if (selectedDeleteTask(event.target))
        confirmDeleteTask();
});

function confirmDeleteTask() {
    deleteTaskModal.classList.remove(...deleteTaskModal.classList);
    deleteTaskModal.classList.add("deleting-task");

    createDisplayModal(deleteTaskModal)();
}