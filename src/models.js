class Entity {
    constructor(title, description) {
        this.title = title;
        this.description = description;
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
} 

class TodoItem extends Entity {
    constructor(title, description, dueDate, priority) {
        super(title, description);
        this.dueDate = dueDate;
        this.priority = priority;
    }

    static fromData({ title, description, dueDate, priority, id }) {
        const todoItem = new TodoItem(title, description, dueDate, priority);
        todoItem.id = id;

        return todoItem;
    } 
}

Object.assign(TodoItem.prototype, hasTitle);
Object.assign(TodoItem.prototype, hasDescription);
Object.assign(TodoItem.prototype, hasDueDate);
Object.assign(TodoItem.prototype, hasPriority);

class Project extends Entity {
    constructor(title, description) {
        super(title, description);
    }

    static fromData({ title, description }) {
        return new Project(title, description);
    }
}

Object.assign(Project.prototype, hasTitle);
Object.assign(Project.prototype, hasDescription);

export { TodoItem, Project };