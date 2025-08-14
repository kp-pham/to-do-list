const sidebar = document.querySelector("nav");
const viewTasks = document.getElementById("view-tasks");
const projects = document.querySelector(".projects");

const pressedButton = target => target.tagName === "BUTTON";

function updateSidebar(target) {
    const opened = document.querySelector(".open");

    if (opened !== null)
        opened.classList.remove(...opened.classList);

    target.classList.add("open");
}

sidebar.addEventListener("click", event => {
    if (pressedButton(event.target))
        updateSidebar(event.target);
});