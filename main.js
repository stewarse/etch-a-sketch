
const container = document.querySelector('#container');
const resetButton = document.querySelector('button#reset-board') 


createGrid();



// items.forEach((item) => {
//     item.addEventListener('mouseover', setColor);
// });

/**********************************************************************************
 * TO-DO Need to update to prompt user to determine how many pixels should be in the grid up to 100 x 100;
***********************************************************************************/

function setColor( e ) {
    //console.log(e.target.style)
    if(this.style.background === ''){
        let color = randomColor();
        e.target.style.background = `hsl(${color}, 80%, 90%)`
        //console.log('true')
    } else {
        //Determine the new color at 80% opacity

    }

//Update code to adjust the lightness of the color (requires a new function to determine new color via rgb values?)
    // console.log(e)
}

function createGrid(num = 16) {

    for (let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
        const newDiv = document.createElement('div');
        newDiv.className = 'grid-item';
        newDiv.id = `item-${i}-${j}`;
        container.appendChild(newDiv);
        }
    }

    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`

    setEventListeners();
};

function setEventListeners() {
    const items = document.querySelectorAll('.grid-item')
    
    items.forEach((item) => {
        item.addEventListener('mouseover', setColor);
    });
}

function resetBoard() {
    clearGrid();
    let gridSize = getGridSize();
    createGrid(gridSize);
}

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
};

function randomColor() {
    return `${Math.floor(Math.random() * 360)}`
}

function getGridSize() {
    return parseInt(prompt("Please enter the grid size?"));
}