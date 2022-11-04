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

const sizeButton = document.querySelector('.change-size');
function changeSize () {
    let gridSize = prompt("How many boxes on each side? (1-50)");
    
    while (isNaN(gridSize) || gridSize < 1 || gridSize >50) {
        alert("You did not enter a number between 1-50")
        gridSize = prompt("Please choose a number between 1-50")
    }


    
}

sizeButton.addEventListener('click', changeSize);


