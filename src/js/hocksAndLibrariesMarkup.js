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


const styleName = (name) => {
  switch (name) {
    case "all":
      return "all-name"
    case "react":
      return "react-name"
    case "js":
      return "js-name"
    case "redux":
      return "redux-name"
    case "node":
      return "node-name"
    default:
      return {};
  }
};

const setLibrariesMarkup = () => {
  return librariesArr
    .map(
      ({ name, id, link, set, purpose, forSkill }) => `<li class="hocksLibraries-item" id="${id}">
	  <p class="item-number">${id}</p>
    <h3>${forSkill}</h3>
	  <a class="item-from_link libraries-link ${styleName(forSkill)}"  href="${link}" target= "_blank" rel="noopener noreferrer">▶ ${name}</a>
	  <p class="item-set">${set}</p>
    <p class="${purpose === "production" ? "purpose" : "purpose1"}">${purpose}</p>
	  </li>`
    )
    .join('');
};

librariesListEl.insertAdjacentHTML('beforeend', setLibrariesMarkup());
