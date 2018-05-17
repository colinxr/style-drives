/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

$(document).ready(function () {
	Vue.component('city-guide', {
		props: {
			active: String,
			guide: Object
		},
		template: '#city-guide',
		mounted: function () {},
		updated: function () {
			this.$parent.initMap();
		}
	});

	Vue.component('nav-list-item', {
		props: {
			city: String
		},
		template: '#nav-list-item'
	});

	var vm = new Vue({
		el: '#app',
		data: {
			cityData: cityData,
			cities: [],
			active: '',
			guide: {},
			visible: false
		},
		methods: {
			setActive: function (e) {
				this.active = e.target.textContent;
				this.visible = true;
				this.guide = this.cityData[this.active];
			},

			clearActive: function () {
				this.active = '', this.visible = false;
				this.guide = {};

				console.log('clearing modal');
			},

			extractCities: function (cityData) {
				this.cities = Object.keys(cityData);
			},

			initMap: function (GoogleMapsLoader) {
				GoogleMapsLoader.onLoad(function (google) {
					console.log('google maps, loaded');
				});
				// var uluru = {lat: -25.363, lng: 131.044,};
				// var map = new google.maps.Map(document.getElementById('map'), {
				// 	zoom: 4,
				// 	center: new google.maps.LatLng(-34.397, 150.644),
				// });
				// var marker = new google.maps.Marker({
				// 	position: uluru,
				// 	map: map,
				// });

			}
		},

		mounted: function () {
			this.extractCities(cityData);
		}
	});
});

/***/ })
/******/ ]);