import { getTime } from "./time.js";

function set() {
    document.getElementById("header").innerHTML = `
    <header>
        <h1>
            <a href="/index.html">
                ps_Web
            </a>
        </h1>
        <nav id="top">
            <ul>
                <li>
                    <a href="/index.html">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/index.html#about">
                            About
                    </a>
                </li>
                <li>
                    <a href="/index.html#project">
                        Project
                    </a>
                </li>
                <li>
                    <a href="/contact/index.html#contact">
                        Contact
                    </a>
                </li>
                <li>
                    <a>
                    </a>
                </li>
                <li>
                    <a>
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    `;

    document.getElementById("time").innerHTML = `
    <a href="javascript:void(0);">
        このページが読み込まれた時刻 - ${getTime()}
    </a>
    `

    document.getElementById("footer").innerHTML = `
    <footer id="footer">
        <p>
        <small>
                <a href="/privacy/index.html">プライバシーポリシー</a>
            </small>
            <br />
            © 2022 All rights reserved by <a href="https://github.com/pscore23">pscore23</a>.
        </p>
    </footer>
    `;
};

set();