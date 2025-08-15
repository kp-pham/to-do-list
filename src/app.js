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
        Object.values(this.controller.projects).forEach(project => projectsDropdown.appendChild(createOption(project)));
    }
};

const loadsTodoItems = {
    loadTodoItems() {
        this.controller.displayTodoItems();
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

const editsTodoItems = {
    editTodoItem(todoItem) {
        this.controller.updateTodoItem(todoItem);
        this.controller.expandTodoItem(todoItem);
    }
};

Object.assign(Application.prototype, loadsPageContent);
Object.assign(Application.prototype, loadsTodoItems);
Object.assign(Application.prototype, expandsTodoItems);
Object.assign(Application.prototype, expandsProjects);
Object.assign(Application.prototype, savesTodoItems);
Object.assign(Application.prototype, editsTodoItems);

export default Application;