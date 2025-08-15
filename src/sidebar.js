const sidebar = document.querySelector("nav");
const viewTasks = document.getElementById("view-tasks");
const projects = document.querySelector(".projects");

const pressedButton = target => target.tagName === "BUTTON";
const pressedTab = target => target.id === "view-tasks" || document.querySelector(".projects").contains(target);
const openedTab = opened => opened !== null;

function updateSidebar(target) {
    const opened = document.querySelector(".open");

    if (openedTab(opened))
        opened.classList.remove(...opened.classList);

    target.classList.add("open");
}

sidebar.addEventListener("click", event => {
    if (pressedButton(event.target) && pressedTab(event.target))
        updateSidebar(event.target);
});