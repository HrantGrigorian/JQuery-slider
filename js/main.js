$(document).ready(function(){

  let slider = {
    slideShow: false,
    interval: 2000,
    animation: 'slide'
  }

  if(slider.slideShow == true) {
    setInterval(function () {
        moveRight();
    }, slider.interval);
  } else {
    $('.control_next').click(function() {
      let currentImg = $('#slider ul li.active');
      let currentImgIndex = $('#slider ul li.active').index();
      let nextImgIndex = currentImgIndex + 1;
      let nextImg = $('#slider ul li').eq(nextImgIndex);
      currentImg.fadeOut(500);
      currentImg.removeClass('active');

      if(nextImgIndex == ($('#slider ul li:last').index()+1)){
        $('#slider ul li').eq(0).fadeIn(500);
        $('#slider ul li').eq(0).addClass('active');
      } else {
        nextImg.fadeIn(500);
        nextImg.addClass('active');
      }
    });

    $('.control_prev').click(function() {
      let currentImg = $('#slider ul li.active');
      let currentImgIndex = $('#slider ul li.active').index();
      let prevImgIndex = currentImgIndex - 1;
      let prevImg = $('#slider ul li').eq(prevImgIndex);
      currentImg.fadeOut(500);
      currentImg.removeClass('active');
      prevImg.fadeIn(500);
      prevImg.addClass('active');
    });
  }


  function moveRight() {
        $('#slider ul').animate({
            left: - $('#slider ul li').width()
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

});
