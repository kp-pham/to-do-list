import { createDisplayModal } from "../utils.js";

const content = document.getElementById("content");
const deleteProjectModal = document.getElementById("confirm-delete");

const selectedDeleteProject = target => target.id === "delete-project";

content.addEventListener("click", event => {
    if (selectedDeleteProject(event.target))
        confirmDeleteProject();
});

function confirmDeleteProject() {
    deleteProjectModal.classList.remove(...deleteProjectModal.classList);
    deleteProjectModal.classList.add("deleting-project");

    createDisplayModal(deleteProjectModal)();
}