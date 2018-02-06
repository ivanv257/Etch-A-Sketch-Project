
// Create and Append the Main Grid Container
const body = document.querySelector('body');

const div = createElement('div');
div.classList.add('gridContainer');
div.textContent = 'Hello this is the gridContainer and if this text appears the grid container should be active.'

body.appendChild(div);
