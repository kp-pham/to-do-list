const projects = document.querySelector(".projects");

function updateFolderIcon(folder) {
    folderOpened(folder) ? closeFolder(folder) : openFolder(folder);
}

const folderOpened = project => project.classList.contains("open");
const openFolder = project => project.classList.add("open");
const closeFolder = project => project.classList.remove(...project.classList);

const clickedProject = target => target.tagName === "BUTTON";

projects.addEventListener("click", event => {
    if (clickedProject(event.target))
        updateFolderIcon(event.target);
});