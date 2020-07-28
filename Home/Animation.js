
var slideIndex = 0;


function nextSlide() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("circle");
  // go to next one by making background looks white
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  // change ciricl background
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" circleChColor", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " circleChColor";
  setTimeout(nextSlide, 2500);
}



nextSlide();
