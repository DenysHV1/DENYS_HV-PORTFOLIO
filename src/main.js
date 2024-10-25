import { projectArr } from './js/project-arr';

//Header
import { header } from './js/header/header';
header();

//Last Projects
import { lastProjects } from './js/last-projects.js';
import { lastProjectsSlider } from './js/last-projects.js';
const lastProjectsEl = document.querySelector('.swiper-wrapper');
lastProjects(projectArr, lastProjectsEl);
lastProjectsSlider();
