let body = document.querySelector('body');
const container = document.querySelector('#container');

let gridSize = 16;

//Create the grid - gridSize length * gridSize Height\
createGrid = () => {
  for (var i = 0; i < gridSize * gridSize; i++) {
    let unit = document.createElement('div');
    unit.className = 'unit';
    container.appendChild(unit);
    unit.setAttribute('style', 'border: 1px solid black');
  }
}

generateString = () => {
  var columns = "";
  var rows = "";
  for (var i = 0; i < gridSize; i++) {
    rows += "1fr "
    columns += " 1fr"
  }
  rows += "/ ";
  rows = rows.concat(columns);
  return rows;
}


document.querySelector('#container').style.grid = generateString();
createGrid();