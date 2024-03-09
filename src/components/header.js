export default function header() {
    return `
        <header class="ms-header-wrapper">
            <div class="ms-rows-wrapper ms-header">
                <div class="ms-cols-wrapper">
                    <div class="ms-column lg-cols-6 sm-cols-6">
                        <a href="./" class="no-cursor">
                            <?xml version="1.0" encoding="utf-8"?>
                            <svg class="ms-logo" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
                            <g>
                                <path d="M90.5,20.7V4.2H72.6L55.2,95c-4.6,30.8-23.4,32.8-43.6,26.6l-4.7,20.4c33,10.8,66.6-1,71.8-44.4l14.6-77H90.5z"/>
                            </g>
                            <g>
                                <path d="M83.6,99.1l-3.2,16.5h43.9l3.1-16.5H83.6z M93.4,51.7l-2.8,14.4h37.8l2.8-14.4H93.4z M104.9,4.2v16.5h35l3.2-16.5H104.9z"
                                    />
                            </g>
                            <polygon points="143,4.2 106.7,20.7 73,20.7 73,4.2 "/>
                            </svg>
                        </a>
                    </div>
                    <div class="ms-column lg-cols-6 sm-cols-6">
                        <button class="hamburger hamburger--emphatic-r no-cursor" type="button">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>

                        <div class="ms-menu-wrapper">
                            <nav class="ms-navigation-container">
                                <ul>
                                    <li>
                                        <a href="#ms-about">
                                            <span class="top">
                                                <span>About</span>
                                                <span>About</span>
                                            </span>
                                            <span class="bottom">
                                                <span>About</span>
                                                <span>About</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#ms-experience">
                                            <span class="top">
                                                <span>Experience</span>
                                                <span>Experience</span>
                                            </span>
                                            <span class="bottom">
                                                <span>Experience</span>
                                                <span>Experience</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#ms-skills">
                                            <span class="top">
                                                <span>Skills</span>
                                                <span>Skills</span>
                                            </span>
                                            <span class="bottom">
                                                <span>Skills</span>
                                                <span>Skills</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#ms-projects">
                                            <span class="top">
                                                <span>Projects</span>
                                                <span>Projects</span>
                                            </span>
                                            <span class="bottom">
                                                <span>Projects</span>
                                                <span>Projects</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#ms-contact">
                                            <span class="top">
                                                <span>Contact</span>
                                                <span>Contact</span>
                                            </span>
                                            <span class="bottom">
                                                <span>Contact</span>
                                                <span>Contact</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    `;
}
