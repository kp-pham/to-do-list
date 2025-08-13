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

confirmDeleteForm.addEventListener("submit", event => {
    const id = document.querySelector(".task-view").dataset.id;
    app.removeTodoItem(id);
});

document.getElementById("view-tasks").addEventListener("click", () => {
    app.displayTodoItems();
});