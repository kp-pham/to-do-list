import { loadTodoItems, loadProjects } from "./load.js";

function saveTodoItem(todoItem) {
    const todoItems = loadTodoItems();
    todoItems[todoItem.id] = todoItem;

    localStorage.setItem("todo-items", JSON.stringify(todoItems));
}

function saveProject(project) {
    const projects = loadProjects();
    projects[project.id] = project;

    localStorage.setItem("projects", JSON.stringify(projects));
}

export { saveTodoItem, saveProject };