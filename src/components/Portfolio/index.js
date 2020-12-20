import React from "react";

function Portfolio() {
    
    return (
        <section class="page-section" id="work">
            <h2>Portfolio</h2>
            <div class="grid-container right-margin">

        <a href="https://vutanguofa.github.io/challenge4final/" target="_blank" class="grid-item sfquiz">
          <div>
            <h3>Street Fighter Quiz</h3>
            <span>CSS/HTML</span>
          </div>
        </a>
        
        <a href="https://vutanguofa.github.io/challenge5final/" target="_blank" class="grid-item worksched">
          <div>
            <h3>Work Day Scheduler</h3>
            <span>CSS/HTML/JavaScript</span>
          </div>
        </a>
        <a href="https://vutanguofa.github.io/challenge3final/" target="_blank" class="grid-item pwgen">
          <div>
            <h3>Password Generator</h3>
            <span>CSS/HTML/JavaScript</span>
          </div>
        </a>        
        <a href="https://note-taker-challenge.herokuapp.com/" target="_blank" class="grid-item notetaker">
          <div>
            <h3>Note Taker</h3>
            <span>CSS/HTML/JavaScript</span>
          </div>
        </a>
        
        <a href="https://vutanguofa.github.io/group4_project1/" target="_blank" class="grid-item germ1">
          <div>
            <h3>Germ Stoppers Frontend</h3>
            <span>HTML/JavaScript</span>
          </div>
        </a>
        
        <a href="https://germ-stoppers-backend.herokuapp.com/" target="_blank" class="grid-item germ2">
          <div>
            <h3>Germ Stoppers Backend</h3>
            <span>HANDLEBARS/HTML</span>
          </div>
        </a>
        
      </div>
    </section>

    )
}

export default Portfolio;