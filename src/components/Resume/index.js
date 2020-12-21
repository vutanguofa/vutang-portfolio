import React from "react";
import vutang from '../../assets/vuResume.docx';

function Resume() {
    return (
        <section className="resume-section page-section">
            <h2>Resume</h2>
            <div>
                <a href={vutang} download>
                    <button class="button button1">Download Resume</button>
                </a><br/>
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