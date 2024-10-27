import { projectArr } from './project-arr.js';

//Header
import { header } from './header.js';
header();

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

pagination(componentsEl, componentsPagination);

const librariesComponentsBtn = document.querySelectorAll('.componentsLibraries');
openLibraries(librariesComponentsBtn)