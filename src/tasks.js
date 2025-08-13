const content = document.getElementById("content");

function displayTasks(todoItems) {
    todoItems.forEach(todoItem => displayTask(todoItem));
}

function displayTask(todoItem) {
    content.appendChild(createTask(todoItem));
}

function displayTaskView(todoItem) {
    content.appendChild(createTaskView(todoItem));
}

function createTask(todoItem) {
    const task = document.createElement("button");
    task.classList.add("task");
    task.dataset.priority = todoItem.priority;
    task.dataset.id = todoItem.id;

    task.appendChild(createTitle(todoItem.title));
    task.appendChild(createDueDate(todoItem.dueDate));

    return task;
}

function createTaskView(todoItem) {
    const taskView = document.createElement("div");
    taskView.classList.add("task-view");
    taskView.dataset.priority = todoItem.priority;
    taskView.dataset.id = todoItem.id;

    taskView.appendChild(createTitle(todoItem.title));
    taskView.appendChild(createDueDate(todoItem.dueDate));
    taskView.appendChild(createDescription(todoItem.description));

    return taskView;
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

export { displayTasks, displayTask, displayTaskView };