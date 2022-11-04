import { insertHeaderAndFooter } from "./include.js";

function setMode(mode) {
    if (mode == "/stylesheet.css") {
        document.getElementById("dark").href = "/stylesheet.css"
    } else if (mode == "/dark_stylesheet.css") {
        document.getElementById("dark").href = "/dark_stylesheet.css"
    }
}

function setLinks() {
    let temp = []
    let outs = ["", "javascript:void(0);"]
    let urls = document.getElementsByTagName("a");

    for (let i = 0; urls.length; i++) {
        let link_ = document.createElement("link");
        let href_ = urls[i].href

        link_.rel = "dns-prefetch preconnect preload"
        link_.href = href_

        if (!(temp.includes(href_) || outs.includes(href_))) {
            document.head.appendChild(link_);
        }

        temp.push(href_);
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