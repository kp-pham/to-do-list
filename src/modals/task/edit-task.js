import { createDisplayModal } from "../utils.js";

const taskModal = document.getElementById("task-modal");
const taskForm = taskModal.firstElementChild;

const formSections = taskForm.children;

const selectedEditTask = target => target.id === "edit-task";

content.addEventListener("click", event => {
    if (selectedEditTask(event.target))
        createEditTaskModal();
});

const getTitleField = () => formSections[0].lastElementChild;
const getDueDateField = () => formSections[1].lastElementChild;
const getDescriptionField = () => formSections[2].lastElementChild;
const getProjectField = () => formSections[3].lastElementChild;
const getPriorityField = () => document.querySelector(`input[name="priority"][value=${document.querySelector(".task-view").dataset.priority}]`);

const fillTitle = () => getTitleField().value = document.querySelector(".title").textContent;
const fillDueDate = () => getDueDateField().value = formatDueDate(document.querySelector(".due-date").textContent);
const fillDescription = () => getDescriptionField().value = document.querySelector(".description").textContent;
const fillPriority = () => getPriorityField().checked = true; 

const getProjectId = () => document.querySelector(".task-view").dataset.projectId;
const belongsToNoProject = projectId => projectId !== "";

function fillProject() {
    const dropdown = getProjectField();
    const projectId = getProjectId();

    if (belongsToNoProject(projectId))
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