
// Create and Append the Main Grid Container
const gridContainer = document.querySelector('#gridContainer');

const divChild = document.createElement('div');
divChild.classList.add('gridChild');

// Check the grid container border. 
gridContainer.setAttribute('style', 'border: 1px solid black; height: 1600px; width: 1600px');


gridContainer.appendChild(divChild);
