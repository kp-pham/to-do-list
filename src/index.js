import { createTodoItem, createProject } from "./modals.js";
import displayTasks from "./tasks-view";
import displayDirectories from "./directories.js";
import "./themes.js";
import "./directories.js";
import "./styles.css";
import "./models.js";

const todoItems = [];
const projects = [];

const content = document.getElementById("content");

const newTaskForm = document.getElementById("new-task");
const newProjectForm = document.getElementById("new-project");

newTaskForm.addEventListener("submit", event => {
    event.preventDefault();
    todoItems.push(createTodoItem());
    displayTasks(todoItems);
});

newProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    projects.push(createProject());
    displayDirectories(projects);
});
