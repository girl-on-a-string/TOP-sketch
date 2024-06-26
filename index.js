//variables

const count = 0;
let gridItem = document.querySelectorAll(".grid-item");
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

        //container.appendChild(cell).className = "grid-item";
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() *256);

        container.appendChild(cell).className = "color";
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

    };


}

//delete grid

function deleteGrid () {
    
}

//adjust size

function adjustSize () {
    adjustment = Number(prompt("Set size between 2-100"));
    if (adjustment >= 2 && adjustment <= 100) {
        createGrid(0);
        createGrid(adjustment);
        return true;
    } else {
        alert("Invalid size. Try again");
        return false;
    }
}

//reset size

function resetAll () {
    // container.querySelectorAll(".grid-item", () => {
    //     gridItem.style.backgroundColor = "white";
    // });

    createGrid(16);
    gridItem.forEach((gridItem), () => {
        gridItem.style.backgroundColor = "white";
    });
}

// all functions in order

createGrid(16);

