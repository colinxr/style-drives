$(document).ready(function() {
	var scrollTimeout;
	var navBar = $('nav.main');
	var mobileNav = $('nav.mobile');
	var navList = $('.nav__list');
	var menuBtn = $('.menu');

	var resizeTimeout;

	$(window).scroll(function(e) {
		if ($(document).scrollTop() > 100 && fullPageScroll === false) {
			navBar.addClass('visible');
		}
	});

	$(window).resize(function(e) {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			resizeNav();
		}, 250);
	});

	menuBtn.on('click', function() {

		$(this).toggleClass('open');
		mobileNav.toggleClass('active');

		setMenuBtnText($(this));
		resizeNav();
	});

	function setMenuBtnText(el) {
		if (el.hasClass('open')) {
			el.children().text('Close City Guides');
		} else {
			el.children().text('Open City Guides');
		}
	}

	function resizeNav() {
		var vpWidth = $(window).width();

		if (vpWidth > 800 && mobileNav.hasClass('active')) {
			menuBtn.css('display', 'block');
		}

		if (vpWidth > 800 && !mobileNav.hasClass('active')) {
			menuBtn.css('display', 'none');
		}

	}
});
