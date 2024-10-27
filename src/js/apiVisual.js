import { projectArr } from './project-arr.js';

//Header
import { header } from './header.js';
header();

//pages
import { refs } from './refs.js';
const { apiVisualsEl, apiVisualKey, apiVisualsPagination } = refs;
import { librariesMarkup } from './render-libraries-markup.js';
import { renderListMarkup } from './render-list-markup.js';
import { pagination } from './pagination.js';
import { openLibraries } from './openLibraries.js';

// render markup
apiVisualsEl.insertAdjacentHTML(
  'beforeend',
  renderListMarkup(projectArr, apiVisualKey, librariesMarkup)
);

const libraries = {
  librariesWebsitesBtn: document.querySelector('.websitesLibraries'),
  librariesApiVisualsBtn: document.querySelector('.api-visualsLibraries'),
  librariesComponentsBtn: document.querySelector('.componentsLibraries'),
  librariesWebAppsBtn: document.querySelector('.web-appsLibraries'),
  librariesWebGamesBtn: document.querySelector('.web-gamesLibraries'),
}

pagination(apiVisualsEl, apiVisualsPagination);


const librariesApiVisualsBtn = document.querySelectorAll('.api-visualsLibraries');
openLibraries(librariesApiVisualsBtn)
