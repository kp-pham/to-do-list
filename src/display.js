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
            this.todoItems[id] = TodoItem.fromData(data);
    }
};

const processesProjects = {
    processProjects() {
        for (const [id, data] of Object.entries(loadProjects()))
            this.projects[id] = Project.fromData(data);
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
}

const displaysTodoItems = {    
    displayTodoItems() {
        displayTasks(Object.values(this.todoItems));
    },

    displayTodoItem() {
        displayTask(Object.values(this.todoItems).at(-1));
    }
};

const displaysProjects = {
    displayProjects() {
        displayDirectories(Object.values(this.projects));
    },

    displayProject() {
        displayDirectory(Object.values(this.projects).at(-1));
    }
};

Object.assign(DisplayController.prototype, processesTodoItems);
Object.assign(DisplayController.prototype, processesProjects);
Object.assign(DisplayController.prototype, displaysTodoItems);
Object.assign(DisplayController.prototype, displaysProjects);
Object.assign(DisplayController.prototype, storesTodoItems);
Object.assign(DisplayController.prototype, storesProjects);

export default DisplayController;