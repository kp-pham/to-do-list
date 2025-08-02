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

    localStorage.setItem("todo-items", todoItems);
}

function saveProject(project) {
    const projects = loadProjects();
    projects[project.id] = project;

    localStorage.setItem("projects", projects);
}

function loadTodoItems() {
    return JSON.parse(localStorage.getItem("todo-items"));
}

function loadProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}

localStorage.setItem("projects", JSON.stringify({}));
localStorage.setItem("todo-items", JSON.stringify({}));

export { saveTodoItem, saveProject, loadTodoItems, loadProjects };