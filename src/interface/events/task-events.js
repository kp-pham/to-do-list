import { createTodoItem } from "../../modals";
import { viewTodoItems } from "./utils";

function setUpTaskEvents(app) {
    setUpViewingTasks(app);
    setUpTaskExpanded(app);
    setUpTaskCreated(app);
    setUpTaskEdited(app);
    setUpTaskDeleted(app);
}

function setUpViewingTasks(app) {
    document.getElementById("view-tasks").addEventListener("click", function() {
        app.displayTodoItems();
    });
}

function setUpTaskExpanded(app) {
    const taskExpanded = target => target.classList.contains("task") || target.parentElement.classList.contains("task");

    content.addEventListener("click", function(event) {
        if (taskExpanded(event.target)) {
            document.querySelector(".open").classList.remove("open");

            const taskButton = event.target.classList.contains("task") ? event.target : event.target.parentElement;
            app.expandTodoItem(taskButton.dataset.id);
        }
    });
}

function setUpTaskCreated(app) {
    const taskModal = document.getElementById("task-modal");

    const viewingTodoItem = () => content.classList.contains("tasks");
    const viewingProject = id => content.classList.contains("project-expand") && document.querySelector(".open").dataset.id === id;

    const getOpenedProject = () => document.querySelector(".open").dataset.id;

    taskModal.addEventListener("submit", function(event) {
        event.preventDefault();
    
        const todoItem = createTodoItem();
    
        if (viewingTodoItem()) {
            app.storeTodoItem(todoItem);
            app.displayTodoItems();
        }
        else if (viewingProject(todoItem.projectId)) {
            app.storeTodoItem(todoItem);
            app.displayTodoItems();
            app.expandProject(getOpenedProject());
        }
    });
}

function setUpTaskEdited(app) {
    const taskModal = document.getElementById("task-modal");

    const editingTodoItem = () => taskModal.classList.contains("editing-task");

    taskModal.addEventListener("submit", function(event) {
        event.preventDefault();

        const todoItem = createTodoItem();

        if (editingTodoItem()) {
            todoItem.id = document.querySelector(".task-view").dataset.id;
            app.editTodoItem(todoItem);
        }
    });
}

function setUpTaskDeleted(app) {
    const confirmDeleteModal = document.getElementById("confirm-delete");

    const deletingTask = () => confirmDeleteModal.classList.contains("deleting-task");
    const getTaskId = () => document.querySelector(".task-view").dataset.id;

    confirmDeleteModal.addEventListener("submit", function(event) {
        event.preventDefault();

        if (deletingTask()) {
            app.deleteTodoItem(getTaskId());
            app.displayTodoItems();
            viewTodoItems();
        }
    });
}

export default setUpTaskEvents;