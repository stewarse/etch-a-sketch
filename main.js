
const container = document.querySelector('#container');


let num = 16

for (let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
    const newDiv = document.createElement('div');
    newDiv.className = 'grid-item';
    newDiv.id = `item-${i}`;
    container.appendChild(newDiv);
    }
}