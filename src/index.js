import setUpEventListeners from "./interface";
import Application from "./app.js";
import "./styles.css";


document.addEventListener("DOMContentLoaded", function() {
    setUpEventListeners(new Application());
});