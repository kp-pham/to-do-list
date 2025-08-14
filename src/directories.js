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

export { displayDirectories, displayDirectory };