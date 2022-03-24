const body = document.querySelector('body');
// Create h1 element
const h1 = document.createElement('h1')
h1.textContent = 'Etc A Sketch';
body.appendChild(h1);

//Ceate Wrapper
const wrapper = document.createElement('div');
body.appendChild(wrapper);
//Create Settings
const settings = document.createElement('div');
settings.classList.add('settings');
wrapper.appendChild(settings);

//Reset Button
const button = document.createElement('button');
button.classList.add('button');
button.setAttribute('id', 'reset');
button.textContent = "Clear"
settings.appendChild(button);

const reset = document.getElementById('reset');
reset.addEventListener('click',(event) => {
    const gridElements = document.getElementsByClassName('square');
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].style.backgroundColor = "";

    }
})

//Rainbow Button
const button1 = document.createElement('button');
button1.classList.add('button');
button1.textContent = "Rainbow";
settings.appendChild(button1);

// Create container inside wrapper
const container = document.createElement('div');
wrapper.classList.add('wrapper');
container.classList.add('container');

wrapper.appendChild(container);



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

