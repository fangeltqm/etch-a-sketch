const container = document.querySelector('.container');
const box = document.createElement('div');
box.classList.add('box');



for (let i = 0; i < 256; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    
}

const black = document.querySelector('.black');
black.addEventListener('click', (etch));
function etch() {
    const squares = document.querySelectorAll('.box');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', (black) => {
            square.style.backgroundColor = 'black'; 
        })
    })
}
/*
//shade pen
const gray = document.querySelector('.shade');
gray.addEventListener('click', (shade));
function shade() {
    const squares = document.querySelectorAll('.box');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', grayShade);
    })
}

function grayShade(e) {
    if (square.addEventListener('mouseenter', black)) {
        square.removeEventListener('mouseenter', black)
    }
    console.log(this);
    //console.log(e.target.style.backgroundColor);
    e.stopPropagation();
}


            
    //let rgbaValue = 225
    //e.target.style.backgroundColor = `rgba(${rgbaValue, ${rgbaValue, ${rgbaValue})`
*/


const rainbow = document.querySelector('.rainbow');
rainbow.addEventListener('click', (magic));
function magic() {
    const squares = document.querySelectorAll('.box');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', (wand) => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgba(${r},${g},${b})`;
        })
    })
}

const eraser = document.querySelector('.eraser');
eraser.addEventListener('click', (erase));
function erase() {
    const squares = document.querySelectorAll('.box');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', (rubber) => {
            square.style.backgroundColor ='white';
        })
    })
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.backgroundColor = 'white';
    })
})

const sizeButton = document.querySelector('.change-size');
sizeButton.addEventListener('click', changeSize);
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
}