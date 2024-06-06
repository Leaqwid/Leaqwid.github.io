import { loadContent } from './pages.js';

function loadNavbar() {
    var navbarHtml = `
    <nav>
        <a class="logoWebsite" href="index.html">Acasa</a>
        <div class="nav-links">
            <ul>
                <li><a href="#" id="aboutLink">Despre mine</a></li>
                <li><a href="#" id="projectsLink">Proiectele mele</a></li>
                <li><a href="#" id="howLink">Cum am făcut acest website</a></li>
            </ul>
        </div>
    </nav>`;
    document.getElementById('navbarContainer').innerHTML = navbarHtml;

    // Adăugăm event listeners pentru link-urile din navbar
    document.getElementById('aboutLink').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('about');
    });

    document.getElementById('projectsLink').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('projects');
    });

    document.getElementById('howLink').addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('how');
    });

}

document.addEventListener('DOMContentLoaded', loadNavbar);

export { loadNavbar };
