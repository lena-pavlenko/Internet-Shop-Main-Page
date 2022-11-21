const mainSlider = new Swiper('.main-slider', {
  slidesPerView: 1,
  autoplay: true,
  delay: 3000,
  spaceBetween: 10,
  pagination: {
    el: '.main-slider__slider-pag',
  },
});