import { TodoItem, Project } from "./models.js";
import { saveTodoItem, saveProject, loadTodoItems, loadProjects } from "./storage.js";
import { displayTasks, displayTask } from "./tasks.js";
import { displayDirectories, displayDirectory } from "./directories.js";

class DisplayController {
    constructor() {
        this.todoItems = {};
        this.projects = {};
    }
}

const processesTodoItems = {
    processTodoItems() {
        for (const [id, data] of Object.entries(loadTodoItems()))
            this.todoItems[id] = new TodoItem(...data);
    }
};

const processesProjects = {
    processProjects() {
        for (const [id, data] of Object.entries(loadProjects()))
            this.projects[id] = new Project(...data);
    }
};

const storesTodoItems = {
    storeTodoItem(todoItem) {
        this.todoItems[id] = todoItem;
        saveTodoItem(todoItem);
    }
};

const storesProjects = {
    storeProject(project) {
        this.projects[id] = project;
        saveProject(project);
    }
}

const displaysTodoItems = {    
    displayTodoItems() {
        displayTasks(this.todoItems);
    }
};

const displaysProjects = {
    displayProjects() {
        displayDirectories(this.projects);
    }
};

Object.assign(DisplayController.prototype, processesTodoItems);
Object.assign(DisplayController.prototype, processesProjects);
Object.assign(DisplayController.prototype, displaysTodoItems);
Object.assign(DisplayController.prototype, displaysProjects);
Object.assign(DisplayController.prototype, storesTodoItems);
Object.assign(DisplayController.prototype, storesProjects);

export default DisplayController;