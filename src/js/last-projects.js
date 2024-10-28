import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

export function lastProjects(projectArr, lastProjectsEl) {
  function setSimpleWebSidesMarkup(projectArrInner) {
    const arrInner = [];
    for (let i = projectArrInner.length - 1; i >= 0; i--) {
      arrInner.push(projectArrInner[i]);
    }
    const maxIdx = arrInner.length;
    return arrInner
      .map(
        ({
          name,
          id,
          status,
          imgPreview,
          codeLink,
          siteLink,
          technology1,
          technology2,
        }) => {
          if (status && id > maxIdx - 10) {
            return `
			<li class="swiper-slide" id="${id}">
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
        <p class="technology">${technology1}</p>
        <p class="technology">${technology2}</p>
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
  }
  lastProjectsEl.insertAdjacentHTML(
    'beforeend',
    setSimpleWebSidesMarkup(projectArr)
  );
}

export function lastProjectsSlider() {
  return new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      type: 'bullets',
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    hashNavigation: {
      watchState: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    autoHeight: false,
    slidesPerView: 1,
    watchOverflow: true,
    spaceBetween: 20,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
    freeMode: false,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    speed: 400,
    direction: 'horizontal',
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0, //угол
      stretch: 80, //наложение
      slideShadows: true, //тень
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  });
}
