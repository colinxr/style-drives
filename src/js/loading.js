$(document).ready(function() {
	var hero = $('.hero__img');

	$('#loading ').remove();

	var heroImg = new Image();
	heroImg.src = hero.data('img');

	heroImg.onload = function() {
		var bgCss = 'url(' + heroImg.src + ')';
		hero.addClass('bgLoaded');
		hero.removeAttr('data-img');
		hero.css('background-image', bgCss);
		hero.children().remove();
	}
});
