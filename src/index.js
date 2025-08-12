import { createTodoItem, createProject } from "./modals.js";
import DisplayController from "./display.js";
import "./themes.js";
import "./styles.css";

const app = new DisplayController();

document.addEventListener("DOMContentLoaded", () => {
    app.processTodoItems();
    app.processProjects();

    app.displayTodoItems();
    app.displayProjects();
});

const newTaskForm = document.getElementById("new-task");
const newProjectForm = document.getElementById("new-project");

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