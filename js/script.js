
import { loadNavbar } from './components/navbar.js';
import { loadContent } from './components/pages.js';

loadNavbar();

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
    const galeryLink = document.getElementById('galeryLink')

   

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
    galeryLink.addEventListener('click', (event) => {
        event.preventDefault();
        loadContent('galery');
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    });
});
