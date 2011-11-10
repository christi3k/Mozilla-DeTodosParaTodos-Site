/* Author: Antonio Rodriguez, Waldemar Figueroa Medina @ Nobox Marketing Group */

$(document).ready(function () {
	  // Main CTA button action
		$('.main_cta').on('mousedown', function () {
			$('#lightsOut').fadeIn(); // Fade page
	    $('#mission').fadeOut(); // If #mission div is visible, hide it.
			$('#sharebox').fadeIn(); // Show #sharebox
		});

	  // Close lightbox events.
		$('.close, #lightsOut').on('mousedown', function () {
			$('.lightbox').fadeOut();
			$('#lightsOut').fadeOut();
		});

	  // Put .hover class on several elements on hover event.
	  $('#share_the_word li').on('hover', function () {
	    $(this).toggleClass('hover');
	    $(this).find('.button').toggleClass('hover');
	  });
	
	  // Toggle upper and lower sections of lightbox.
	  $('#togglebar').on('mousedown', function () {
	    $(this).toggleClass('open');
	    $('#share_the_word, #banners').slideToggle('fast');
	  });
	
	  // Show #mission lightbox on #mission_btn click.
	  $('#mission_btn').on('mousedown', function () {
	    $('#mission').fadeIn();
			$('#lightsOut').fadeIn();
	  });

		// Change country custom select menu.
	  $('#country .selected').on('mousedown', function () {
	    $(this).parent('ul').toggleClass('dropped');
	  });	
});

	























