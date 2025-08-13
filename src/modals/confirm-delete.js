import { createDisplayModal, createCloseModal, createClearForm } from "./utils.js";

const content = document.getElementById("content");

const selectedDelete = target => target.id === "delete";

content.addEventListener("click", event => {
    if (selectedDelete(event.target))
        createDisplayModal(confirmDeleteModal)();
});

const confirmDeleteModal = document.getElementById("confirm-delete");
const confirmDeleteForm = confirmDeleteModal.firstElementChild;
const cancelDeleteButton = confirmDeleteForm.lastElementChild.firstElementChild;

cancelDeleteButton.addEventListener("click", createCloseModal(confirmDeleteModal));
confirmDeleteModal.addEventListener("close", createClearForm(confirmDeleteForm));
confirmDeleteForm.addEventListener("submit", createCloseModal(confirmDeleteModal));