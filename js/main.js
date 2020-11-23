document.addEventListener('keydown', function(e) {
    if (e.keyCode===37 ) {
           console.log('влево');
    }
});
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  
  loop: true,



  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  keyboard: {
    enabled: true,
  },

})