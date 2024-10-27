
import { projectArr } from './js/project-arr';

//Header
import { header } from './js/header';
header();

//Last Projects
import { lastProjects } from './js/last-projects.js';
import { lastProjectsSlider } from './js/last-projects.js';
const lastProjectsEl = document.querySelector('.swiper-wrapper');
lastProjects(projectArr, lastProjectsEl);
lastProjectsSlider();


document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(event) {
        window.open(this.href);
        event.preventDefault();
    });
});