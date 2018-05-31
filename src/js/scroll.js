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


// document.addEventListener('DOMContentLoaded', function() {
// 	if (window.outerWidth > 768) initFullPage();
//
// 	window.addEventListener('resize', function() {
// 		var modal = document.querySelector('.modal')
// 		if (window.outerWidth <= 768) {
// 			console.log(fullPageScroll);
//
// 			if (fullPageScroll) {
// 				fullPageScroll = false;
// 				fullpage.destroy('all');
// 			}
// 		} else {
// 			initFullPage();
//
// 			if (modal.length) fullpage.setAutoScrolling(false);
// 		}
// 	})
//
// 	function initFullPage() {
// 		if (fullPageScroll === false) {
// 			fullPageScroll = true;
//
// 			console.log('initializing full page');
//
// 			fullpage.initialize('#fullpage', {
// 				navigation: true,
// 				scrollingSpeed: 600,
// 				scrollBar: true,
// 				autoScrolling: true,
// 				easing: 'easeInOutCubic',
// 				sectionSelector: '.section',
//
// 				onLeave: function(index, nextIndex, direction) {
// 					var navBar = document.querySelector('nav');
//
// 					if (index == 1 && direction == 'down') {
// 						navBar.classList.add('visible');
// 					}
//
// 					if (index == 2 && direction == 'up' || nextIndex == 1) {
// 						navBar.classList.remove('visible');
// 					}
// 				},
// 			})
//
// 		}
// 	}
// });
