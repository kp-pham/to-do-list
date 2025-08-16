import { displayTasks, displayTaskView } from "./tasks.js";
import { displayDirectories, displayDirectoryView } from "./directories.js";
import { compareAsc } from "date-fns";

class DisplayController {}

const displaysTodoItems = {    
    displayTodoItems(todoItems) {
        displayTasks(todoItems.sort((a, b) => this.compareTodoItems(a, b)));
    }
};

const displaysProjects = {
    displayProjects(projects) {
        displayDirectories(projects.sort((a, b) => this.compareTitles(a, b)));
    }
};

const expandsTodoItems = {
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

const expandsProjects = {
    expandProject(project, todoItems) {
        const todosInProject = todoItems.filter(todoItem => this.belongsToProject(todoItem, project));
        displayTasks(todosInProject.sort((a, b) => this.compareTodoItems(a, b))); 
        displayDirectoryView(project);
    },

    compareTitles(a, b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    },

    belongsToProject(todoItem, project) {
        return todoItem.projectId === project.id;
    }
};

Object.assign(DisplayController.prototype, displaysTodoItems);
Object.assign(DisplayController.prototype, displaysProjects);
Object.assign(DisplayController.prototype, expandsTodoItems);
Object.assign(DisplayController.prototype, expandsProjects);

export default DisplayController;