const shopsSwiper = document.getElementsByClassName("shops-section__swiper")[0],
  shops_prev = document.getElementById("shops-prev"),
  shops_next = document.getElementById("shops-next"),
  shopSlides = shopsSwiper?.querySelectorAll(".swiper-slide"),
  shopsSwiper_2 = document?.getElementsByClassName("shops-carousel__main")[0],
  shopsSlides_2 = shopsSwiper_2?.querySelectorAll('.swiper-slide');

const hasManySlides = slides => {
  if (slides.length > 1) {
    return true
  } else {
    return false
  }
};

const shopsCarousel = shopsSwiper && new Swiper(shopsSwiper, {
  speed: 1200,
  // loop: hasManySlides(shopSlides),
  navigation: {
    prevEl: shops_prev,
    nextEl: shops_next,
  },
  autoplay: hasManySlides(shopSlides) ? {
    delay: 2000
  } : false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    1100: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    728: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
})

const shopsMain = shopsSwiper_2 && new Swiper(shopsSwiper_2, {
  speed: 2000,
  loop: hasManySlides(shopsSlides_2) ? true : false,
  autoplay: hasManySlides(shopsSlides_2) ? {
    delay: 2000
  } : false,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    1100: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    728: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
})