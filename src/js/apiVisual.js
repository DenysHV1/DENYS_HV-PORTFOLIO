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

// render markup
apiVisualsEl.insertAdjacentHTML(
  'beforeend',
  renderListMarkup(projectArr, apiVisualKey, librariesMarkup)
);

pagination(apiVisualsEl, apiVisualsPagination);
