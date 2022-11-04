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