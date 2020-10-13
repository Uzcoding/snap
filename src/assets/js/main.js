	
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})