
const body = document.querySelector('body');
// Create h1 element
const h1 = document.createElement('h1')
h1.textContent = 'Etc A Sketch';
body.appendChild(h1);

// Create container and wrapper
const wrapper = document.createElement('div');
const container = document.createElement('div');
wrapper.classList.add('wrapper');
container.classList.add('container');
body.appendChild(wrapper);
wrapper.appendChild(container);

// Create H1 Element


//Add square divs to container
for (let i = 0; i < 64; i++) {
    let square = document.createElement('div');
    square.classList.add('square')
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = "#000";
    });
});