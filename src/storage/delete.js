import { loadTodoItems, loadProjects } from "./load.js";

function deleteTodoItem(todoItem) {
    const todoItems = loadTodoItems();
    delete todoItems[todoItem.id];

    localStorage.setItem("todo-items", JSON.stringify(todoItems));
}

function deleteProject(project) {
    const projects = loadProjects();
    delete projects[project.id];

    localStorage.setItem("projects", JSON.stringify(projects));
}

export { deleteTodoItem, deleteProject };