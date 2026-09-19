// Keep the small, required styles eager so cards have stable geometry before
// the slider JavaScript arrives. No Swiper JavaScript enters the initial chunk.
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/a11y';

export function lastProjects(projectArr, lastProjectsEl) {
  if (!lastProjectsEl) return;

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
          technology3,
        }) => {
          if (status && id > maxIdx - 10) {
            return `
			<li class="swiper-slide" id="${id}">
      <h3 class="name-info-git">${name}</h3>
		<img
		class="gallery-image"
		src="${imgPreview}"
		alt="${name}"
		loading="lazy"
		decoding="async"
				width="355"
		height="200"
		/>
	<div class="project-item-info">
    <div class="project-item-info-left">
        <p class="technology">${technology1}</p>
        <p class="technology">${technology2}</p>
        <p class="technology">${technology3}</p>
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
  const sliderEl = document.querySelector('.last-projects-block .swiper');
  if (!sliderEl || sliderEl.swiper) return;

  let loading = false;
  let observer;

  const initialize = async () => {
    if (loading || sliderEl.swiper) return;
    loading = true;

    try {
      const { createLastProjectsSlider } = await import('./last-projects-slider.js');
      createLastProjectsSlider(sliderEl);
      observer?.disconnect();
      sliderEl.removeEventListener('focusin', initialize);
      sliderEl.removeEventListener('pointerdown', initialize);
    } catch (error) {
      // Leave the rendered cards intact if the network fails; another visit or
      // interaction can retry loading the optional enhancement.
      loading = false;
      console.error('Unable to load the project slider.', error);
    }
  };

  sliderEl.addEventListener('focusin', initialize);
  sliderEl.addEventListener('pointerdown', initialize, { passive: true });

  if (!('IntersectionObserver' in window)) {
    void initialize();
    return;
  }

  observer = new IntersectionObserver(
    entries => {
      if (entries.some(entry => entry.isIntersecting)) void initialize();
    },
    { rootMargin: '600px 0px' }
  );
  observer.observe(sliderEl);
}
