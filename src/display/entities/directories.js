import { createGetIconFromTemplate, createTitle } from "./utils.js";

const content = document.getElementById("content");
const directories = document.querySelector(".projects");
const openedFolder = document.getElementById("folder-open");
const closedFolder = document.getElementById("folder-closed");
const editFolder = document.getElementById("edit-folder");
const removeFolder = document.getElementById("remove-folder");

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

function createDirectoryView(project) {
    const directoryView = document.createElement("div");
    directoryView.classList.add("project-view");
    directoryView.dataset.id = project.id;

    directoryView.appendChild(createTitle(project.title));
    directoryView.appendChild(createButtons());

    return directoryView;
}

function createButtons() {
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    buttons.appendChild(createEditButton());
    buttons.appendChild(createDeleteButton());

    return buttons;
}

function createEditButton() {
    const button = document.createElement("button");
    button.id = "edit-project";
    button.appendChild(createFolderIcon(editFolder));

    return button;
}

function createDeleteButton() {
    const button = document.createElement("button");
    button.id = "delete-project";
    button.appendChild(createFolderIcon(removeFolder));

    return button; 
}

export { displayDirectories, displayDirectoryView };