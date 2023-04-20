// SWIPER

var swiper = new Swiper('.shelters-cards', {
  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {
    1200: {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        enabled: false,
      },
    },

    992: {
      slidesPerView: 3,
    },

    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    560: {
      centeredSlides: false,
    },

    320: {
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: true,
      centeredSlidesBounds: true,
    },
  },

  speed: 3000,
  // loop: true,
  autoplay: {
    delay: 6000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// BURGER MENU

const iconMenu = document.querySelector('.header__menu-icon');
const burger = document.querySelector('.burger');
const logo = document.querySelector('.header__logo');
const mainBlock = document.querySelector('.main-block');
const mobileLinks = document.querySelectorAll('.menu-mobile__link');

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    iconMenu.classList.toggle('_active');
    burger.classList.toggle('_active');
    logo.classList.toggle('_hidden');
    mainBlock.classList.toggle('_hidden');
    document.body.classList.toggle('_locked');
  });
};

mobileLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', onMenuLinkClick);
});

function onMenuLinkClick(e) {
  if (iconMenu.classList.contains('_active')) {
    iconMenu.classList.remove('_active');
    burger.classList.remove('_active');
    logo.classList.remove('_hidden');
    mainBlock.classList.remove('_hidden');
    document.body.classList.toggle('_locked');
  }
};
