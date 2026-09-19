import outsourcing from './js/outsourcing.js';
import { projectArr } from './data/project-arr.js';
import { scrollUp } from './js/scroll-up.js';
import { header } from './js/header.js';
import { lastProjects, lastProjectsSlider } from './js/last-projects.js';
import { favoriteProjects } from './js/favorite.js';

header();
scrollUp();

// Render the small card lists immediately so below-fold sections retain their
// height. The larger slider implementation is loaded only near its section.
const lastProjectsEl = document.querySelector('.swiper-wrapper');
lastProjects(projectArr, lastProjectsEl);
outsourcing(projectArr);
favoriteProjects(projectArr);
lastProjectsSlider();
