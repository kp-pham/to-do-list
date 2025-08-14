class Entity {
    constructor(title, description) {
        this.title = title;
        this.id = crypto.randomUUID();
    }
}

const hasTitle = {
    changeTitle(title) {
        this.title = title;
    }
};

const hasDescription = {
    changeDescription(description) {
        this.description = description;
    }
};

const hasDueDate = {
    changeDueDate(dueDate) {
        this.dueDate = dueDate;
    }
};

const hasPriority = {
    changePriority(priority) {
        this.priority = priority;
    }
}; 

const belongsToProject = {
    changeProjectId(projectId) {
        this.projectId = projectId;
    }
};

class TodoItem extends Entity {
    constructor(title, description, dueDate, priority, projectId) {
        super(title);
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectId = projectId;
    }

    static fromData({ title, description, dueDate, priority, id, projectId }) {
        const todoItem = new TodoItem(title, description, dueDate, priority);
        todoItem.id = id;
        todoItem.projectId = projectId;

        return todoItem;
    } 
}

Object.assign(TodoItem.prototype, hasTitle);
Object.assign(TodoItem.prototype, hasDescription);
Object.assign(TodoItem.prototype, hasDueDate);
Object.assign(TodoItem.prototype, hasPriority);
Object.assign(TodoItem.prototype, belongsToProject);

class Project extends Entity {
    constructor(title) {
        super(title);
    }

    static fromData({ title, id }) {
        const project = new Project(title);
        project.id = id;
        
        return project;
    }
}

Object.assign(Project.prototype, hasTitle);

export { TodoItem, Project };