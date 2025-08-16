import { createTodoItem, createProject } from "./modals";
import Application from "./app.js";
import "./interface";
import "./styles.css";

const todoApp = new Application();

const content = document.getElementById("content");
const projects = document.querySelector(".projects");
const taskModal = document.getElementById("task-modal");
const projectModal = document.getElementById("project-modal");
const confirmDeleteModal = document.getElementById("confirm-delete");

const projectsDropdown = document.querySelector("select");

document.addEventListener("DOMContentLoaded", function() {
    todoApp.load();
    updateProjectDropdown();
});

document.getElementById("view-tasks").addEventListener("click", function() {
    todoApp.displayTodoItems();
});

const todoItemExpanded = target => target.classList.contains("task") || target.parentElement.classList.contains("task");

content.addEventListener("click", function(event) {
    if (todoItemExpanded(event.target)) {
        document.querySelector(".open").classList.remove("open");

        const todoItemButton = event.target.classList.contains("task") ? event.target : event.target.parentElement;
        todoApp.expandTodoItem(todoItemButton.dataset.id);
    }
});

const projectExpanded = target => target.tagName === "BUTTON";

projects.addEventListener("click", function(event) {
    if (projectExpanded(event.target))
        todoApp.expandProject(event.target.dataset.id);
});

function createOption(project) {
    const option = document.createElement("option");
    option.textContent = project.title;
    option.value = project.title;
    option.dataset.id = project.id;

    return option;
}

const editingTodoItem = () => taskModal.classList.contains("editing-task");
const viewingTodoItem = () => content.classList.contains("tasks");
const viewingProject = id => content.classList.contains("project-expand") && document.querySelector(".open").dataset.id === id;

const getOpenedProject = () => document.querySelector(".open").dataset.id;

taskModal.addEventListener("submit", function(event) {
    event.preventDefault();

    const todoItem = createTodoItem();

    if (editingTodoItem()) {
        todoItem.id = document.querySelector(".task-view").dataset.id;
        todoApp.editTodoItem(todoItem);
    }
    else if (viewingTodoItem()) {
        todoApp.storeTodoItem(todoItem);
        todoApp.displayTodoItems();
    }
    else if (viewingProject(todoItem.projectId)) {
        todoApp.storeTodoItem(todoItem);
        todoApp.displayTodoItems();
        todoApp.expandProject(getOpenedProject());
    }
});

const creatingProject = () => projectModal.classList.contains("adding-project");

projectModal.addEventListener("submit", function(event) {
    event.preventDefault();

    const project = createProject();

    if (creatingProject()) {
        todoApp.storeProject(project);
        todoApp.displayProjects();

        updateProjectDropdown();
    }
    else {
        project.id = document.querySelector(".project-view").dataset.id;
        todoApp.editProject(project);
    }
});

function updateProjectDropdown() {
    projectsDropdown.replaceChildren(projectsDropdown.firstElementChild);
    Object.values(todoApp.projects).forEach(project => projectsDropdown.appendChild(createOption(project)));
}

const deletingTodoItem = () => confirmDeleteModal.classList.contains("deleting-task");

const getTodoItemId = () => document.querySelector(".task-view").dataset.id;
const getProjectId = () => document.querySelector(".project-view").dataset.id;
const viewingTodoItems = () =>  document.getElementById("view-tasks").dispatchEvent(new MouseEvent("click", { bubbles: true }));

confirmDeleteModal.addEventListener("submit", function(event) {
    if (deletingTodoItem()) {
        todoApp.deleteTodoItem(getTodoItemId());
        todoApp.displayTodoItems();
    }
    else {
        todoApp.deleteProject(getProjectId());
        todoApp.displayTodoItems();
        todoApp.displayProjects();

        updateProjectDropdown();
    }

    viewingTodoItems();
});