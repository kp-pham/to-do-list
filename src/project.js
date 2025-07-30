class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.todoItems = [];
    }

    changeTitle(title) {
        this.title = title;
    }

    changeDescription(description) {
        this.description = description;
    }

    addTodoItem(todoItem) {
        this.todoItems.push(todoItem);
    }
}