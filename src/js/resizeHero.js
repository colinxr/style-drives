document.addEventListener('DOMContentLoaded', function() {
	var heroContent = document.querySelector('.hero__content');
	var resizeTimeout;

	resizeHero();

	window.addEventListener('resize', function(e) {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			resizeHero();
		});
	});

	function resizeHero() {
		var contentHeight = heroContent.innerHeight
		|| heroContent.clientHeight
		|| heroContent.clientHeight;

		var vpHeight = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

		if (contentHeight > vpHeight &&
		!heroContent.classList.contains('smaller')) {
			heroContent.classList.add('smaller');
		} else if (contentHeight < vpHeight &&
		heroContent.classList.contains('smaller')) {
			heroContent.classList.remove('smaller');
		}
	}
});
