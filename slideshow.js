var slideIndex = 1;
showSlides(slideIndex);

// currentSlide()
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// ~currentSlide()

// next|previous control
function plusSlides(n){
  showSlides(slideIndex +=n);
}
// next|previous control
function showSlides(n){
  var slides = document.querySelectorAll('.mySlides');
  var dots = document.querySelectorAll('.dot');
  if(n > slides.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = slides.length;
  }
  slides.forEach(function(slide, index){
    slide.style.display = "none";
    slides[slideIndex-1].style.display = 'block';
  });

  dots.forEach(function(dot, index){
    dot.className = dot.className.replace("active", "");
  });
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}
