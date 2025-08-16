import { DisplayController } from "./display";

class Application {
    constructor() {
        this.controller = new DisplayController();
    }
}

const loadsPageContent = {
    load() {
        this.controller.processTodoItems();
        this.controller.processProjects();
        this.controller.displayTodoItems();
        this.controller.displayProjects();
    }
};

const loadsTodoItems = {
    loadTodoItems() {
        this.controller.displayTodoItems();
    }
};

const loadsProjects = {
    loadProjects() {
        this.controller.displayProjects();
    }
};

const getsProjects = {
    getProjects() {
        return this.controller.projects;
    }
}

const expandsTodoItems = {
    expandTodoItem(todoItem) {
        this.controller.expandTodoItem(this.controller.todoItems[todoItem.dataset.id]);
    }
};

const expandsProjects = {
    expandProject(projectId) {
        this.controller.expandProject(projectId);
    }
};

const savesTodoItems = {
    saveTodoItem(todoItem) {
        this.controller.storeTodoItem(todoItem);
    }
};

const savesProjects = {
    saveProject(project) {
        this.controller.storeProject(project);
    }
};

const editsTodoItems = {
    editTodoItem(todoItem) {
        this.controller.updateTodoItem(todoItem);
        this.controller.expandTodoItem(todoItem);
    }
};

const editsProjects = {
    editProject(project) {
        this.controller.updateProject(project);
        this.controller.expandProject(project.id);
    }
};

Object.assign(Application.prototype, loadsPageContent);
Object.assign(Application.prototype, loadsTodoItems);
Object.assign(Application.prototype, loadsProjects);
Object.assign(Application.prototype, getsProjects);
Object.assign(Application.prototype, expandsTodoItems);
Object.assign(Application.prototype, expandsProjects);
Object.assign(Application.prototype, savesTodoItems);
Object.assign(Application.prototype, savesProjects);
Object.assign(Application.prototype, editsTodoItems);
Object.assign(Application.prototype, editsProjects);

export default Application;