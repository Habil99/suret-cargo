const dashboardCarousel = document.getElementsByClassName("g-tab__carousel")[0];

new Swiper(dashboardCarousel, {
  speed: 800,
  breakpoints: {
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 25,
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