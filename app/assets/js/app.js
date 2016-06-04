var app = (function($) {

	var init = function() {

    // Create r, g, b values
    var createColor = function() {

      var setNumber =  function() {
        return Math.round(Math.random() * (255 - 0));
      }

      return {
        r: setNumber(),
        g: setNumber(),
        b: setNumber()
      }
    }

    // Convert rgb value to hex
    var rgbToHex = function(r, g, b) {

      var componentToHex = function(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }

      return componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    // Set color for each box
    var setColor = function() {

      $('.box').each(function(){
        var r = createColor().r,
            g = createColor().g,
            b = createColor().b;

        var setRgb          = 'rgb(' + r + ',' + g + ',' + b + ')',
            setHex          = '#' + rgbToHex(r, g, b),
            backgroundColor = setRgb;

        if (!$(this).hasClass('locked')) {

          // Create hex and rgb value labels
					$(this).find('.rgb').text(setRgb);
          $(this).find('.hex').text(setHex);
          
          // Set bg color
          $(this).find('.color').css('background-color', backgroundColor);

        }
      });

    } // end setColor();

    setColor();

    // Refreshes unlocked colors on click
    $('.refresh').on('click', function(e) {
      e.preventDefault();
      setColor();
    })

		// Locks current color on refresh
    $('.lock').on('click', function(e) {

      e.preventDefault();
      $(this).parent().toggleClass('locked');

      // Change text for locked/unlocked
      if( $(this).parent().hasClass('locked')) {
        $(this).text('Unlock');
      } else {
        $(this).text('Lock');
      }

    });


  } // end init



return {
  init: init
}



}(jQuery));

$(function() {
  app.init();
});
