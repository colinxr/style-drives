$(document).ready(function() {
	var section =('.section');
	var hoverDot = '.hover-dot';
	var closeBtn = '.tooltip__close';

	$(section).on('click', hoverDot, function() {
		var id = $(this).attr('id');
		$(this).children('.tooltip')
			.attr('data-parent', id)
			.appendTo($(this).parent())
			.addClass('active');

		$(this).addClass('paused');
	});

	$(section).on('click', closeBtn, function() {
		var parentDot = '#'+ $(this).parent('.tooltip').data('parent');
		$(parentDot).removeClass('paused');

		$(this).parent('.tooltip')
			.removeClass('active')
			.appendTo(parentDot);
	});
});
