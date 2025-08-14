const content = document.getElementById("content");
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

function displayDirectoryView(project) {
    content.classList.remove(...content.classList);
    content.classList.add("project-expand");

    content.prepend(createDirectoryView(project));
}

function createDirectory(project) {
    const directory = document.createElement("button");
    directory.type = "button";
    directory.dataset.id = project.id;

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

function createDirectoryView(project) {
    const directoryView = document.createElement("div");
    directoryView.classList.add("project-view");

    directoryView.appendChild(createTitle(project));
    directoryView.appendChild(createDescription(project));

    return directoryView;
}

function createTitle(project) {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = project.title;

    return title;
}

function createDescription(project) {
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = project.description;

    return description;
}

export { displayDirectories, displayDirectoryView };