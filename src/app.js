import { DisplayController } from "./display";
import { saveTodoItem, saveProject, loadTodoItems, loadProjects, deleteTodoItem, deleteProject } from "./storage";

class Application {
    constructor() {
        this.controller = new DisplayController();
        this.todoItems = {};
        this.projects = {};
    }
}

const loadsPageContent = {
    load() {
        this.loadTodoItems();
        this.loadProjects();
        this.controller.displayTodoItems();
        this.controller.displayProjects();
    }
};

const loadsTodoItems = {
    loadTodoItems() {
        for (const [id, data] of Object.entries(loadTodoItems()))
            this.todoItems[id] = TodoItem.fromData(data);
    }
};

const loadsProjects = {
    loadProjects() {
        for (const [id, data] of Object.entries(loadProjects()))
            this.projects[id] = Project.fromData(data);
    }
};

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

const deletesTodoItems = {
    deleteTodoItem(todoItemId) {
        this.controller.removeTodoItem(todoItemId);
    }
};

const deletesProjects = {
    deleteProject(projectId) {
        this.controller.removeProject(projectId);
    }
};

const displaysTodoItems = {
    displayTodoItems() {
        this.controller.displayTodoItems();
    }
};

const displaysProjects = {
    displayProjects() {
        this.controller.displayProjects();
    }
};

Object.assign(Application.prototype, loadsPageContent);
Object.assign(Application.prototype, loadsTodoItems);
Object.assign(Application.prototype, loadsProjects);
Object.assign(Application.prototype, expandsTodoItems);
Object.assign(Application.prototype, expandsProjects);
Object.assign(Application.prototype, savesTodoItems);
Object.assign(Application.prototype, savesProjects);
Object.assign(Application.prototype, editsTodoItems);
Object.assign(Application.prototype, editsProjects);
Object.assign(Application.prototype, deletesTodoItems);
Object.assign(Application.prototype, deletesProjects);
Object.assign(Application.prototype, displaysTodoItems);
Object.assign(Application.prototype, displaysProjects);

export default Application;