var slide_index = 1;

function nav_slides(context, n) {
  show_slides(context, slide_index += n);
}

function goto_slide(context, n) {
  show_slides(context, slide_index = n);
}

function show_slides(id, n) {
  var i;
  var slides = document.getElementById(id).getElementsByClassName("slide");
  var dots = document.getElementById(id).getElementsByClassName("dot");

  if(n > slides.length) {
    slide_index = 1;
  }

  if(n < 1) {
    slide_index = slides.length;
  }

  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slide_index-1].style.display = "block";
  dots[slide_index-1].className += " active";
}
