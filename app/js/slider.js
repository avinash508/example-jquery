'use strict';

(function($) {

  $.fn.slider = function() {
    var $this = $(this);
    var $sliderContainer = $this.find('.slider-container');
    var $sliderItems = $sliderContainer.children();
    var $sliderLength = $sliderItems.length;
    var $sliderWidth = $sliderContainer.width();
    var $sliderHeight = $sliderContainer.height();
    var current = 0;

    var $sliderWrapper = $('<div />').addClass('slider-wrapper');
    var $sliderPrev = $('<a />').attr({
      href: '#'
    }).addClass('slider-prev').text('Prev');

    var $sliderNext = $('<a />').attr({
      href: '#'
    }).addClass('slider-next').text('Next');

    $sliderContainer.css('width', $sliderWidth * $sliderLength);
    $sliderItems.each(function(i, e){
      $(this).css('width', $sliderWidth);
    });

    $this.wrapAll($sliderWrapper).parent().append($sliderPrev).append($sliderNext);

    $sliderNext.on('click', function(e){
      e.preventDefault();
      if (current >= 3) return false;

      current++;
      $sliderContainer.css({
        marginLeft: -(current * 100) + '%'
      });
    });

    $sliderPrev.on('click', function(e) {
      e.preventDefault();
      if (current <=0) return false;

      current--;
      $sliderContainer.css( {
        marginLeft: -(current * 100) + '%'
      });
    });

  }

  return this;

})(jQuery);
