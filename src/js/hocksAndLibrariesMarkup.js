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

const styleName = (forSkill, name) => {
  switch (forSkill) {
    case 'all':
      return 'all-name';
    case 'react':
      return name === 'React router' ? 'react-name-router' : 'react-name';
    case 'js':
      return 'js-name';
    case 'redux':
      return name === 'Redux toolkit' ? 'redux-name-toolkit' : 'redux-name';
    case 'node':
      return name === 'express' ? 'node-name-express' : 'node-name';
    default:
      return {};
  }
};

let activeFilter = 'all';

// Ссылки на кнопки
const allBtnEl = document.querySelector('.all-js');
const jsBtnEl = document.querySelector('.js-js');
const reactBtnEl = document.querySelector('.react-js');
const reduxBtnEl = document.querySelector('.redux-js');
const nodeBtnEl = document.querySelector('.node-js');

allBtnEl.addEventListener('click', () => {
  activeFilter = 'all';
  renderLibraries();
});

jsBtnEl.addEventListener('click', () => {
  activeFilter = 'js';
  renderLibraries();
});

reactBtnEl.addEventListener('click', () => {
  activeFilter = 'react';
  renderLibraries();
});

reduxBtnEl.addEventListener('click', () => {
  activeFilter = 'redux';
  renderLibraries();
});

nodeBtnEl.addEventListener('click', () => {
  activeFilter = 'node';
  renderLibraries();
});

const setLibrariesMarkup = () => {
  return librariesArr
    .filter(
      ({ forSkill }) => activeFilter === 'all' || forSkill === activeFilter
    ) // Фильтруем массив
    .map(
      ({ name, id, link, set, purpose, forSkill }) => `
        <li class="hocksLibraries-item" id="${id}">
          <p class="item-number">${id}</p>
          <a class="item-from_link libraries-link ${styleName(
            forSkill,
            name
          )}" href="${link}" target="_blank" rel="noopener noreferrer">▶ ${name}</a>
          <p class="item-set">${set}</p>
          <p class="${
            purpose === 'production' ? 'purpose' : 'purpose1'
          }">${purpose}</p>
        </li>`
    )
    .join('');
};

const renderLibraries = () => {
  librariesListEl.innerHTML = '';
  librariesListEl.insertAdjacentHTML('beforeend', setLibrariesMarkup());
};

renderLibraries();
