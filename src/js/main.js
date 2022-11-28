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

  const recentSlider = new Swiper('.recent-slider', {
    slidesPerView: 4,
    spaceBetween: 7,
    navigation: {
      nextEl: '.recent__slider-btn--next',
      prevEl: '.recent__slider-btn--prev',
    },
  });

  const partnerSlider = new Swiper('.partner-slider', {
    slidesPerView: 'auto',
  });

  if (screen.width < 576) {
    const singleGoodsSlider = new Swiper('.single-goods-slider', {
        slidesPerView: 1,
        pagination: {
            el: '.single-goods__slider-pag',
        },
    });
  }
  
}
