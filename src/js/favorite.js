export const favoriteProjects = projectArr => {
  const favoriteListEl = document.querySelector('.favorite-projects-list-js');
  const showMoreBtnEl = document.querySelector('.show-more-js');
  let items = 3;
  const arrItems = projectArr?.filter(({ favorite }) => favorite);
  const maxItems = arrItems.length;

  const setFavoriteMarkup = (projectArrInner, items) => {
    return projectArrInner
      .map(
        (
          {
            name,
            id,
            status,
            imgPreview,
            codeLink,
            siteLink,
            technology1,
            technology2,
            technology3,
            favorite,
          },
          idx
        ) => {
          if (status && favorite && idx < items) {
            return `
    <li class="favorite-item" id="${id}">
    <h3 class="name-info-git">${name}</h3>
  <img
  class="gallery-image"
  src="${imgPreview}"
  alt="${name}"
      width="355"
  height="200"
  />
<div class="project-item-info">
  <div class="project-item-info-left">
      <p class="favorite-technology">${technology1}</p>
      <p class="favorite-technology">${technology2}</p>
      <p class="favorite-technology">${technology3}</p>
  </div>
  <div class="project-item-info-right">
    <a href="${siteLink}" class="last-project-item-btn">Site</a>
    <a href="${codeLink}" class="last-project-item-btn">Code</a>
  </div>
</div>

</li>`;
          }
        }
      )
      .join('');
  };

  favoriteListEl.insertAdjacentHTML(
    'beforeend',
    setFavoriteMarkup(arrItems, items)
  );

  showMoreBtnEl.addEventListener('click', () => {
    if (items === 3) {
      showMoreBtnEl.textContent = 'Hide';
      items = maxItems;
      favoriteListEl.innerHTML = '';
      favoriteListEl.insertAdjacentHTML(
        'beforeend',
        setFavoriteMarkup(arrItems, items)
      );
    } else {
      showMoreBtnEl.textContent = 'Show more';
      items = 3;
      favoriteListEl.innerHTML = '';
      favoriteListEl.insertAdjacentHTML(
        'beforeend',
        setFavoriteMarkup(arrItems, items)
      );

      const firstItemEl = favoriteListEl.querySelector('.favorite-item');
      if (firstItemEl) {
        const targetPosition = firstItemEl.offsetTop - 200;
        scrollTo(favoriteListEl, targetPosition, 500);
      }
    }
  });
};
