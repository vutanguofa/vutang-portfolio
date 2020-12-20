import React from "react";

function Resume() {
    return (
        <section className="resume-section page-section">
            <h2>Resume</h2>
            <div>
                <p>Download my <a href="https://drive.google.com/file/d/1bAmxGfd__hDw7afeuwF4omLcW4rAy2pT/view?usp=sharing" target="_blank">
                    resume </a></p>
                <h2>Client-side Proficiencies</h2>
                <ul>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React</li>
                </ul>
                <h2>Server-side Proficiencies</h2>
                <ul>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Nodejs</li>
                    <li>PHP</li>
                </ul>

            </div>
        </section>
    )
}

export default Resume;