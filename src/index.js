import { createTodoItem, createProject } from "./modals.js";
import { saveTodoItem, saveProject } from "./storage.js";
import DisplayController from "./display.js";
import "./themes.js";
import "./directories.js";
import "./styles.css";
import "./models.js";

const todoItems = [];
const projects = [];

document.addEventListener("DOMContentLoaded", () => {
    displayTasks(todoItems);
    displayDirectories(projects);
});

const content = document.getElementById("content");

const newTaskForm = document.getElementById("new-task");
const newProjectForm = document.getElementById("new-project");

newTaskForm.addEventListener("submit", event => {
    event.preventDefault();
    todoItems.push(createTodoItem());
    displayTask(getTodoItem());
});

newProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    projects.push(createProject());
    displayDirectory(getProject());
});