const sidebar = document.querySelector("nav");
const viewTasks = document.getElementById("view-tasks");

const selectedViewTasks = target => target.id === "view-tasks";
const selectedProject = target => target.parentElement.classList.contains("projects");

function updateSidebar(target) {
    const opened = document.querySelector(".open");

    if (opened !== null)
        opened.classList.remove(...opened.classList);

    target.classList.add("open");
}

sidebar.addEventListener("click", event => {
    if (selectedViewTasks(event.target) || selectedProject(event.target))
        updateSidebar(event.target);
});