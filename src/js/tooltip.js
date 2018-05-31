document.addEventListener('DOMContentLoaded', function() {
	var sections  = document.querySelectorAll('.section');
	var hoverDot = document.querySelector('.hover-dot');
	var closeBtn = document.querySelector('.tool-top__close');
	var limitToolTip = (window.outerWidth < 768 ? true : false);
	var resizeTimeout;

	window.addEventListener('resize', function(e) {
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			limitToolTip = (window.outerWidth < 768 ? true : false);
		});
	});

	Object.keys(sections)
		.map(function(i) {
			sections[i].addEventListener('click', handleClick)
		});

	function handleClick(e) {
		var _this = e.target;

		if (_this.classList.contains('hover-dot')) {
			if (!limitToolTip) {
				openToolTip(_this);
			} else {
				if (document.getElementsByClassName('tooltip active').length) closeToolTip(_this);
				openToolTip(_this);
			}
		}

		if (_this.classList.contains('tooltip__close')) closeToolTip(_this);
	}

	function openToolTip(el) {
		var id = el.getAttribute('id');
		var toolTip = el.childNodes[0];

		toolTip.setAttribute('data-parent', id);
		toolTip.classList.add('active');

		el.parentNode.appendChild(toolTip);
		el.classList.add('paused');
	}

	function closeToolTip(el) {
		var toolTip 	= (el.classList.contains('tooltip__close')) ? el.parentNode : document.querySelector('.tooltip.active');
		var id 				= toolTip.getAttribute('data-parent');
		var parentDot = document.getElementById(id);

		toolTip.classList.remove('active');
		parentDot.classList.remove('paused');
		parentDot.appendChild(toolTip);
	}
});
