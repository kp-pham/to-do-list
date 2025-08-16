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