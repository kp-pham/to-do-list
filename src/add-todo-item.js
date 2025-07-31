const button = document.getElementById("add-task");
const modal = document.getElementById("new-task");
const form = modal.firstChild;
const cancelButton = document.querySelector(".cancel-form");

const displayModal = () => modal.showModal();
const closeModal = () => modal.close();

button.addEventListener("click", displayModal);
cancelButton.addEventListener("click", closeModal);

const projectModal = document.getElementById("new-project");

document.getElementById("add-project").addEventListener("click", event => {
    projectModal.showModal();
});