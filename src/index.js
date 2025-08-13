import { createTodoItem, createProject } from "./modals.js";
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

const todoItemExpanded = target => target.tagName === "BUTTON";

content.addEventListener("click", event => {
    if (todoItemExpanded(event.target))
        app.expandTodoItem(app.todoItems[event.target.dataset.id]);
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