	
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})

$(function(){

  $('.nav-link').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 2000);
  });

});