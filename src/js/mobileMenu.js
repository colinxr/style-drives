document.addEventListener('DOMContentLoaded', function() {
	var scrollTimeout;
	var resizeTimeout;
	var navBar = document.querySelector('nav.main');
	var mobileNav = document.querySelector('nav.mobile');
	var navList = document.querySelector('.nav__list');
	var menuBtn = document.querySelector('.menu');
	var menuBtnText = document.querySelector('.menu span');

	window.addEventListener('scroll', function() {
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		console.log('wtf');
		console.log(scrollTop);
		if (scrollTop > 100 && fullPageScroll === false) {
			console.log('wtffffff');
			navBar.classList.add('visible');
		}
	});

	window.addEventListener('resize', function() {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			resizeNav();
		}, 250);
	});

	menuBtn.addEventListener('click', function(e) {
		e.currentTarget.classList.toggle('open');
		mobileNav.classList.toggle('active');

		setMenuBtnText(e.currentTarget);
		resizeNav();
	});

	function setMenuBtnText(el) {
		var open = el.classList.contains('open');

		menuBtnText.textContent = (open === true) ? 'Close City Guides' : 'Open City Guides';
	}

	function resizeNav() {
		var vpWidth = window.outerWidth;

		if (vpWidth < 768) menuBtn.style.display = 'block';

		if (vpWidth > 768) {
			if (mobileNav.classList.contains('active')) menuBtn.style.display = 'block';
			if (!mobileNav.classList.contains('active')) menuBtn.style.display = 'none';
		}
	}

});
