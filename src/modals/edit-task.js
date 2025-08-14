import { createDisplayModal, createCloseModal, createClearForm } from "./utils.js";

const taskModal = document.getElementById("task-modal");
const taskForm = taskModal.firstElementChild;

const formSections = taskForm.children;

const selectedEditTask = target => target.id === "edit-task";

content.addEventListener("click", event => {
    if (selectedEditTask(event.target))
        editTask();
});

taskModal.addEventListener("close", createClearForm(taskForm));
taskForm.addEventListener("submit", createCloseModal(taskModal));

const displayTitle = () => formSections[0].lastElementChild.value = document.querySelector(".title").textContent;
const displayDueDate = () => formSections[1].lastElementChild.value = formatDueDate(document.querySelector(".due-date").textContent);
const displayDescription = () => formSections[2].lastElementChild.value = document.querySelector(".description").textContent;
// const displayProject = () => formSections[3].lastElementChild.value = document.querySelector(".task-view").dataset.projectId !== "" ? document.querySelector(`option[data-id="${document.querySelector(".task-view").dataset.projectId}"]`).value : "none";
const displayPriority = () => document.querySelector(`input[name="priority"][value=${document.querySelector(".task-view").dataset.priority}]`).checked = true; 

function displayProject() {
    const dropdown = formSections[3].lastElementChild;

    const projectId = document.querySelector(".task-view").dataset.projectId;

    if (projectId !== "")
        dropdown.value = document.querySelector(`option[data-id="${projectId}"]`).value;

    else
        dropdown.value = "none";
}

function editTask() {
    taskModal.classList.remove(...taskModal.classList);
    taskModal.classList.add("editing-task");

    createDisplayModal(taskModal)();

    displayTitle();
    displayDueDate();
    displayDescription();
    displayProject();
    displayPriority();

}

function formatDueDate(dueDate) {
    const [month, day, year] = dueDate.split('-');
    return `${year}-${month}-${day}`;
}