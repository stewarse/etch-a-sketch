
const container = document.querySelector('#container');
const resetButton = document.querySelector('button#reset-board') 


setBoard()

const items = document.querySelectorAll('.grid-item')

items.forEach((item) => {
    item.addEventListener('mouseover', changeColor);
});

/**********************************************************************************
 * TO-DO Need to update to prompt user to determine how many pixels should be in the grid up to 100 x 100;
***********************************************************************************/

function changeColor( e ) {
    let color = randomColor();
    e.target.style.background = `hsl(${color}, 80%, 90%)`

//Update code to adjust the saturation of the color (requires a new function based on rgb values)
    console.log(e.target)
}

function setBoard() {
    let num = 16

    for (let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
        const newDiv = document.createElement('div');
        newDiv.className = 'grid-item';
        newDiv.id = `item-${i}`;
        container.appendChild(newDiv);
        }
    }
};

function clearBoard() {
    items.forEach((item) => {
        item.style.background = 'white';
    });
};

function randomColor() {
    return `${Math.floor(Math.random() * 360)}`
}