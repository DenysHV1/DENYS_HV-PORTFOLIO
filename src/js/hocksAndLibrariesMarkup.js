//Header
import { header } from './header.js';
header();

//
import { hocks } from './hocksArr';
const hocksListEl = document.querySelector('.hocks-list-js');

const setHooksMarkup = () => {
  return hocks
    .map(
      ({ name, id, link, from }) => `<li class="hocksLibraries-item" id="${id}">
	<p class="item-number">${id}</p>
	<p class="item-from">${from}</p>
	<a class="item-from_link" href="${link}" target= "_blank" rel="noopener noreferrer">▶ ${name}</a>
	</li>`
    )
    .join('');
};

hocksListEl.insertAdjacentHTML('beforeend', setHooksMarkup());

//
import { librariesArr } from './hocksArr';
const librariesListEl = document.querySelector('.libraries-list-js');

const setLibrariesMarkup = () => {
  return librariesArr
    .map(
      ({ name, id, link, set }) => `<li class="hocksLibraries-item" id="${id}">
	  <p class="item-number">${id}</p>
	  <a class="item-from_link" href="${link}" target= "_blank" rel="noopener noreferrer">▶ ${name}</a>
	  <p class="item-set">${set}</p>
	  </li>`
    )
    .join('');
};

librariesListEl.insertAdjacentHTML('beforeend', setLibrariesMarkup());
