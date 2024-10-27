import { projectArr } from './project-arr.js';

//Header
import { header } from './header.js';
header();
//pages
import { refs } from './refs.js';
const { websitesEl, websitesKey, websitesPagination } = refs;
import { librariesMarkup } from './render-libraries-markup.js';
import { renderListMarkup } from './render-list-markup.js';
import { pagination } from './pagination.js';
import { openLibraries } from './openLibraries.js';

websitesEl.insertAdjacentHTML(
  'beforeend',
  renderListMarkup(projectArr, websitesKey, librariesMarkup)
);

pagination(websitesEl, websitesPagination);

const librariesWebsitesBtn = document.querySelectorAll('.websitesLibraries');
openLibraries(librariesWebsitesBtn);
