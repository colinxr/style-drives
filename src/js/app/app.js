import 'babel-polyfill';
import cityData from './cityData.js';
import * as VueGoogleMaps from 'vue2-google-maps'
import vClickOutside from 'v-click-outside';

Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyDj58pJufBNZWLoxIo9EVBpt1MHi1Y3GdA',
		libraries: 'places',
	},
});

Vue.use(vClickOutside);

$(document).ready(function() {
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
		created() {
		  document.addEventListener('resize', this.windowResize);
		},
		destroyed() {
		  document.removeEventListener('resize', this.windowResize);
		},
		
		methods: {
			closeButton: function() {
				this.clearInfoWindow();
				this.$parent.clearActive();
			},

			onClickOutside: function(e) {
				if (!e.target.classList.contains('nav-list-item__link')) {
					this.clearInfoWindow();
					this.$parent.clearActive();
				}
			},

			clearInfoWindow: function() {
				this.infoContent = '';
        this.infoWindowPos = null;
        this.infoWinOpen =  false;
        this.currentMidx = null;
			},

			toggleInfoWindow: function(marker, idx) {
				this.infoWindowPos = marker.position;
			 	this.infoContent = marker.infoText;

				//check if its the same marker that was selected if yes toggle
				if (this.currentMidx == idx) {
					this.infoWinOpen = !this.infoWinOpen;
				}
			 	//if different marker set infowindow to open and reset current marker index
			 	else {
					this.infoWinOpen = true;
					this.currentMidx = idx;
			 	}
			},

			windowResize: function() {
				console.log('window resized');
			}
		}
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
			extractCities: function(cityData) {
				this.cities = Object.keys(cityData);
			},

			setActive: function(e) {
				this.active = e.target.textContent;
				this.visible = true;
				this.guide = this.cityData[this.active];

				if (document.querySelector('.fullpage-wrapper')) {
					$.fn.fullpage.setAutoScrolling(false);
				};

				document.body.classList.add('stop-scroll');
			},

			clearActive: function() {
				this.active = '',
				this.visible = false;
				this.guide = {};
				document.body.classList.remove('stop-scroll');

				if (document.querySelector('.fullpage-wrapper')) {
					$.fn.fullpage.setAutoScrolling(true);
				};
			},
		},
		mounted: function() {
			this.extractCities(cityData);
		}
	});
});
