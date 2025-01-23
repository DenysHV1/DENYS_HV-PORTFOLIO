
import { projectArr } from './js/project-arr';

//Header
import { header } from './js/header';
header();

//Last Projects
import { lastProjects } from './js/last-projects.js';
import { lastProjectsSlider } from './js/last-projects.js';
import { favoriteProjects } from './js/favorite.js';
const lastProjectsEl = document.querySelector('.swiper-wrapper');
lastProjects(projectArr, lastProjectsEl);
lastProjectsSlider();

favoriteProjects(projectArr)


document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        setTimeout(() => {
            window.open(this.href, '_blank');
        }, 100);
    });
});