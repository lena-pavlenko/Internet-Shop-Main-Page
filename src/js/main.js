window.onload = function() {

  const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1,
    autoplay: true,
    delay: 3000,
    spaceBetween: 10,
    pagination: {
      el: '.main-slider__slider-pag',
    },
  });

  const catalogSlider = new Swiper('.catalog-slider', {
    slidesPerView: 3,
    spaceBetween: 80,
    navigation: {
      nextEl: '.catalog-slider__slider-btn--next',
      prevEl: '.catalog-slider__slider-btn--prev',
    },
  });
}
