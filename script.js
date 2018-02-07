
// Select and style the main Grid container
const gridContainer = document.querySelector('.grid-container');
gridContainer.setAttribute('style', 'display: grid; grid-template-columns: auto auto auto; border: 1px solid black; height: 600px; width: 600px');

// Grid items
const gridItem1 = document.createElement('div');
gridItem1.classList.add('grid-item1');
gridContainer.appendChild(gridItem1);
gridItem1.setAttribute('style', 'border: 1px solid black; background-color: black')

const gridItem2 = document.createElement('div');
gridItem2.classList.add('grid-item2');
gridContainer.appendChild(gridItem2);
gridItem2.setAttribute('style', 'border: 1px solid black; background-color: yellow')

const gridItem3 = document.createElement('div');
gridItem3.classList.add('grid-item3');
gridContainer.appendChild(gridItem3);
gridItem3.setAttribute('style', 'border: 1px solid black; background-color: blue')

const gridItem4 = document.createElement('div');
gridItem4.classList.add('grid-item4');
gridContainer.appendChild(gridItem4);
gridItem4.setAttribute('style', 'border: 1px solid black; background-color: blue')

