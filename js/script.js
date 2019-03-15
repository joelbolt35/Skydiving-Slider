$(document).ready(() => {
  // Set Options
  var speed = 500;            // Fade speed
  var autoswitch;             // Auto slider options
  var autoswitch_speed = 10000; // Auto slider speed

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

  //start autoswitch
  start_autoswitch();


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

    //reset timer on autoswitch
    clearInterval(autoswitch);
    start_autoswitch();
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

    //reset timer on autoswitch
    clearInterval(autoswitch);
    start_autoswitch();
  }

  // Auto Slider Handler
  function start_autoswitch(){
    autoswitch = setInterval(() => nextSlide(), autoswitch_speed);
  }
  // End of JS Ready
});
