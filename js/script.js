$(document).ready(() => {
  // Set Options
  var speed = 500;            // Fade speed
  var autoswitch = true;      // Auto slider options
  var autoswitch_speed = 4000 // Auto slider speed

  // Add initial active class
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show first slide
  $('.active').show();

  // Next Handler
  $('#next').click(() => nextSlide());

  // Prev Handler
  $('#prev').click(() => prevSlide());

  // Auto Slider Handler
  if(autoswitch == true)
    setInterval(() => nextSlide(), autoswitch_speed);



  /*---------Funcitons---------*/
  function nextSlide(){
    var oldActive = $('.active').removeClass('active');
    if(oldActive.is(':last-child')){
      $('.slide').first().addClass('active');
    }else{
      oldActive.next().addClass('active');
    }
    oldActive.fadeOut(speed);
    $('.active').fadeIn(speed);

  }

  function prevSlide(){
    var oldActive = $('.active').removeClass('active');
    if(oldActive.is(':first-child')){
      $('.slide').last().addClass('active');
    }else{
      oldActive.prev().addClass('active');
    }
    oldActive.fadeOut(speed);
    $('.active').fadeIn(speed);
  }

  // End of JS Ready
});
