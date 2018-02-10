
// Select and style the main Grid container
const gridContainer = document.querySelector('.grid-container');
gridContainer.setAttribute('style', 'display: grid; grid-template-columns: auto auto auto; border: 1px solid black; height: 600px; width: 600px; margin-left: 25%;');


// Grid items
const gridItem = document.createElement('div');
gridItem.classList.add('grid-item');
gridContainer.appendChild(gridItem);
gridItem.setAttribute('style', 'border: 1px solid black');


gridContainer.appendChild(gridItem);




gridItem.addEventListener('mouseover', hoverFunction);

function hoverFunction(){
  gridItem.setAttribute('style', 'background-color: black')  
}

