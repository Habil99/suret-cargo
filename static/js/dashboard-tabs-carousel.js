const dashboardCarousel = document.getElementsByClassName("g-tab__carousel")[0],
  slides = dashboardCarousel.getElementsByClassName("swiper-slide");

new Swiper(dashboardCarousel, {
  speed: 800,
  breakpoints: {
    1024: {
      slidesPerView: slides.length > 2 ? 'auto' : 2,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: slides.length > 2 ? 'auto' : 2,
      spaceBetween: 50,
    },
    0: {
      slidesPerView: slides.length > 2 ? 'auto' : 2,
      spaceBetween: 30,
    }
  }
})