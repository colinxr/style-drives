$(document).ready(function() {
	var hoverDot = $('.hover-dot');
	var closeBtn = $('.tooltip__close');

	hoverDot.on('click', function() {
		var id = $(this).attr('id');
		console.log(id);
		$(this).children('.tooltip')
			.attr('data-parent', id)
			.appendTo($(this).parent())
			.addClass('active');

		$(this).addClass('paused');
	});

	closeBtn.on('click', function() {
		var parentDot = '#'+ $(this).parent('.tooltip').data('parent');
		$(parentDot).removeClass('paused');

		$(this).parent('.tooltip')
			.removeClass('active')
			.appendTo(parentDot);
	});


});
