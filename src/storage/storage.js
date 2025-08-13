import { deleteTodoItem, deleteProject } from "./delete.js";
import { loadTodoItems, loadProjects } from "./load.js";
import { saveTodoItem, saveProject } from "./save.js";

function createStorage() {
    if (localStorage.getItem("projects") === null) 
        localStorage.setItem("projects", JSON.stringify({}));

    if (localStorage.getItem("todo-items") === null)
        localStorage.setItem("todo-items", JSON.stringify({}));
}

document.addEventListener('DOMContentLoaded', createStorage);

export { deleteTodoItem, deleteProject, loadTodoItems, loadProjects, saveTodoItem, saveProject };