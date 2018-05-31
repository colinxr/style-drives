document.addEventListener('DOMContentLoaded', function() {
	var sections  = document.querySelectorAll('.section');
	var hoverDot = document.querySelector('.hover-dot');
	var closeBtn = document.querySelector('.tool-top__close');

	Object.keys(sections)
		.map(function(i) {
			sections[i].addEventListener('click', toggleToolTip)
		});

	function toggleToolTip(e) {
		var _this 	= e.target;

		if (_this.classList.contains('hover-dot')) {
			var id 			= _this.getAttribute('id');
			var toolTip = _this.childNodes[0];

			toolTip.setAttribute('data-parent', id);
			toolTip.classList.add('active');

			_this.parentNode.appendChild(toolTip);
			_this.classList.add('paused');
		}

		if (_this.classList.contains('tooltip__close')) {
			var toolTip 	= _this.parentNode;
			var id 				= toolTip.getAttribute('data-parent');
			var parentDot = document.getElementById(id);

			toolTip.classList.remove('active');
			parentDot.classList.remove('paused');
			parentDot.appendChild(toolTip);
		}
	}
});
