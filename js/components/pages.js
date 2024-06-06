async function fetchRepositories() {
  const username = 'Leaqwid'; // Înlocuiește cu numele tău de utilizator GitHub
  const url = `https://api.github.com/users/${username}/repos`;

  try {
      const response = await fetch(url);
      const repositories = await response.json();

      const projectsContainer = document.getElementById('projects-container');
      projectsContainer.innerHTML = ''; // Golim containerul înainte de a adăuga repository-urile

      repositories.forEach(repo => {
          const repoElement = document.createElement('div');
          repoElement.className = 'repository';
          repoElement.innerHTML = `
              <h4>${repo.name}</h4>
              <p>${repo.description || 'No description'}</p>
              <a href="${repo.html_url}" target="_blank">View Repository</a>
          `;
          projectsContainer.appendChild(repoElement);
      });
  } catch (error) {
      console.error('Error fetching repositories:', error);
  }
}

function loadContent(page) {
  var contentHTML = "";

  switch (page) {
      case "about":
          contentHTML = `
          <main>
              <h1>Despre mine</h1>
              <div>
                  <ul class="listDetails">
                      <li><p>Numele meu : Tamba Robert Cristian</p></li>
                      <li><p>Cati ani am : 21 ani</p></li>
                      <li><p>Unde locuiesc : Romania ; Bucuresti</p></li>
                      <li><p>Ce hobby-uri am : Website Developing ,Discord Server Creator ,Gaming</p></li>
                      <li><p>Cum ma puteti contacta : </p>
                          <ol>
                              <li><p>Discord : _atemis</p></li>
                              <li><p>Skype : Leaqwid</p></li>
                              <li><p>Microsoft Teams : - Leaqwid -</p> </li>
                              <li><a href="https://www.facebook.com/profile.php?id=100077500881403" rel="noopener" target="_blank">Facebook</a></li>
                              <li><a href="https://www.instagram.com/robertcristian2517/" rel="noopener" target="_blank">Instagram</a></li>
                              <li><p>Gmail : tambarobert1355@gmail.com</p></li>
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
              <div id="projects-container">
                  <!-- Repository links will be inserted here -->
              </div>
          </main>`;
          break;
      case "how":
          contentHTML = `
          <main>
              <h1>Cum am facut acest Website</h1>
              
              <div class="howDiv">
                  <p>Conceptul este destul de simplu, am folosit JavaScript pentru a schimba DOM-ul</p>
                  <p>Am separat fisierele Javascript intr-un folder numit Components si toate dau export intr-un js file numit script.js. </p>
                  <p>In acest mod am aranjat structural folderul.</p>
              </div>
          </main>`;
          break;
    
      default:
          contentHTML = `<p>Pagina nu a fost găsită.</p>`;
  }

  document.getElementById("contentContainer").innerHTML = contentHTML;

  // Apelăm fetchRepositories doar dacă suntem pe pagina de proiecte
  if (page === "projects") {
      fetchRepositories();
  }
}

export { loadContent };
