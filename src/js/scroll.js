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
			initFullPage();
		}
	});

	function initFullPage() {
		if (fullPageScroll === false) {
			fullPageScroll = true;

			console.log('initializing full page');

			$('#fullpage').fullpage({
				navigation: true,
				scrollingSpeed: 600,
				scrollBar: true,
				autoScrolling: true,
				easing: 'easeInOutCubic',

				onLeave: function(index, nextIndex, direction) {
					var leavingSection = $(this);
					var navBar = $('nav');

					if (index == 1 && direction == 'down') {
						navBar.addClass('visible');
					}

					if (index == 2 && direction == 'up' || nextIndex == 1) {
						navBar.removeClass('visible');
					}

				},
			});
		}
	}
});
