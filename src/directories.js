const directories = document.querySelector(".projects");
const openedFolder = document.getElementById("folder-open");
const closedFolder = document.getElementById("folder-closed");

function displayDirectories(projects) {
    directories.textContent = "";    

    projects.forEach(project => displayDirectory(project));
}

function displayDirectory(project) {
    directories.appendChild(createDirectory(project));
}

function createDirectory(project) {
    const directory = document.createElement("button");
    directory.type = "button";
     directory.textContent = project.title;
    
    directory.prepend(createFolderIcon(closedFolder));
    directory.prepend(createFolderIcon(openedFolder));

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

export { displayDirectories, displayDirectory };