function createGetIconFromTemplate(template) {
    return function() {
        return template.content.firstElementChild.cloneNode(true);
    }
}

function createTitle(title) {
    const entityTitle = document.createElement("h1");
    entityTitle.classList.add("title");
    entityTitle.textContent = title;

    return entityTitle;
}

export { createGetIconFromTemplate, createTitle };