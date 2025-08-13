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
});

const addTaskButton = document.getElementById("add-task");
const projectsDropdown = document.querySelector("select");

const content = document.getElementById("content");
const newTaskForm = document.getElementById("new-task");
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
    option.dataset.projectId = project.id;

    return option;
}

addTaskButton.addEventListener("click", () => {
    projectsDropdown.replaceChildren(projectsDropdown.firstElementChild);
    Object.values(app.projects).forEach(project => projectsDropdown.appendChild(createOption(project)));
});

newTaskForm.addEventListener("submit", event => {
    event.preventDefault();
    app.storeTodoItem(createTodoItem());
    app.displayTodoItem();
});

newProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    app.storeProject(createProject());
    app.displayProject();
});

confirmDeleteForm.addEventListener("submit", () => {
    const id = document.querySelector(".task-view").dataset.id;
    app.removeTodoItem(id);
    
    app.displayTodoItems();
    document.getElementById("view-tasks").dispatchEvent(new MouseEvent("click", { bubbles: true }));
});

document.getElementById("view-tasks").addEventListener("click", () => {
    app.displayTodoItems();
});