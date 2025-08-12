import { TodoItem, Project } from "./models.js";

const addTaskButton = document.getElementById("add-task");
const newTaskModal = document.getElementById("new-task");
const newTaskForm = newTaskModal.firstElementChild;
const cancelTaskButton = newTaskForm.lastElementChild.firstElementChild;

const addProjectButton = document.getElementById("add-project");
const newProjectModal = document.getElementById("new-project");
const newProjectForm = newProjectModal.firstElementChild;
const cancelProjectButton = newProjectForm.lastElementChild.firstElementChild;

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
    return new TodoItem(getTaskName(), getTaskDescription(), getDueDate(), getPriority());
}

const getTaskName = () => document.getElementById("task-name").value;
const getDueDate = () => document.getElementById("due-date").value;
const getTaskDescription = () => document.getElementById("task-description").value;
const getPriority = () => document.querySelector("input[name='priority']:checked").value;

function createProject() {
    return new Project(getProjectName(), getProjectDescription());
}

const getProjectName = () => document.getElementById("project-name").value;
const getProjectDescription = () => document.getElementById("project-description").value;

addTaskButton.addEventListener("click", createDisplayModal(newTaskModal));
addProjectButton.addEventListener("click", createDisplayModal(newProjectModal));

cancelTaskButton.addEventListener("click", createCloseModal(newTaskModal));
cancelProjectButton.addEventListener("click", createCloseModal(newProjectModal));

newTaskModal.addEventListener("close", createClearForm(newTaskForm));
newProjectModal.addEventListener("close", createClearForm(newProjectForm));

newTaskForm.addEventListener("submit", createCloseModal(newTaskModal));
newProjectForm.addEventListener("submit", createCloseModal(newProjectModal));

export { createTodoItem, createProject };