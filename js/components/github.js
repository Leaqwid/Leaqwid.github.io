async function fetchProjects() {
    try {
        const response = await fetch('https://api.github.com/users/TambaRobertCristian/repos');
        const projects = await response.json();
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}

// Funcția pentru a afișa proiectele în lista
async function displayProjects() {
    const projects = await fetchProjects();
    const projectList = document.getElementById('project-list');
    
    // Golește lista existentă
    projectList.innerHTML = '';

    // Adaugă fiecare proiect ca un element <li>
    projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project.name;
        projectList.appendChild(listItem);
    });
}

// Afișează inițial lista de proiecte
displayProjects();

// Actualizează lista de proiecte la fiecare 30 de secunde (30000 milisecunde)
setInterval(displayProjects, 30000);