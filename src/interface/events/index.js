import setUpProjectEvents from "./project-events.js";
import setUpTaskEvents from "./task-events.js";
import { updateProjectDropdown } from "./utils.js";

function setUpEventListeners(app) {
    setUpPageLoad(app);
    setUpProjectEvents(app);
    setUpTaskEvents(app);
}

function setUpPageLoad(app) {
    app.load();
    updateProjectDropdown(app);
}

export default setUpEventListeners;