import { projectArr } from './project-arr.js';
import { scrollUp } from './scroll-up.js';
//Header
import { header } from './header.js';
header();
scrollUp()
//pages
import { refs } from './refs.js';
const { componentsEl, componentsKey, componentsPagination } = refs;
import { librariesMarkup } from './render-libraries-markup.js';
import { renderListMarkup } from './render-list-markup.js';
import { pagination } from './pagination.js';
import { openLibraries } from './openLibraries.js';

// render markup
componentsEl.insertAdjacentHTML(
  'beforeend',
  renderListMarkup(projectArr, componentsKey, librariesMarkup)
);

const librariesComponentsBtn = document.querySelectorAll(
  '.componentsLibraries'
);
openLibraries(librariesComponentsBtn);

pagination(componentsEl, componentsPagination, librariesComponentsBtn);
