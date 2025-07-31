const button = document.getElementById("add-task");
const modal = document.getElementById("new-task");
const form = modal.firstChild;

const displayModal = () => modal.showModal();
const closeModal = () => modal.closeModal();

button.addEventListener("click", displayModal);