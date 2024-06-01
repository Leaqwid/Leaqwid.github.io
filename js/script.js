// script.js

// Funcția pentru a încărca bara de navigare
function loadNavbar() {
    var navbarHtml = `
    <nav>
        <a class="logoWebsite" href="/index.html">Acasa</a>
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

// Funcția pentru a încărca conținutul
function loadContent(page) {
    var contentHTML = "";

    switch (page) {
        case "about":
            contentHTML = `
                <main>
                    <h1>Despre mine</h1>
                    <div>
                        <ul>
                            <li>Numele meu : Tamba Robert Cristian</li>
                            <li>Cati ani am : 21 ani</li>
                            <li>Unde locuiesc : Romania ; Bucuresti</li>
                            <li>Ce hobby-uri am : Website Developing ,Discord Server Creator ,Gaming</li>
                            <li>Cum ma puteti contacta : 
                                <ol>
                                    <li>Discord : _atemis</li>
                                    <li>Skype : Leaqwid</li>
                                    <li>Microsoft Teams : - Leaqwid - </li>
                                    <li><a href="https://www.facebook.com/profile.php?id=100077500881403" rel="noopener" target="_blank">Facebook</a></li>
                                    <li><a href="https://www.instagram.com/robertcristian2517/" rel="noopener" target="_blank">Instagram</a></li>
                                    <li>Gmail : tambarobert1355@gmail.com</li>
                                </ol>
                            </li>
                        </ul>
                    </div>
                </main>
            `;
            break;
        case "projects":
            contentHTML = `
                <main>
                    <h1>Projects</h1>
                </main>
            `;
            break;
        case "how":
            contentHTML = `
                <main>
                    <h1>Cum am facut acest Website</h1>
                    <div>
                        <p>Am incercat sa structurez din punct de vedere structural al codului si functional din partea Userul-ui ,deoarece este important UX (User Experience-ul) cand vine vorba de crearea unui Website</p>
                        <p>M-am gandit in felul urmator : </p>
                        <ul>
                            <li>Sa imi aranjez codurile html prin Javascript</li>
                            <li>Acest aranjament le voi numii componente in care daca vreau sa modific ceva ,doar intru in folderul javascript si modific si prin aceasta metoda am inteles ca sunt folosite in acest mod de catre frameworkuri/libreries doar ca am facut in cod pur</li>
                            <li>URL-ul nu se schimba deoarece am folosit un cod Javascript in care schimba continutul paginii Index.html</li>
                        </ul>
                    </div>
                </main>
            `;
            break;
        default:
            contentHTML = `<p>Pagina nu a fost găsită.</p>`;
    }

    document.getElementById("contentContainer").innerHTML = contentHTML;
}

// Încărcăm bara de navigare la inițializare
document.addEventListener('DOMContentLoaded', () => {
    loadNavbar();

    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
        navbar.classList.toggle('visible');
    });

    const aboutLink = document.getElementById('aboutLink');
    const projectsLink = document.getElementById('projectsLink');
    const howLink = document.getElementById('howLink');

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('about');
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    });

    projectsLink.addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('projects');
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    });

    howLink.addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('how');
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    });
});
