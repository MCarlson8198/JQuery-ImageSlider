$(document).ready(function() {


var width = 720;
var animationSpeed = 1000;
var pause = 3000;
var currentSlide = 1;

var $slider = $('.slider');
var $slideContainer = $slider.find('.slides');
var $slides = $slideContainer.find('.slide');

var interval;

function startSlider(){
  interval = setInterval (function(){
    $('.slider .slides').animate({'margin-left': '-=' + width}, animationSpeed, function() {
      currentSlide++;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
  }, pause);
}
$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

function pauseSlider(){
clearInterval(interval);
}

startSlider();
});
