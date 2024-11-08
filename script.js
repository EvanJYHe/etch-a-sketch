
let gridSize = 16;

const canvas = document.getElementById("canvas");
const optionButton = document.getElementById("optionButton");

optionButton.addEventListener('click', createCanvas)

function createPixel() {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    return pixel;
}

function drawGrid() {
    for (let squareNum = 1; squareNum <= gridSize; squareNum++) {
        const pixel = createPixel()
        canvas.appendChild(pixel);
    }
}

function clearGrid() {

}

function createCanvas() {
    console.log("hey");
    clearGrid();
    drawGrid();
}

