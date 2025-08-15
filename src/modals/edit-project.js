import { createDisplayModal, createCloseModal, createClearForm } from "./utils.js";

const editProjectModal = document.getElementById("project-modal");
const editProjectForm = editProjectModal.firstElementChild;

const selectedEditProject = target => target.id === "edit-project";

content.addEventListener("click", event => {
    if (selectedEditProject(event.target))
        createEditProjectModal();
});

editProjectModal.addEventListener("close", createClearForm(editProjectForm));
editProjectForm.addEventListener("submit", createCloseModal(editProjectModal));

const fillFields = () => editProjectForm.firstElementChild.lastElementChild.value = document.querySelector(".title").textContent;

function createEditProjectModal() {
    editProjectModal.classList.remove(...editProjectModal.classList);
    editProjectModal.classList.add("editing-project");
    editProjectForm.lastElementChild.lastElementChild.textContent = "Save changes";

    fillFields();
    createDisplayModal(editProjectModal)();
}