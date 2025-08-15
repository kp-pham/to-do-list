import { TodoItem, Project } from "../models.js";
import { saveTodoItem, saveProject, loadTodoItems, loadProjects, deleteTodoItem, deleteProject } from "../storage/storage.js";
import { displayTasks, displayTaskView } from "./entities/tasks.js";
import { displayDirectories, displayDirectoryView } from "./entities/directories.js";
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

const removesProjects = {
    removeProject(id) {
        delete this.projects[id];
        deleteProject(id);
        this.reprocessTodoItems();
    }  
};

const updatesTodoItems = {
    updateTodoItem(todoItem) {
        this.todoItems[todoItem.id] = todoItem;
        saveTodoItem(todoItem);
    }
};

const updatesProjects = {
    updateProject(project) {
        this.projects[project.id] = project;
        saveProject(project);
    }
}

const displaysTodoItems = {    
    displayTodoItems() {
        displayTasks(Object.values(this.todoItems).sort((a, b) => this.compareTodoItems(a, b)));
    },

    expandTodoItem(todoItem) {
        displayTaskView(todoItem);
    },

    compareTodoItems(a, b) {
        const difference = this.compareDueDates(a, b);

        return this.differenceBetweenDueDates(difference) ? difference : this.comparePriority(a, b);
    },

    compareDueDates(a, b) {
        return compareAsc(a.dueDate, b.dueDate);
    },

    differenceBetweenDueDates(difference) {
        return difference !== 0;
    },

    comparePriority(a, b) {
        const priority_levels = { "high": 0, "medium": 1, "low": 2 };

        return priority_levels[a.priority] - priority_levels[b.priority];
    }
};

const displaysProjects = {
    displayProjects() {
        displayDirectories(Object.values(this.projects).sort((a, b) => this.compareTitles(a, b)));
    },

    expandProject(id) {
        const todosInProject = Object.values(this.todoItems).filter(todoItem => this.belongsToProject(todoItem, id));
        displayTasks(todosInProject.sort((a, b) => this.compareTodoItems(a, b))); 
        displayDirectoryView(this.projects[id]);
    },

    compareTitles(a, b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    },

    belongsToProject(todoItem, id) {
        return todoItem.projectId === id;
    }
};

Object.assign(DisplayController.prototype, processesTodoItems);
Object.assign(DisplayController.prototype, processesProjects);
Object.assign(DisplayController.prototype, storesTodoItems);
Object.assign(DisplayController.prototype, storesProjects);
Object.assign(DisplayController.prototype, removesTodoItems);
Object.assign(DisplayController.prototype, removesProjects);
Object.assign(DisplayController.prototype, updatesTodoItems);
Object.assign(DisplayController.prototype, updatesProjects);
Object.assign(DisplayController.prototype, displaysTodoItems);
Object.assign(DisplayController.prototype, displaysProjects);

export default DisplayController;