const addTaskButton = document.getElementById("add-task");
const newTaskModal = document.getElementById("new-task");
const newTaskForm = newTaskModal.firstElementChild;
const cancelTaskButton = newTaskForm.lastElementChild.firstElementChild;

const addProjectButton = document.getElementById("add-project");
const newProjectModal = document.getElementById("new-project");
const newProjectForm = newProjectModal.firstElementChild;
const cancelProjectButton = newProjectForm.lastElementChild.firstElementChild;

const cancelButton = document.querySelector(".cancel-form");

function createDisplayModal(modal) {
    return function() {
        modal.showModal();
    }
}

function createCloseModal(modal) {
    return function() {
        modal.close();
    }
}

function createClearForm(form) {
    return function() {
        form.reset();
    }
}

addTaskButton.addEventListener("click", createDisplayModal(newTaskModal));
addProjectButton.addEventListener("click", createDisplayModal(newProjectModal));

cancelTaskButton.addEventListener("click", createCloseModal(newTaskModal));
cancelProjectButton.addEventListener("click", createCloseModal(newProjectModal));

newTaskModal.addEventListener("close", createClearForm(newTaskForm));
newProjectModal.addEventListener("close", createClearForm(newProjectForm));