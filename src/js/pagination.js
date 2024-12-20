export const pagination = (list, listBtn, librariesList) => {
  const elements = list.children.length;
  const pagesArr = [];
  const listItems = list.querySelectorAll('.pages-list-item');
  let page = 1;
  function showItem(innerPage) {
    return [...listItems].forEach((item, idx) => {
      if (idx + 1 !== innerPage) {
        item.style.display = 'none';
      } else {
        item.style.display = 'flex';
      }
    });
  }

  showItem(page);

  for (let i = 1; i <= elements; i += 1) {
    pagesArr.push(i);
  }

  function renderPagesBtn(arr) {
    return arr
      .map(
        item =>
          `<button class="pagination-btn" type="button" data-num="${item}">${item}</button>`
      )
      .join('');
  }
  listBtn.insertAdjacentHTML('beforeend', renderPagesBtn(pagesArr));

  
  listBtn.addEventListener('click', e => {
    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    //отображение активного номера проекта
    [...listBtn.children].forEach(item => {
      if(item.classList.contains('active')){
        item.classList.remove('active')
      } 
    })
    e.target.classList.add('active');
    //

    librariesList.forEach(element => {
      if (Number(element.children.length) > 0) {
        element.classList.remove('open');
      }
    });
    page = Number(e.target.dataset.num);
    showItem(page);
  });
};
