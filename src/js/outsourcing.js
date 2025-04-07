const outsourcing = (projectArr) => {
  const outsourcingListEl = document.querySelector('.outsourcing-projects-list-js');
  const showMoreBtnEl = document.querySelector('.show-more-js');
  let items = 3;
  const arrItems = projectArr?.filter(({ outsourcing }) => outsourcing)?.reverse();
  const maxItems = arrItems.length;

  const setOutsourcingMarkup = (projectArrInner, items) => {
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
          },
          idx
        ) => {
          if (status && idx < items) {
            return `
    <li class="outsourcing-item" id="${id}">
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
      <p class="outsourcing-technology">${technology1}</p>
      <p class="outsourcing-technology">${technology2}</p>
      <p class="outsourcing-technology">${technology3}</p>
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

  outsourcingListEl.insertAdjacentHTML(
    'beforeend',
    setOutsourcingMarkup(arrItems, items)
  );

  showMoreBtnEl.addEventListener('click', () => {
    if (items === 3) {
      showMoreBtnEl.textContent = 'Hide';
      items = maxItems;
      outsourcingListEl.innerHTML = '';
      outsourcingListEl.insertAdjacentHTML(
        'beforeend',
        setOutsourcingMarkup(arrItems, items)
      );
    } else {
      showMoreBtnEl.textContent = 'Show more';
      items = 3;
      outsourcingListEl.innerHTML = '';
      outsourcingListEl.insertAdjacentHTML(
        'beforeend',
        setOutsourcingMarkup(arrItems, items)
      );

      const firstItemEl = outsourcingListEl.querySelector('.outsourcing-item');
      if (firstItemEl) {
        const targetPosition = firstItemEl.offsetTop - 200;
        scrollTo(outsourcingListEl, targetPosition, 500);
      }
    }
  });
}

export default outsourcing;