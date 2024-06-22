//create grid

const container = document.getElementById("container");

function createGrid (row, col) {
    container.style.setProperty('--grid-col', col);
    container.style.setProperty('--grid-row', row);
    for (let i = 0; i < (row * col); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    }
}

createGrid(16, 16);