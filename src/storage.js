function storageAvailable(type) {
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
    }
    catch(error) {
        return error instanceof DOMException && error.name === "QuotaExceededError" 
            && storage && storage.length !== 0;
    }
}

localStorage.setItem("projects", JSON.stringify({}));
localStorage.setItem("todo-items", JSON.stringify({}));