export const SWIPER_DEFAULT_CONFIG = Object.freeze({
  loop: true,
  customNavigation: true,
  grabCursor: true,
  pagination: { clickable: true },
  breakpoints: {
    300: {
      slidesPerView: 1.1,
      spaceBetween: 8,
      freeMode: true,
    },
    568: {
      slidesPerView: 2.1,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3.5,
      spaceBetween: 8,
    },
    992: {
      slidesPerView: 3.5,
      spaceBetween: 16,
    },
  },
  autoplay: {
    delay: 5000,
  },
})

export const SWIPER_CREATIVE_CONFIG = Object.freeze({
  effect: 'creative',
  grabCursor: true,
  centeredSlides: true,
  breakpoints: {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4.1,
      spaceBetween: 16,
    },
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: { clickable: true },
  customNavigation: true,
  creativeEffect: {
    limitProgress: 5,
    perspective: 1400,
    prev: {
      translate: ['-110%', 0, -300],
      opacity: 0.7,
      scale: 0.9,
    },
    next: {
      translate: ['110%', 0, -300],
      opacity: 0.7,
      scale: 0.9,
    },
  },
})
