$(document).ready(function() {

	$('#loading ').remove();

	var hero = $('.hero__img');
	var heroImg = new Image();
	heroImg.src = hero.data('img');
	heroImg.onload = function() {
		hero.addClass('bgLoaded');
		var bgCss = 'url(' + heroImg.src + ')';
		hero.removeAttr('data-img');
		hero.css('background-image', bgCss);
		hero.children().remove();
	}

	$('#fullpage').fullpage({
		navigation: true,
		scrollingSpeed: 600,
		scrollBar: true,
		autoScrolling: true,
		easing: 'easeInOutCubic',
		responsiveWidth: '620',
		// normalScrollElements: '.hero',

		onLeave: function(index, nextIndex, direction) {
			var leavingSection = $(this);
			var navBar = $('nav');

			if (index == 1 && direction == 'down') {
				navBar.addClass('visible');
			}

			if (index == 2 && direction == 'up') {
				navBar.removeClass('visible');
			}

		},
	});
});
