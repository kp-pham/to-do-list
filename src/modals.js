const addTaskButton = document.getElementById("add-task");
const newTaskModal = document.getElementById("new-task");
const newTaskForm = newTaskModal.firstChild;

const addProjectButton = document.getElementById("add-project");
const newProjectModal = document.getElementById("new-project");
const newProjectForm = newProjectModal.firstChild;

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

addTaskButton.addEventListener("click", createCloseModal(newTaskModal));
addProjectButton.addEventListener("click", createCloseModal(newProjectModal));
