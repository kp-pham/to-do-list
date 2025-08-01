const directories = document.querySelector(".projects");
const openedFolder = document.getElementById("folder-open");
const closedFolder = document.getElementById("folder-closed");

function displayDirectories(projects) {
    projects.forEach(project => displayDirectory(project));
}

function displayDirectory(project) {
    directories.appendChild(createDirectory(project));
}

function createDirectory(project) {
    const directory = document.createElement("button");
    directory.type = "button";
    
    directory.appendChild(createFolderIcon(openedFolder));
    directory.appendChild(createFolderIcon(closedFolder));
    directory.appendChild(createFolderName(project.title));

    return directory;
}

function createFolderIcon(template) {
    return createGetIconFromTemplate(template)();
}

function createGetIconFromTemplate(template) {
    return function() {
        return template.content.firstElementChild.cloneNode(true);
    }
}

function createFolderName(name) {
    const folderName = document.createElement("p");
    folderName.textContent = name;

    return folderName;
}

function closeOpenedFolders() {
    const openedFolders = document.querySelectorAll(".open");
    openedFolders.forEach(folder => closeFolder(folder));
}

const folderOpened = project => project.classList.contains("open");
const openFolder = project => project.classList.add("open");
const closeFolder = project => project.classList.remove(...project.classList);

const clickedProject = target => target.tagName === "BUTTON";

directories.addEventListener("click", event => {
    if (clickedProject(event.target)) {
        closeOpenedFolders();
        openFolder(event.target);
    }
});

export { displayDirectories, displayDirectory };