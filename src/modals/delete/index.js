import { createCloseModal, createClearForm } from "../utils.js";
import "./delete-project.js";
import "./delete-task.js";

const confirmDeleteModal = document.getElementById("confirm-delete");
const confirmDeleteForm = confirmDeleteModal.firstElementChild;
const cancelDeleteButton = confirmDeleteForm.lastElementChild.firstElementChild;

cancelDeleteButton.addEventListener("click", createCloseModal(confirmDeleteModal));
confirmDeleteModal.addEventListener("close", createClearForm(confirmDeleteForm));
confirmDeleteForm.addEventListener("submit", createCloseModal(confirmDeleteModal));