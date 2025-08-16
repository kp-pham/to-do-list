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
    },

    reprocessTodoItems() {
        this.todoItems = {};
        this.processTodoItems();
    }
};

const processesProjects = {
    processProjects() {
        for (const [id, data] of Object.entries(loadProjects()))
            this.projects[id] = Project.fromData(data);
    }
};

const expandsTodoItems = {
    expandTodoItem(todoItemId) {
        this.controller.expandTodoItem(this.todoItems[todoItemId]);
    }
};

const expandsProjects = {
    expandProject(projectId) {
        this.controller.expandProject(this.projects[projectId], Object.values(this.todoItems));
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
        this.storeTodoItem(todoItem);
        this.expandTodoItem(todoItem.id);
    }
};

const editsProjects = {
    editProject(project) {
        this.projects[project.id] = project;
        this.storeProject(project);
        this.expandProject(project.id);
    }
};

const removesTodoItems = {
    deleteTodoItem(id) {
        delete this.todoItems[id];
        deleteTodoItem(id);
    }
};

const removesProjects = {
    deleteProject(id) {
        delete this.projects[id];
        deleteProject(id);
        this.reprocessTodoItems();
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
Object.assign(Application.prototype, removesTodoItems);
Object.assign(Application.prototype, removesProjects);
Object.assign(Application.prototype, displaysTodoItems);
Object.assign(Application.prototype, displaysProjects);

export default Application;