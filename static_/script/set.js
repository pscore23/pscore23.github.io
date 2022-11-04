import { insertHeaderAndFooter } from "./include.js";

function setMode(mode) {
    if (mode == "/stylesheet.css") {
        document.getElementById("dark").href = "/stylesheet.css"
    } else if (mode == "/dark_stylesheet.css") {
        document.getElementById("dark").href = "/dark_stylesheet.css"
    }
}

function setLinks() {
    let urls = document.getElementsByTagName("a");

    for (let i = 0; urls.length; i++) {
        let link_ = document.createElement("link");

        link_.rel = "dns-prefetch"
        link_.href = urls[i].href

        document.head.appendChild(link_)
    }
}

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("body").setAttribute("style", "pointer-events: none;");
})

window.onload = () => {
    setMode(localStorage.getItem("darkmode"));

    insertHeaderAndFooter();

    document.querySelector("body").setAttribute("style", "pointer-events: auto;")

    setLinks()
};