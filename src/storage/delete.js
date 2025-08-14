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

    deleteTodoItemsFromProject(id);
}

const belongingToProject = (todoItem, id) => todoItem.projectId === id;

function deleteTodoItemsFromProject(id) {
    const todoItems = loadTodoItems();

    for (const todoItem of Object.values(todoItems))
        if (belongingToProject(todoItem, id))
            delete todoItems[todoItem.id];

    localStorage.setItem("todo-items", JSON.stringify(todoItems));
}

export { deleteTodoItem, deleteProject };