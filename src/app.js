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

Object.assign(Application.prototype, loadsPageContent);
Object.assign(Application.prototype, expandsTodoItems);
Object.assign(Application.prototype, expandsProjects);

export default Application;