import { insertHeaderAndFooter } from "./include.js";

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("body").setAttribute("style", "pointer-events: none;");
})

window.onload = () => {
    let mode = localStorage.getItem("darkmode");

    if (mode == "/stylesheet.css") {
        document.getElementById("dark").href = "/stylesheet.css"

    } else if (mode == "/dark_stylesheet.css") {
        document.getElementById("dark").href = "/dark_stylesheet.css"
    }

    document.querySelector("body").setAttribute("style", "pointer-events: auto;")

    insertHeaderAndFooter();
};