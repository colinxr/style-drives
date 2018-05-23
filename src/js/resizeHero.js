$(document).ready(function() {
	var heroContent = $('.hero__content');
	var resizeTimeout;

	resizeHero();

	$(window).resize(function(e) {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			resizeHero();
		}, 250);
	});


	function resizeHero(){
		var contentHeight = heroContent.height();
		var vpHeight = $(window).height();

		console.log(contentHeight);
		console.log(vpHeight);

		if (contentHeight > vpHeight &&
		!heroContent.hasClass('smaller')) {
			heroContent.addClass('smaller');
		} else if (contentHeight < vpHeight &&
		heroContent.hasClass('smaller')) {
			heroContent.removeClass('smaller');
		}
	}
});
