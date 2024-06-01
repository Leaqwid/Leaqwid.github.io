
import { loadNavbar } from './components/navbar.js';
import { loadContent } from './components/pages.js';

loadNavbar();

document.addEventListener('DOMContentLoaded', () => {
    
    const aboutLink = document.getElementById('aboutLink');
    const projectsLink = document.getElementById('projectsLink');
    const downloadsLink = document.getElementById('howLink');

   

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('about');
    });

    projectsLink.addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('projects');
    });

    downloadsLink.addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('how');
    });
});
