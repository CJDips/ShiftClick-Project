let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// autoplay & play/pause button 
let slideInterval = setInterval(function(){ 
  plusSlides(1)
}, 4000);
let playing = true;
let pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = 'Play';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = 'Pause';
	playing = true;
	slideInterval = setInterval(function(){
    plusSlides(1)},4000);
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};