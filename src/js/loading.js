document.addEventListener('DOMContentLoaded', function() {
	var loading 		= document.getElementById('loading');
	var hero 				= document.querySelector('.hero__img');
	var placeholder = document.querySelector('.hero__img__placeholder')
	var imgSource 	= hero.getAttribute('data-img');
	var heroImg 		= new Image();

	document.getElementById('app').removeChild(loading);
	heroImg.setAttribute('src', imgSource);

	heroImg.onload = function() {
		var bgCss = 'url(' + heroImg.src + ')';
		hero.classList.add('bgLoaded');
		hero.removeAttribute('data-img');
		hero.style.backgroundImage = bgCss;
		hero.removeChild(placeholder);
	}
});
