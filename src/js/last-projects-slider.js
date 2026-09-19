import Swiper from 'swiper';
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Navigation,
  Pagination,
} from 'swiper/modules';

export function createLastProjectsSlider(element) {
  if (element.swiper) return element.swiper;

  return new Swiper(element, {
    modules: [A11y, Autoplay, EffectCoverflow, Keyboard, Navigation, Pagination],
    navigation: {
      nextEl: element.querySelector('.swiper-button-next'),
      prevEl: element.querySelector('.swiper-button-prev'),
    },
    pagination: {
      type: 'bullets',
      el: element.querySelector('.swiper-pagination'),
      clickable: true,
      dynamicBullets: true,
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    // Slides have no data-hash/data-history, so do not let Swiper rewrite the
    // page's section anchors when a slide changes.
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
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    speed: 400,
    direction: 'horizontal',
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      slideShadows: true,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1280: { slidesPerView: 3 },
    },
  });
}
