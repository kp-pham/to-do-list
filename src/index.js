import TodoItem from "./todo-item.js";
import Project from "./project.js";
import "./themes.js";
import "./modals.js";
import "./project-menu.js";
import "./styles.css";

const todoItems = [];
const projects = [];

const content = document.getElementById("content");

const newTaskForm = document.getElementById("new-task");
const newProjectForm = document.getElementById("new-project");

newTaskForm.addEventListener("submit", event => {
    event.preventDefault();
    const taskName = document.getElementById("task-name").value;
    const dueDate = document.getElementById("due-date").value;
    const description = document.getElementById("task-description").value;
    const priority = document.querySelector("input[name='priority']:checked").value;

    todoItems.push(new TodoItem(taskName, dueDate, description, priority));
    console.log(todoItems);
});

newProjectForm.addEventListener("submit", event => {
    event.preventDefault();
    const projectName = document.getElementById("project-name").value;
    const description = document.getElementById("project-description").value;
    
    projects.push(new Project(projectName, description));
    console.log(projects);
});