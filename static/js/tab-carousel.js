const tabSwiper = document.querySelector(".g-tab-swiper");

const tabCarousel = new Swiper(tabSwiper, {
  speed: 2000,
  breakpoints: {
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 85,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 50,
    },
    0: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    }
  }
})