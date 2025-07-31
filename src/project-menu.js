const projects = document.querySelector(".projects");

function updateFolderIcon(project) {
    projectOpened(project) ? closeProject(project) : openProject(project);
} 

const projectOpened = project => project.classList.contains("open");
const openProject = project => project.classList.add("open");
const closeProject = project => project.classList.remove(...project.classList);

projects.addEventListener("click", event => updateFolderIcon(event.target));