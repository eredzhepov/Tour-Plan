$(document).ready(function(){
var menuButton = document.querySelector(".menu-button")
menuButton.addEventListener('click', function(){
  console.log("Клик по кнопке меню");
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")
})
var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },

  keyboard: {
    enabled: true,
  },

})
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },


});

var modalButton = $("[data-togle=modal]");
var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);


  function openModal() {
    var  modalOverlay = $(".modal__overlay");
    var  modalDialog = $(".modal__dialog");
    var  modalDialog = $(".modal__dialog");
  
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault()
    var  modalOverlay = $(".modal__overlay");
    var  modalDialog = $(".modal__dialog");
    var  modalDialog = $(".modal__dialog");
  
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
  }

$(document).keydown(function(event) { 
  if (event.keyCode === 27) { 
    closeModal(event);
  }
});
// обработка форм
$(".form").each(function(){
  $(this).validate({
  errorClass: "invalid",
  messages: {
    
    name: {
      required: "Please specify your name",
      minlength: "Name must be more than two characters"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    // email_sub: {
    //   required: "We need your email address to contact you",
    //   email: "Your email address must be in the format of name@domain.com",
    // },
    phone: {
      required: "Enter your phone please!",
      minlength: "Enter the full number"
    },
} 
}); 

})
$(".subscribe__form").validate({
  errorClass: "invalid__sub",
  messages: {
    email_sub: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
  }
}); 

$(".phone").each(function() {
$(this).mask('+7(999) 000-00-00');

});

AOS.init();

});