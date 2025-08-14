import { TodoItem, Project } from "../models.js"

function createDisplayModal(modal) {
    return function() {
        modal.showModal();
    }
}

function createCloseModal(modal) {
    return function() {
        modal.close();
    }
}

function createClearForm(form) {
    return function() {
        form.reset();
    }
}

function createTodoItem() {
    return new TodoItem(getTaskName(), getTaskDescription(), getDueDate(), getPriority(), getProjectId());
}

const getTaskName = () => document.getElementById("task-name").value;
const getDueDate = () =>  document.getElementById("due-date").value;
const getTaskDescription = () => document.getElementById("task-description").value;
const getPriority = () => document.querySelector("input[name='priority']:checked").value;

const noProjectSelected = option => option.value === "none";

function getProjectId() {
    const projectsDropdown = document.querySelector("select");
    const selectedOption = projectsDropdown.options[projectsDropdown.selectedIndex];

    return noProjectSelected(selectedOption) ? null : selectedOption.dataset.projectId;
}

function createProject() {
    return new Project(getProjectName());
}

const getProjectName = () => document.getElementById("project-name").value;

export { createDisplayModal, createCloseModal, createClearForm, createTodoItem, createProject };