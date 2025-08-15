import { createDisplayModal, createCloseModal, createClearForm } from "./utils.js";

const taskModal = document.getElementById("task-modal");
const taskForm = taskModal.firstElementChild;

const formSections = taskForm.children;

const selectedEditTask = target => target.id === "edit-task";

content.addEventListener("click", event => {
    if (selectedEditTask(event.target))
        createEditTaskModal();
});

taskModal.addEventListener("close", createClearForm(taskForm));
taskForm.addEventListener("submit", createCloseModal(taskModal));

const fillTitle = () => formSections[0].lastElementChild.value = document.querySelector(".title").textContent;
const fillDueDate = () => formSections[1].lastElementChild.value = formatDueDate(document.querySelector(".due-date").textContent);
const fillDescription = () => formSections[2].lastElementChild.value = document.querySelector(".description").textContent;
const fillPriority = () => document.querySelector(`input[name="priority"][value=${document.querySelector(".task-view").dataset.priority}]`).checked = true; 

function fillProject() {
    const dropdown = formSections[3].lastElementChild;
    const projectId = document.querySelector(".task-view").dataset.projectId;

    if (projectId !== "")
        dropdown.value = document.querySelector(`option[data-id="${projectId}"]`).value;

    else
        dropdown.value = "none";
}

function fillFields() {
    fillTitle();
    fillDueDate();
    fillProject();
    fillDescription();
    fillPriority();
}

function createEditTaskModal() {
    taskModal.classList.remove(...taskModal.classList);
    taskModal.classList.add("editing-task");
    taskForm.lastElementChild.lastElementChild.textContent = "Save changes";

    fillFields();
    createDisplayModal(taskModal)();
}

function formatDueDate(dueDate) {
    const [month, day, year] = dueDate.split('-');
    return `${year}-${month}-${day}`;
}