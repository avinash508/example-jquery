'use strict';

(function($) {
  
  $.fn.truncate = function(options) {
    var opts = $.extend({
      words: 3
    }, options);


    return this.each(function() {
      var $this = $(this);
      var $text = $this.text();
      var $truncatedText = $text.split(' ').slice(0, opts.words).join(' ') + '...';

      $this.text($truncatedText);
    });
  };

})(jQuery);
