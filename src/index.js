import { createTodoItem, createProject } from "./modals.js";
import { displayTasks, displayTask } from "./tasks.js";
import { displayDirectories, displayDirectory } from "./directories.js";
import "./themes.js";
import "./directories.js";
import "./styles.css";
import "./models.js";

const todoItems = [];
const projects = [];

const content = document.getElementById("content");

const newTaskForm = document.getElementById("new-task");
const newProjectForm = document.getElementById("new-project");

document.addEventListener("DOMContentLoaded", () => {
    displayTasks(todoItems);
    displayDirectories(projects);
});

newTaskForm.addEventListener("submit", event => {
    event.preventDefault();
    todoItems.push(createTodoItem());
    displayTask(todoItems.at(-1));
});

newProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    projects.push(createProject());
    displayDirectory(projects.at(-1));
});
