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
        return modal.showModal();
    }
}

function createCloseModal(modal) {
    return function() {
        return modal.close();
    }
}

addTaskButton.addEventListener("click", createDisplayModal(newTaskModal));
addProjectButton.addEventListener("click", createDisplayModal(newProjectModal));

cancelTaskButton.addEventListener("click", createCloseModal(newTaskModal));
cancelProjectButton.addEventListener("click", createCloseModal(newProjectModal));
