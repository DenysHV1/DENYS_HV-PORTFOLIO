import outsourcing from './js/outsourcing.js';
import { projectArr } from './data/project-arr.js';
import { scrollUp } from './js/scroll-up.js';
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

outsourcing(projectArr)

favoriteProjects(projectArr)



scrollUp()
