import { createDisplayModal, createCloseModal, createClearForm } from "./utils.js";

const content = document.getElementById("content");

const selectedDeleteTask = target => target.id === "delete-task";
const selectedDeleteProject = target => target.id === "delete-project";

content.addEventListener("click", event => {
    if (selectedDeleteTask(event.target))
        confirmDeleteTask();

    else if (selectedDeleteProject(event.target))
        confirmDeleteProject();
});

const confirmDeleteModal = document.getElementById("confirm-delete");
const confirmDeleteForm = confirmDeleteModal.firstElementChild;
const cancelDeleteButton = confirmDeleteForm.lastElementChild.firstElementChild;

cancelDeleteButton.addEventListener("click", createCloseModal(confirmDeleteModal));
confirmDeleteModal.addEventListener("close", createClearForm(confirmDeleteForm));
confirmDeleteForm.addEventListener("submit", createCloseModal(confirmDeleteModal));

function confirmDeleteTask() {
    confirmDeleteModal.classList.remove(...confirmDeleteModal.classList);
    confirmDeleteModal.classList.add("deleting-task");

    createDisplayModal(confirmDeleteModal)();
}

function confirmDeleteProject() {
    confirmDeleteModal.classList.remove(...confirmDeleteModal.classList);
    confirmDeleteModal.classList.add("deleting-project");

    createDisplayModal(confirmDeleteModal)();
}