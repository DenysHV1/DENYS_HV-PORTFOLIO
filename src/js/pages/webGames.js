import { projectArr } from '../../data/project-arr.js';

import { scrollUp } from '../scroll-up.js';
scrollUp()

//Header
import { header } from '../header.js';
header();

//pages
import { refs } from '../refs.js';
const { webGamesEl, webGamesKey, webGamesPagination } = refs;
import { librariesMarkup } from '../render-libraries-markup.js';
import { renderListMarkup } from '../render-list-markup.js';
import { pagination } from '../pagination.js';
import { openLibraries } from '../openLibraries.js';

// render markup
webGamesEl.insertAdjacentHTML(
  'beforeend',
  renderListMarkup(projectArr, webGamesKey, librariesMarkup)
);

const librariesWebGamesBtn = document.querySelectorAll('.web-gamesLibraries');
openLibraries(librariesWebGamesBtn);

pagination(webGamesEl, webGamesPagination, librariesWebGamesBtn);
