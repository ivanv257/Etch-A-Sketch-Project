
// Create and Append the Main Grid Container
const divContainer = document.querySelector('#divContainer');

const divChild = createElement('div');
divChild.classList.add('gridChild');
divChild.textContent = 'Hello this is the gridChild and if this text appears the gridChild should be active.'

divContainer.appendChild(divChild);
