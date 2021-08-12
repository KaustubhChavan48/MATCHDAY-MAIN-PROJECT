/////////////////INDEX//////////////////
$(document).ready(function () {
  $(".nav-icon").click(function () {
    $(".full-nav").addClass("open");
  });
  $(".nav-close").click(function () {
    $(".full-nav").removeClass("open");
  });
  $(window).scroll(function () {
    var sc = $(window).scrollTop();
    if (sc > 100) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });
});
/////////////////SHOPPING///////////////
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
  showSlides(slideIndex += n);
}
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("myslides");
  if(n > slides.length){
    slideIndex=1
  }
  if(n<1){
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}