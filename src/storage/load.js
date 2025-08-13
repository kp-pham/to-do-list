function loadTodoItems() {
    return JSON.parse(localStorage.getItem("todo-items"));
}

function loadProjects() {
    return JSON.parse(localStorage.getItem("projects"));
}

export { loadTodoItems, loadProjects };