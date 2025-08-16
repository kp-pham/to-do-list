import setUpProjectEvents from "./project-events.js";
import setUpTaskEvents from "./task-events.js";

function setUpEventListeners(app) {
    setUpProjectEvents(app);
    setUpTaskEvents(app);
}

export default setUpEventListeners;