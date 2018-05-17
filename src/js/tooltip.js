$(document).ready(function() {
	var hoverDot = $('.hover-dot');

	hoverDot.on('click', function() {
		console.log('test');
		$(this).toggleClass('paused');
		$(this).children('.tooltip').toggleClass('active');
	});
});
