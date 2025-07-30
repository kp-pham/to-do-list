import TodoItem from "./todo-item.js";
import Project from "./project.js";
import "./styles.css";

const content = document.getElementById("content");
const project = new Project("My Project", "My latest project!");

for (let i = 0; i < 6; ++i)
    project.addTodoItem(new TodoItem(`Task ${i}`, "Description", "9/1/2025", i));

project.todoItems.forEach(todoItem => {
    const task = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = todoItem.title;
    task.appendChild(title);

    const description = document.createElement("p");
    description.textContent = todoItem.description;
    task.appendChild(description);

    const dueDate = document.createElement("p");
    dueDate.textContent = todoItem.dueDate;
    task.appendChild(dueDate);

    const priority = document.createElement("p");
    priority.textContent = todoItem.priority;
    task.appendChild(priority);

    content.appendChild(task);
});