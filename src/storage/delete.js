import { loadTodoItems, loadProjects } from "./load.js";

function deleteTodoItem(id) {
    const todoItems = loadTodoItems();
    delete todoItems[id];

    localStorage.setItem("todo-items", JSON.stringify(todoItems));
}

function deleteProject(id) {
    const projects = loadProjects();
    delete projects[id];

    localStorage.setItem("projects", JSON.stringify(projects));
}

export { deleteTodoItem, deleteProject };