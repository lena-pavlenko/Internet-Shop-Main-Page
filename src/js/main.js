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
    navigation: {
      nextEl: '.catalog-slider__slider-btn--next',
      prevEl: '.catalog-slider__slider-btn--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 80,
      },
    }
  });

  const recentSlider = new Swiper('.recent-slider', {
    slidesPerView: 4,
    spaceBetween: 7,
    navigation: {
      nextEl: '.recent__slider-btn--next',
      prevEl: '.recent__slider-btn--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    }
  });

  const partnerSlider = new Swiper('.partner-slider', {
    slidesPerView: 'auto',
  });

  if (screen.width < 1199) {
    const singleGoodsSlider = new Swiper('.single-goods-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.single-goods__slider-pag',
        },
    });
  }
  
  const langSwitch = () => {
    const container = document.querySelector('.lang-block');
    const dropMenu = container.querySelector('.lang-block__drop');
    const items = container.querySelectorAll('.lang-block__drop-item');

    container.addEventListener('click', e => {
        dropMenu.classList.toggle('open');
        if (e.target.closest('.lang-block__drop-item')) {
            const current = e.target.closest('.lang-block__drop-item');
            items.forEach(item => {
                if (item == current) {
                    item.classList.add('active');
                    const value = item.querySelector('input').value;
                    dropMenu.previousElementSibling.innerHTML = value;
                } else {
                    item.classList.remove('active')
                }
            })
        }
    });
  }

  langSwitch();
}
