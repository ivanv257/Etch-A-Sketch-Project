
// Select and style the main Grid container
const gridContainer = document.querySelector('.grid-container');
gridContainer.setAttribute('style', 'display: grid; grid-template-columns: auto auto auto; border: 1px solid black; height: 600px; width: 600px');

// The first grid item
const gridItem1 = document.createElement('div');
gridItem1.classList.add('grid-item1');
gridContainer.appendChild(gridItem1);
gridItem1.setAttribute('style', 'border: 1px solid black; background-color: black')

