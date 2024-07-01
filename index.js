//variables

const container = document.getElementById("container");

// //create grid

function createGrid (measurements) {
    for (let i = 0; i < (measurements * measurements); i++) {
        container.style.gridTemplateColumns = `repeat(${measurements}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${measurements}, 1fr)`;

        let cell = document.createElement("div");
        cell.style.backgroundColor = "white";

        cell.style.width = `calc(100 / ${measurements})`;
        cell.style.height = `calc(100 / ${measurements})`;

        function changeColor (cell) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
        
            container.appendChild(cell).className = "color";
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
        }

        changeColor(cell);
    };
}

createGrid(16);

// //adjust size

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
