let body = document.querySelector('body');
const container = document.querySelector('#container');

let gridSize = 16;

//Create the grid - gridSize length * gridSize Height
createGrid = () => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    let unit = document.createElement('div');
    unit.className = 'unit';
    container.appendChild(unit);
    unit.setAttribute('style', 'border: 1px solid black');
    unit.addEventListener('mouseover', (e) => { // Hovering effect for color change 
      e.target.style.background = '#333333';
    })
    let eraseButton = document.getElementById('erase');
    eraseButton.addEventListener('onclick', (unit) =>{
      unit.target.style.background = '#ffffff';
  })
  }
}

//Create columns and Rows
generateString = () => {
  let columns = "";
  let rows = "";
  for (let i = 0; i < gridSize; i++) {
    rows += "1fr "
    columns += " 1fr"
  }
  rows += "/ ";
  rows = rows.concat(columns);
  return rows;
}

document.querySelector('#container').style.grid = generateString();
createGrid();


