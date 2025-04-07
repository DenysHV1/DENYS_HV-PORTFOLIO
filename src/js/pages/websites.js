import { projectArr } from '../../data/project-arr.js';
import { scrollUp } from '../scroll-up.js';

scrollUp()
//Header
import { header } from '../header.js';
header();
//pages
import { refs } from '../refs.js';
const { websitesEl, websitesKey, websitesPagination } = refs;
import { librariesMarkup } from '../render-libraries-markup.js';
import { renderListMarkup } from '../render-list-markup.js';
import { pagination } from '../pagination.js';
import { openLibraries } from '../openLibraries.js';

websitesEl.insertAdjacentHTML(
  'beforeend',
  renderListMarkup(projectArr, websitesKey, librariesMarkup)
);

const librariesWebsitesBtn = document.querySelectorAll('.websitesLibraries');
openLibraries(librariesWebsitesBtn);

pagination(websitesEl, websitesPagination, librariesWebsitesBtn);
