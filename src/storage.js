function storageAvailable(type) {
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
    }
    catch(error) {
        return error instanceof DOMException && error.name === "QuotaExceededError" 
            && storage && storage.length !== 0;
    }
}

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

function loadTodoItems() {
    return JSON.parse(localStorage.getItem("todo-items"));
}

function loadProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}

function createStorage() {
    if (localStorage.getItem("projects") === null) 
        localStorage.setItem("projects", JSON.stringify({}));

    if (localStorage.getItem("todo-items") === null)
        localStorage.setItem("todo-items", JSON.stringify({}));
}

document.addEventListener('DOMContentLoaded', createStorage);

export { saveTodoItem, saveProject, loadTodoItems, loadProjects };