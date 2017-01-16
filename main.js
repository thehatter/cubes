'use strict';
require('./css/main.scss');

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
      element.addEventListener('click', function(e) {
        if (e.target == element) {
          console.log('cell number:'+ index + ' is clicked!');
          createCube(e.target);
        }
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

  function createCube(container){
    let cubeClass = container.className.split(' ')[1];
    let cubeSides = `<div class="side up_side"></div>
                     <div class="side down_side"></div>
                     <div class="side e_side "></div>
                     <div class="side w_side"></div>
                     <div class="side n_side"></div>
                     <div class="side s_side"></div>`;

    let cube = '<div class="cube '+ cubeClass +'">'+ cubeSides +'</div>';
    container.innerHTML = container.innerHTML + cube;

    let newCubeSides = container.querySelector(".cube .side");

    newCubeSides.addEventListener('click', function(e) {
      console.log('cube clicked is clicked!');
      console.log(e.target.className);
      if (!e.target.hasChildNodes()) {
        createCube(e.target);
      }
    });

  }
}

const CUBE = new CubeGenerator();

CUBE.createNetwork(27, 27);
