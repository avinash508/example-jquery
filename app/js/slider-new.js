(function($) {

  var Slider = (function() {
      
    function _Slider(el, opts) {
      this.$el = el;
      this.$options = $.extend({
        name: 'MySlider'
      }, opts);

      this.$container = this.$el.find('.slider-container');
      this.$prev = this.$el.find('.slider-prev');
      this.$next= this.$el.find('.slider-next');
      this.current = 0;
      
      this.init();
    }

    return _Slider;

  })();


  Slider.prototype.init = function() {
    this.build();
    this.bindEvents();
    console.log('Initializing plugin ' + this.$options.name);
  };
  

  Slider.prototype.build = function() {
    var width = this.$el.width();
    var height = this.$el.height();
    var numOfChildren = this.$container.children().length;

    this.$container.css('width', width * numOfChildren);
    this.$container.children().each(function(i, e) {
      $(e).css('width', width);
    });
  };

  Slider.prototype.bindEvents = function() {
    this.$prev.on('click', this.prev.bind(this)); 
    this.$next.on('click', this.next.bind(this)); 
  };

  Slider.prototype._move = function(count, dir) {
    if(dir == 'next') {
      this.current++;
    } else {
      this.current--;
    }

    if (count <=0 || count >= 3) {
      return false;
    }

    this.$container.css({
      marginLeft: - (this.current * 100) + '%'
    });
  };


  Slider.prototype.prev = function(e) {
    e.preventDefault();
    this._move(this.current, this.$prev.data('prev'));
  };


  Slider.prototype.next = function(e) {
    e.preventDefault();
    this._move(this.current, this.$next.data('next'));
  };

  $.fn.sliderNew = function(options) {
    return this.each(function() {
      var element = $(this);
      return new Slider(element, options);
    });
  }


})(jQuery);
