
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
    let rgb = e.target.style.background

    if(this.style.background === ''){
        let color = randomColor();
        e.target.style.background = `hsl(${color}, 80%, 90%)`;
        console.log(e.target.style.background)
    } else {
        //Determine the new color at 80% opacity
        console.log(reduceLightness(rgb))
        e.target.style.background = reduceLightness(rgb)

    }
//Update code to adjust the lightness of the color (requires a new function to determine new color via rgb values?)
    // console.log(e)
}

// const rgbIntArray = rgb.replace(/ /g, '').slice(4, -1).split(',')
function reduceLightness(rgb) {
    const rgbIntArray = rgb.replace(/ /g, '').slice(4, -1).split(',')
    
    let lowest = rgbIntArray[0];
    let lowestIndex = 0
    let highest = rgbIntArray[0];
    let highestIndex = 0
    for(let i = 1; i < rgbIntArray.length; i++){
        if (rgbIntArray[i] < lowest) {
            lowest = rgbIntArray[i]
            lowestIndex = i
        }
        if (rgbIntArray[i] > highest){
            highest = rgbIntArray[i]
            highestIndex = i
        }
    }

    let middleIndex = rgbIntArray.length - lowestIndex - highestIndex
    let middle = rgbIntArray[middleIndex]


    console.log(highest);
    console.log(middle);
    console.log(lowest);

    const newHighest = Math.round( highest - Math.min(highest, 25.5))
    const deltaFraction = (highest - newHighest) / highest;
    const newMiddle = middle - (middle * deltaFraction)
    const newLowest = lowest - (lowest * deltaFraction)

    const returnArray = []
    
    returnArray[lowestIndex] = newLowest
    returnArray[middleIndex] = newMiddle
    returnArray[highestIndex] = newHighest

    return [`rgb(${returnArray.join()})`];
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