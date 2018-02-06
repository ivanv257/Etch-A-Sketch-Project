
// Create and Append the Main Grid Container
const gridContainer = document.querySelector('#gridContainer');

const divChild = document.createElement('div');
divChild.classList.add('gridChild');

divChild.setAttribute('style', 'color: blue');
divChild.textContent = 'Hello this is the gridChild and if this text appears the gridChild should be active.';


gridContainer.appendChild(divChild);
