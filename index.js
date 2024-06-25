//variables

const count = 0;
const gridItem = document.querySelectorAll(".grid-item");
const container = document.getElementById("container");
const size = document.getElementById("size");

//create grid

function createGrid (measurements) {
    for (let i = 0; i < (measurements * measurements); i++) {
        container.style.gridTemplateColumns = `repeat(${measurements}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${measurements}, 1fr)`;
        let cell = document.createElement("div");
        cell.style.width = `calc(100 / ${measurements})`;
        cell.style.height = `calc(100 / ${measurements})`;
        container.appendChild(cell).className = "grid-item";
    };
}

createGrid(16);

//adjust size

function adjustSize () {
    adjustment = Number(prompt("Set size between 2-100"));
    if (adjustment >= 2 && adjustment <= 100) {
        createGrid(adjustment);
        return true;
    } else {
        alert("Invalid size. Try again");
        return false;
    }
}

// hover effect

function hover () {
    gridItem.forEach((gridItem) => {
        container.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'black';
        });
    });

    return;
}

hover();

//set colors



