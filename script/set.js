import { insertHeaderAndFooter } from "./include.js";

window.onload = () => {
    insertHeaderAndFooter();

    let mode = localStorage.getItem("darkmode");

    if (mode == "/stylesheet.css") {
        document.getElementById("dark").href = "/stylesheet.css"

    } else if (mode == "/dark_stylesheet.css") {
        document.getElementById("dark").href = "/dark_stylesheet.css"
    }
};