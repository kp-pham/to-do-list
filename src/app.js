import { TodoItem, Project } from "./models.js";
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
        this.processTodoItems();
        this.processProjects();
        this.displayTodoItems();
        this.displayProjects();
    }
};

const processesTodoItems = {
    processTodoItems() {
        for (const [id, data] of Object.entries(loadTodoItems()))
            this.todoItems[id] = TodoItem.fromData(data);
    }
};

const processesProjects = {
    processProjects() {
        for (const [id, data] of Object.entries(loadProjects()))
            this.projects[id] = Project.fromData(data);
    }
};

const expandsTodoItems = {
    expandTodoItem(todoItem) {
        this.controller.expandTodoItem(this.todoItems[todoItem.id]);
    }
};

const expandsProjects = {
    expandProject(projectId) {
        this.controller.expandProject(projectId);
    }
};

const storesTodoItems = {
    storeTodoItem(todoItem) {
        this.todoItems[todoItem.id] = todoItem;
        saveTodoItem(todoItem);
    }
};

const storesProjects = {
    storeProject(project) {
        this.projects[project.id] = project;
        saveProject(project);
    }
};

const editsTodoItems = {
    editTodoItem(todoItem) {
        this.todoItems[todoItem.id] = todoItem;
        this.saveTodoItem(todoItem);
        this.expandTodoItem(todoItem);
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
        this.controller.displayTodoItems(Object.values(this.todoItems));
    }
};

const displaysProjects = {
    displayProjects() {
        this.controller.displayProjects(Object.values(this.projects));
    }
};

Object.assign(Application.prototype, loadsPageContent);
Object.assign(Application.prototype, processesTodoItems);
Object.assign(Application.prototype, processesProjects);
Object.assign(Application.prototype, expandsTodoItems);
Object.assign(Application.prototype, expandsProjects);
Object.assign(Application.prototype, storesTodoItems);
Object.assign(Application.prototype, storesProjects);
Object.assign(Application.prototype, editsTodoItems);
Object.assign(Application.prototype, editsProjects);
Object.assign(Application.prototype, deletesTodoItems);
Object.assign(Application.prototype, deletesProjects);
Object.assign(Application.prototype, displaysTodoItems);
Object.assign(Application.prototype, displaysProjects);

export default Application;