import { createTodoItem, createProject } from "./modals";
import { DisplayController } from "./display";
import Application from "./app.js";
import "./interface";
import "./styles.css";

const todoApp = new Application();

const app = new DisplayController();

const content = document.getElementById("content");
const projects = document.querySelector(".projects");
const taskModal = document.getElementById("task-modal");
const projectModal = document.getElementById("project-modal");
const confirmDeleteModal = document.getElementById("confirm-delete");

const projectsDropdown = document.querySelector("select");

document.addEventListener("DOMContentLoaded", function() {
    todoApp.load();
    updateProjectDropdown();
});

const todoItemExpanded = target => target.classList.contains("task") || target.parentElement.classList.contains("task");

content.addEventListener("click", function(event) {
    if (todoItemExpanded(event.target)) {
        document.querySelector(".open").classList.remove("open");
        const todoItem = event.target.classList.contains("task") ? event.target : event.target.parentElement;

        todoApp.expandTodoItem(todoItem);
    }
});

const projectExpanded = target => target.tagName === "BUTTON";

projects.addEventListener("click", function(event) {
    if (projectExpanded(event.target))
        todoApp.expandProject(event.target.dataset.id);
});

function createOption(project) {
    const option = document.createElement("option");
    option.textContent = project.title;
    option.value = project.title;
    option.dataset.id = project.id;

    return option;
}

const editingTodoItem = () => taskModal.classList.contains("editing-task");
const viewingTodoItem = () => content.classList.contains("tasks");
const viewingProject = id => content.classList.contains("project-expand") && document.querySelector(".open").dataset.id === id;

const getOpenedProject = () => document.querySelector(".open").dataset.id;

taskModal.addEventListener("submit", function(event) {
    event.preventDefault();

    const todoItem = createTodoItem();

    if (editingTodoItem()) {
        todoItem.id = document.querySelector(".task-view").dataset.id;
        todoApp.editTodoItem(todoItem);
    }
    else if (viewingTodoItem()) {
        todoApp.saveTodoItem(todoItem);
        todoApp.loadTodoItems();
    }
    else if (viewingProject(todoItem.projectId)) {
        todoApp.saveTodoItem(todoItem);
        todoApp.loadTodoItems();
        todoApp.expandProject(getOpenedProject());
    }
});

const creatingProject = () => projectModal.classList.contains("adding-project");

projectModal.addEventListener("submit", function(event) {
    event.preventDefault();

    const project = createProject();

    if (creatingProject()) {
        todoApp.saveProject(project);
        todoApp.loadProjects();

        updateProjectDropdown();
    }
    else {
        project.id = document.querySelector(".project-view").dataset.id;
        todoApp.editProject(project);
    }
});

function updateProjectDropdown() {
    projectsDropdown.replaceChildren(projectsDropdown.firstElementChild);
    Object.values(todoApp.getProjects()).forEach(project => projectsDropdown.appendChild(createOption(project)));
}

const deletingTask = () => confirmDeleteModal.classList.contains("deleting-task");
const deletingProject = () => confirmDeleteModal.classList.contains("deleting-project");

function deleteTask() {
    const id = document.querySelector(".task-view").dataset.id;
    app.removeTodoItem(id);

    app.displayTodoItems();
    document.getElementById("view-tasks").dispatchEvent(new MouseEvent("click", { bubbles: true }));
}

function deleteProject() {
    const id = document.querySelector(".project-view").dataset.id;
    app.removeProject(id);

    app.displayTodoItems();
    app.displayProjects();
    document.getElementById("view-tasks").dispatchEvent(new MouseEvent("click", { bubbles: true }));
    projectsDropdown.replaceChildren(projectsDropdown.firstElementChild);
    Object.values(app.projects).forEach(project => projectsDropdown.appendChild(createOption(project)));
}

confirmDeleteModal.addEventListener("submit", () => {
    if (deletingTask())
        deleteTask();

    else if (deletingProject())
        deleteProject();
});

document.getElementById("view-tasks").addEventListener("click", () => {
    app.displayTodoItems();
});