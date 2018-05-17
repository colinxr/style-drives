var cityData = require('./cityData.js');
var VueGoogleMaps = require('vue2-google-maps');

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyDj58pJufBNZWLoxIo9EVBpt1MHi1Y3GdA',
		libraries: 'places',
	},
	// installComponents: false,
});

$(document).ready(function() {
	// Vue.component('google-map', VueGoogleMaps.map);

	Vue.component('city-guide', {
		data: function () {
	    return {
				center: {},
				infoContent: '',
        infoWindowPos: null,
        infoWinOpen: false,
        currentMidx: null,
        //optional: offset infowindow so it visually sits nicely on top of our marker
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },
				markers: [],
	    }
	  },
		props: {
			active: String,
			guide: Object,
		},
		template: '#city-guide',
		mounted: function () {
		},
		updated: function() {
			this.$parent.initMap();
		},
	});

	Vue.component('nav-list-item', {
		props: {
			city: String,
		},
		template: '#nav-list-item',
	});

	var vm = new Vue({
		el: '#app',
		data: {
			cityData: cityData,
			cities: [],
			active: '',
			guide: {},
			visible: false,
		},
		methods: {
			setActive: function(e) {
				this.active = e.target.textContent;
				this.visible = true;
				this.guide = this.cityData[this.active];

				$.fn.fullpage.setAutoScrolling(false);
				document.body.classList.add('stop-scroll');
				console.log('stop scorlling');
			},

			clearActive: function() {
				this.active = '',
				this.visible = false;
				this.guide = {};
				document.body.classList.remove('stop-scroll');
				$.fn.fullpage.setAutoScrolling(true);
				console.log('clearing modal');
			},

			extractCities: function(cityData) {
				this.cities = Object.keys(cityData);
			},

			initMap: function() {

			},
		},
		mounted: function() {
			this.extractCities(cityData);
		}
	});
});