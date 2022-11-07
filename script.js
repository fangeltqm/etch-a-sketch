const container = document.querySelector('.container');
const box = document.createElement('div');
box.classList.add('box');

for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    
}

const squares = document.querySelectorAll('.box')
squares.forEach((square) => {
    square.addEventListener('mouseenter', (etch))
})

function etch(e) {
    e.target.style.backgroundColor = 'black';      

}


const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    })
})
    






const sizeButton = document.querySelector('.change-size');
function changeSize () {
    let gridSize = prompt("How many boxes on each side? (1-50)");
    
    while (isNaN(gridSize) || gridSize < 1 || gridSize >50) {
        alert("You did not enter a number between 1-50")
        gridSize = prompt("Please choose a number between 1-50")
    }
    //delete prior grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let numberOfBoxes = gridSize * gridSize;
    
    for (let i=0; i<numberOfBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
        let boxHeight= 500/gridSize;
        let boxWidth= 500/gridSize;
        box.style.height = boxHeight +'px';
        box.style.width = boxWidth +'px';

    }

    const squares = document.querySelectorAll('.box')
    squares.forEach((square) => {
        square.addEventListener('mouseenter', (etch))
    })

    function etch(e) {
        e.target.style.backgroundColor = 'black';      
    }

}

sizeButton.addEventListener('click', changeSize);


