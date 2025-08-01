import { createTodoItem, createProject } from "./modals.js";
import "./themes.js";
import "./project-menu.js";
import "./styles.css";

const todoItems = [];
const projects = [];

const content = document.getElementById("content");

const newTaskForm = document.getElementById("new-task");
const newProjectForm = document.getElementById("new-project");

newTaskForm.addEventListener("submit", event => {
    event.preventDefault();
    todoItems.push(createTodoItem());
    console.log(todoItems);
});

newProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    projects.push(createProject());
    console.log(projects);
});