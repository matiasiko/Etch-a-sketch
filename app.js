let defaultSize = 8;
let color = '#000';



const gridElements = document.getElementsByClassName('square');
const rainbowBtn = document.getElementById('rainbowBtn');
const container = document.querySelector('.container');

const body = document.querySelector('body');

//Reset Button
const reset = document.getElementById('reset');
reset.addEventListener('click', (event) => {
    for (let i = 0; i < gridElements.length; i++) {
        gridElements[i].style.backgroundColor = "";
    }
})

//Range Slider
let slider = document.getElementById("myRange");
let output = document.getElementById('range');
output.innerHTML = slider.value;


//create grid and range slider functionality
function createGrid(defaultSize, color) {
    // Add square divs to container
    for (let i = 0; i < defaultSize * defaultSize; i++) {
        let square = document.createElement('div');
        square.classList.add('square')
        container.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', (event) => {
            event.target.style.backgroundColor = color;
        });
    });

    container.style.gridTemplateColumns = `repeat(${defaultSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${defaultSize}, 1fr)`;

    // Slider functionality
    slider.oninput = function () {
        output.innerHTML = this.value;
        for (let i = 0; i < gridElements.length; i++) {
            gridElements[i].style.backgroundColor = "";
        }

        for (let i = 0; i < this.value * this.value; i++) {
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
        container.style.gridTemplateColumns = `repeat(${this.value}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${this.value}, 1fr)`;
    }
}


window.onload = () => {
    createGrid(defaultSize);
}