const content = document.getElementById("content");

function displayTasks(todoItems) {
    todoItems.forEach(todoItem => content.appendChild(createTask(todoItem)));
}

function createTask(todoItem) {
    const task = document.createElement("div");
    task.classList.add("task");

    task.appendChild(createTitle(todoItem.title));
    task.appendChild(createDueDate(todoItem.dueDate));
    task.appendChild(createDescription(todoItem.description));

    return task;
}

function createTitle(title) {
    const taskTitle = document.createElement("h1");
    taskTitle.classList.add("title");
    taskTitle.textContent = title;

    return taskTitle;
}

function createDueDate(dueDate) {
    const taskDueDate = document.createElement("h2");
    taskDueDate.classList.add("due-date");
    taskDueDate.textContent = dueDate;

    return taskDueDate;
}

function createDescription(description) {
    const taskDescription = document.createElement("p");
    taskDescription.classList.add("description");
    taskDescription.textContent = description;

    return taskDescription;
}

export default displayTasks;