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

const viewingTasks = () => content.classList.contains("tasks");
const viewingProject = id => content.classList.contains("project-expand") && document.querySelector(".open").dataset.id === id;

taskModal.addEventListener("submit", event => {
    event.preventDefault();

    if (taskModal.classList.contains("editing-task")) {
        const todoItem = createTodoItem();
        todoItem.id = document.querySelector(".task-view").dataset.id;
        app.updateTodoItem(todoItem);
        app.expandTodoItem(todoItem);
    }
    else if (viewingTasks()) {
        const todoItem = createTodoItem();
        app.storeTodoItem(todoItem);
        app.displayTodoItems();
    }
    else if (viewingProject(todoItem.projectId)) {
        const todoItem = createTodoItem();
        app.storeTodoItem(todoItem);
        app.displayTodoItems();
        app.expandProject(document.querySelector(".open").dataset.id);
    }
});

projectModal.addEventListener("submit", event => {
    event.preventDefault();

    if (projectModal.classList.contains("adding-project")) {
        app.storeProject(createProject());
        app.displayProjects();

        projectsDropdown.replaceChildren(projectsDropdown.firstElementChild);
        Object.values(app.projects).forEach(project => projectsDropdown.appendChild(createOption(project)));
    }
    else {
        const project = createProject();
        project.id = document.querySelector(".project-view").dataset.id;
        app.updateProject(project);
        app.expandProject(project.id);
    }
});

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

function loadApplication() {
    app.processTodoItems();
    app.processProjects();

    app.displayTodoItems();
    app.displayProjects();
    Object.values(app.projects).forEach(project => projectsDropdown.appendChild(createOption(project)));
}

function expandTodoItem(event) {
    
    app.expandTodoItem(app.todoItems[todoItem.dataset.id]);
}