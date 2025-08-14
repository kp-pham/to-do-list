import { createTodoItem, createProject } from "./modals/modals.js";
import DisplayController from "./display.js";
import "./sidebar.js";
import "./themes.js";
import "./styles.css";

const app = new DisplayController();

document.addEventListener("DOMContentLoaded", () => {
    app.processTodoItems();
    app.processProjects();

    app.displayTodoItems();
    app.displayProjects();
    Object.values(app.projects).forEach(project => projectsDropdown.appendChild(createOption(project)));
});

const projectsDropdown = document.querySelector("select");

const content = document.getElementById("content");
const projects = document.querySelector(".projects");
const newTaskForm = document.getElementById("task-modal");
const newProjectForm = document.getElementById("new-project");
const confirmDeleteForm = document.getElementById("confirm-delete");

const todoItemExpanded = target => target.classList.contains("task") || target.parentElement.classList.contains("task");

content.addEventListener("click", event => {
    if (todoItemExpanded(event.target)) {
        document.querySelector(".open").classList.remove("open");

        const todoItem = event.target.classList.contains("task") ? event.target : event.target.parentElement;
        app.expandTodoItem(app.todoItems[todoItem.dataset.id]);
    }
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

newTaskForm.addEventListener("submit", event => {
    event.preventDefault();

    const todoItem = createTodoItem();
    app.storeTodoItem(todoItem);

    if (viewingTasks()) {
        app.displayTodoItems();
    }
    else if (viewingProject(todoItem.projectId)) {
        app.displayTodoItems();
        app.expandProject(document.querySelector(".open").dataset.id);
    }
});

newProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    app.storeProject(createProject());
    app.displayProjects();
});

newProjectForm.addEventListener("submit", () => {
    projectsDropdown.replaceChildren(projectsDropdown.firstElementChild);
    Object.values(app.projects).forEach(project => projectsDropdown.appendChild(createOption(project)));
});

const deletingTask = () => confirmDeleteForm.classList.contains("deleting-task");
const deletingProject = () => confirmDeleteForm.classList.contains("deleting-project");

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

confirmDeleteForm.addEventListener("submit", () => {
    if (deletingTask())
        deleteTask();

    else if (deletingProject())
        deleteProject();
});

projects.addEventListener("click", event => {
    if (event.target.tagName === "BUTTON")
        app.expandProject(event.target.dataset.id);
});

document.getElementById("view-tasks").addEventListener("click", () => {
    app.displayTodoItems();
});