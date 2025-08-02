import { createTodoItem, createProject } from "./modals.js";
import { displayTasks, displayTask } from "./tasks.js";
import { displayDirectories, displayDirectory } from "./directories.js";
import { saveTodoItem, saveProject, loadTodoItems, loadProjects } from "./storage.js";
import "./themes.js";
import "./directories.js";
import "./styles.css";
import "./models.js";
import { TodoItem } from "./models.js";

const todoItems = [];
const projects = [];

class DisplayController {
    constructor() {
        this.todoItems = {};
        this.projects = {};
    }

    processTodoItems() {
        for (const [id, data] of Object.entries(loadTodoItems()))
            todoItems[id] = new TodoItem(...data);
    }

    processProjects() {
        for (const [id, data] of Object.entries(loadProjects()))
            projects[id] = new TodoItem(...data);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    displayTasks(todoItems);
    displayDirectories(projects);
});

const getTodoItem = () => todoItems.at(-1);
const getProject = () => projects.at(-1);

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

const app = new DisplayController();
app.processTodoItems();
app.processProjects();