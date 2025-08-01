class Entity {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}

class TodoItem extends Entity {
    constructor(title, description, dueDate, priority) {
        super(title, description);
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

class Project extends Entity {
    constructor(title, description) {
        super(title, description);
    }
}