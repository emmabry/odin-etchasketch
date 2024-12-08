const containerDiv = document.querySelector('.container');

const resetButton = document.createElement('button');
resetButton.classList.add('button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', () => {
    grid.forEach(item => {
        item.style.backgroundColor = "white";
    });
});
containerDiv.appendChild(resetButton);

const setDimensionButton = document.createElement('button');
setDimensionButton.classList.add('button');
setDimensionButton.textContent = "Set Dimension";
setDimensionButton.addEventListener('click', () => {
    let dimension = prompt("Enter the dimension of the grid (1-100)");
    if (dimension < 1 || dimension > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    containerDiv.innerHTML = "";

    containerDiv.appendChild(resetButton);
    containerDiv.appendChild(setDimensionButton);

    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid');

    for (let i = 0; i < dimension; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        for (let i = 0; i < dimension; i++) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.style.width = `${960/dimension}px`;
            console.log()
            itemDiv.style.height = `${960/dimension}px`;
            rowDiv.appendChild(itemDiv);
        }
        gridDiv.appendChild(rowDiv);
    }
    containerDiv.appendChild(gridDiv);

    grid = document.querySelectorAll(".item");
    grid.forEach(item => {
        item.addEventListener('mouseover', () => 
            item.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
    );
    });
    
} )
containerDiv.appendChild(setDimensionButton);
