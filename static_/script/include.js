import { getTime } from "./time.js";

export function insertHeaderAndFooter() {
    document.getElementById("header").innerHTML = `
    <header>
        <h1>
            <a href="/">
                ps_Web
            </a>
        </h1>
        <nav id="top">
            <ul>
                <li>
                    <a href="/">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/#about">
                            About
                    </a>
                </li>
                <li>
                    <a href="/#project">
                        Project
                    </a>
                </li>
                <li>
                    <a href="/contact/">
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
                <li>
                    <a>
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);" onclick="superReload();">
                        このページをスーパーリロード
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);" onclick="changeStyle('/stylesheet.css');">
                        ライトモード
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);" onclick="changeStyle('/dark_stylesheet.css');">
                        ダークモード
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
    <footer>
        <p>
            <small>
                <i class="fa-brands fa-github" onclick="window.location.href = 'https://github.com/pscore23/pscore23.github.io'">
                </i>
                &emsp;
                <a href="/privacy/">
                    プライバシーポリシー
                </a>
            </small>
            <br />
            © 2022 All rights reserved by <a href="https://github.com/pscore23">pscore23</a>.
        </p>
    </footer>
    `;
};
