window.onload = function() {

  // Баннер
  const mainSlider = new Swiper('.main-slider', {
    slidesPerView: 1,
    autoplay: true,
    delay: 3000,
    spaceBetween: 10,
    pagination: {
      el: '.main-slider__slider-pag',
    },
  });

  // Каталог
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

  // Недавние товары
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

  // Партнеры
  const partnerSlider = new Swiper('.partner-slider', {
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      576: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      992: {
        spaceBetween: 80,
      }
    }
  });

  if (screen.width < 1199) {
    const singleGoodsSlider = new Swiper('.single-goods-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.single-goods__slider-pag',
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 3,
          },
        }
    });
  }
  
  // Переключение языков
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

  // Мобильное меню
  const mobMenu = () => {
    const container = document.querySelector('.header__content');

    if (container) {
      const menu = container.querySelector('.header__nav');

      container.addEventListener('click', (e) => {
        if (e.target.closest('.mob-burger')) {
          menu.classList.add('open');
        }
        if (e.target.closest('.menu-close')) {
          menu.classList.remove('open');
        }
      })
    }
  }

  // Открытие попапа
  const openPopup = () => {
    const btn = document.querySelector('.btn--popup');
    const popup = document.querySelector('.popup');

    if (popup) {
      btn.addEventListener('click', e => {
        popup.classList.add('open');
      })

      popup.addEventListener('click', e => {
        if (e.target.closest('.popup__close') || !e.target.closest('.popup__container')) {
          popup.classList.remove('open');
        }
      })
    }
  }

  // Плавный скролл
const scrollSmooth = (anchor) => {
  let dist = document.documentElement.scrollTop + anchor.getBoundingClientRect().top;

  window.scrollTo({
      top: dist,
      behavior: "smooth"
  })
}

const buttonUp = () => {
  const btn = document.querySelector('.btn-up');
  const toMain = document.querySelector('main');

  btn.addEventListener('click', () => {
    scrollSmooth(toMain);
  })

  // Скрытие и появление кнопки при скролле
  window.addEventListener('scroll', function() {
        
    if (window.pageYOffset > 300) {
    btn.classList.add('visible');
    } else {
    btn.classList.remove('visible');
    }
  });
}

// Фиксация шапки при скролле
ScrollTrigger.create({
  start: 'top 0',
  end: 99999,
  toggleClass: {className: 'header--fix', targets: '.header'}
});

// Анимации
if (screen.width > 1199){
  gsap.to('.catalog__h2', {
    duration: 1,
    x: '0px',
    scrollTrigger: {
      trigger: '.catalog',
      start: '-=300 ',
      end: 'top',
      scrub: 1,
      once: true,
    },
  });
  gsap.to('.history__h2', {
    duration: 1,
    x: '0px',
    scrollTrigger: {
      trigger: '.history',
      start: '-=400',
      end: '-=400',
      scrub: 1,
      once: true,
    },
  });
  gsap.to('.partners__h2', {
    duration: 1,
    x: '0px',
    scrollTrigger: {
      trigger: '.partners',
      start: '-=400',
      end: '-=400',
      scrub: 1,
      once: true,
    },
  });
  gsap.to('.recent__h2', {
    duration: 1,
    x: '0px',
    scrollTrigger: {
      trigger: '.recent',
      start: '-=400',
      end: '-=400',
      scrub: 1,
      once: true,
    },
  });
  
  gsap.from('.pluses', {
    scale: 0,
    ease: 'none',
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.form-section',
      start: '-=500',
      end: '+=400',
      scrub: 1,
      once: true,
    },
  });
}

  langSwitch();
  mobMenu();
  openPopup();
  buttonUp();
}
