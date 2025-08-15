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
    }
};

Object.assign(Application.prototype, loadsPageContent);

export default Application;