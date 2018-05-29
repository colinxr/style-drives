$(document).ready(function() {
	var scrollTimeout;
	var navBar = $('nav');
	var mobileNav = $('nav.mobile');
	var navList = $('.nav__list');
	var menuBtn = $('.menu');

	$(window).scroll(function(e) {
		if ($(document).scrollTop() > 100 && fullPageScroll === false) {
			navBar.addClass('visible');
		}
	});

	menuBtn.on('click', function() {
		console.log('check');
		$(this).toggleClass('open');
		mobileNav.toggleClass('active');

		setMenuBtnText($(this));
	});

	function setMenuBtnText(el) {
		if (el.hasClass('open')) {
			el.children().text('Close City Guides');
		} else {
			el.children().text('Open City Guides');
		}
	}
});
