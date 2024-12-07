const containerDiv = document.querySelector('.container');

const rowDiv = document.createElement('div');
rowDiv.classList.add('row');

for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (let i = 0; i < 16; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');
        // itemDiv.textContent = ".";
        rowDiv.appendChild(itemDiv);
    }
    containerDiv.appendChild(rowDiv);
}

let grid = document.querySelectorAll(".item");

grid.forEach(item => {
  item.addEventListener('mouseover', () => item.classList.add("coloured"));
});