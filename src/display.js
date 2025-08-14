import { TodoItem, Project } from "./models.js";
import { saveTodoItem, saveProject, loadTodoItems, loadProjects, deleteTodoItem } from "./storage/storage.js";
import { displayTasks, displayTask, displayTaskView } from "./tasks.js";
import { displayDirectories, displayDirectory } from "./directories.js";
import { compareAsc } from "date-fns";

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

const removesTodoItems = {
    removeTodoItem(id) {
        delete this.todoItems[id];
        deleteTodoItem(id);
    }
}

const displaysTodoItems = {    
    displayTodoItems() {
        displayTasks(Object.values(this.todoItems).sort((a, b) => compareAsc(a.dueDate, b.dueDate)));
    },

    displayTodoItem() {
        displayTask(Object.values(this.todoItems).at(-1));
    },

    expandTodoItem(todoItem) {
        displayTaskView(todoItem);
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
Object.assign(DisplayController.prototype, storesTodoItems);
Object.assign(DisplayController.prototype, storesProjects);
Object.assign(DisplayController.prototype, removesTodoItems);
Object.assign(DisplayController.prototype, displaysTodoItems);
Object.assign(DisplayController.prototype, displaysProjects);

export default DisplayController;