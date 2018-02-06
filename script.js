
// Create and Append the Main Grid Container
const gridContainer = document.querySelector('#gridContainer');

const divChild = document.createElement('div');
divChild.classList.add('gridChild');

// Check the grid container border. 
gridContainer.setAttribute('style', 'border: 1px solid black; height: 1200px; width: 1200px');

gridContainer.appendChild(divChild);

//Test function
function addContainerChild (){
  if (5 < 10){
  return divChild.setAttribute('style', 'border: 1px solid black; height: 600px; width: 600px');
  }
}

