class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    changeTitle(title) {
        this.title = title;
    }

    changeDescription(description) {
        this.description = description;
    }

    changeDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    changePriority(priority) {
        this.priority = priority;
    }
}