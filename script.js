
let body = document.querySelector('body');
const container = document.querySelector('#container');

let gridSize = 16;

//Create the grid - gridSize length * gridSize Height
function createGrid(){ 
  for (var i=0; i < gridSize*gridSize; i++){
    let unit = document.createElement('div');
    unit.className= 'unit';
    container.appendChild(unit);
  }
}

createGrid();