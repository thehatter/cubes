/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(1);

	console.log('main js is working');


	function CubeGenerator() {
	  this.createNetwork = function(width, height) {
	    let cels = '';
	    for (let i = 0; i < (width * height); i++) {
	      cels += createNetworkCell(i);
	    }


	    let netStyles = `style="width: ${width * 60}px; height:${width * 60}px;"`;
	    let network = `<div class="network-container" ${netStyles}>
	                      ${cels}
	                   </div>`;

	    document.querySelector('.main').innerHTML = network;

	    // add event listeners to cells (there we got NodeList object)
	    let createdCels = document.querySelectorAll('.cell');

	    function listenTo(element, index) {
	      element.addEventListener('click', function() {
	        console.log('cell number:'+ index + ' is clicked!');
	        createCube(index, 1);
	      });
	    }

	    for (let i = 0; i < createdCels.length; ++i) {
	      let item = createdCels[i];
	      listenTo(item, i);
	    }
	  };

	  function createNetworkCell(cellNumber) {
	    return '<div data-cellnumber="'+ cellNumber +
	           '" class="cell" style="height:60px; width: 60px;"></div>';
	  }

	  function createCube(cellNumber, level){
	    let element = document.querySelector('.cell[data-cellnumber="'+cellNumber +'"]');
	    let cube = '<div class="cube">'+ '<div class="side"></div>'.repeat(6) +'</div>';
	    element.innerHTML = element.innerHTML + cube;
	  }
	}

	const CUBE = new CubeGenerator();

	CUBE.createNetwork(13, 13);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);