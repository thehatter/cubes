'use strict';
require('./css/main.less');

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

CUBE.createNetwork(27, 27);
