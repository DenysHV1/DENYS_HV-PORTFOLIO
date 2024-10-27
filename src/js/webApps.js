import { projectArr } from './project-arr.js';

//Header
import { header } from './header.js';
header();

//pages
import { refs } from './refs.js';
const { webAppsEl, webAppsKey, webAppsPagination } = refs;
import { librariesMarkup } from './render-libraries-markup.js';
import { renderListMarkup } from './render-list-markup.js';
import { pagination } from './pagination.js';
import { openLibraries } from './openLibraries.js';

webAppsEl.insertAdjacentHTML(
  'beforeend',
  renderListMarkup(projectArr, webAppsKey, librariesMarkup)
);

const librariesWebAppsBtn = document.querySelectorAll('.web-appsLibraries');
openLibraries(librariesWebAppsBtn);

pagination(webAppsEl, webAppsPagination, librariesWebAppsBtn);
