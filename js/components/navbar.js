// navbar.js
function loadNavbar() {
    var navbarHtml = `
    <nav>
        <a class="logoWebsite" href="/index.html" >Acasa</a>
        <div class="nav-links">
            <ul>
                <li><a href="#" id="aboutLink">Despre mine</a></li>
                <li><a href="#" id="projectsLink">Proiectele mele</a></li>
                <li><a href="#" id="howLink">Cum am făcut acest website</a></li>
            </ul>
        </div>
    </nav>
    `;
    document.getElementById('navbarContainer').innerHTML = navbarHtml;
}

document.addEventListener('DOMContentLoaded', loadNavbar);

export { loadNavbar };
