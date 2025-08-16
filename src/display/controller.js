import { displayTasks, displayTaskView } from "./tasks.js";
import { displayDirectories, displayDirectoryView } from "./directories.js";
import { compareAsc } from "date-fns";

class DisplayController {
    constructor() {
        this.todoItems = {};
        this.projects = {};
    }
}

const displaysTodoItems = {    
    displayTodoItems(todoItems) {
        displayTasks(todoItems.sort((a, b) => this.compareTodoItems(a, b)));
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
    displayProjects(projects) {
        displayDirectories(projects.sort((a, b) => this.compareTitles(a, b)));
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

Object.assign(DisplayController.prototype, displaysTodoItems);
Object.assign(DisplayController.prototype, displaysProjects);

export default DisplayController;