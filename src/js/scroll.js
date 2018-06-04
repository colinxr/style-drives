var fullPageScroll = false;

$(document).ready(function() {
	if ($(window).width() > 768) {
		initFullPage();
	}

	$(window).resize(function() {
		if ($(window).width() <= 768 ) {
			if (fullPageScroll) {
				fullPageScroll = false;
				$.fn.fullpage.destroy('all');
			}
	  } else {
			// turn on full page functionality
			initFullPage();

			// if modal is open, keep scrolling disabled
			if ($('.modal').length) $.fn.fullpage.setAutoScrolling(false);
		}
	});

	function initFullPage() {
		if (fullPageScroll === false) {
			fullPageScroll = true;

			console.log('initializing full page');

			$('#fullpage').fullpage({
				autoScrolling: true,
				navigation: true,
				scrollingSpeed: 600,
				scrollBar: true,

				onLeave: function(index, nextIndex, direction) {
					var leavingSection = $(this);
					var navBar = $('nav');

					if (index == 2 && direction == 'down') {
						navBar.addClass('visible');
					}

					if (index == 3 && direction == 'up' || nextIndex == 2) {
						navBar.removeClass('visible');
					}

				},
			});
		}
	}
});
