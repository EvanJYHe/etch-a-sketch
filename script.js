let gridSize = 16;

const canvas = document.getElementById("canvas");
const sizeButton = document.getElementById("sizeButton");
const clearButton = document.getElementById("clearButton");

sizeButton.addEventListener('click', changeGridSize);
clearButton.addEventListener('click', createCanvas);

function createPixel() { // function to create the individual pixel
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.opacity = 0; // set opacity to 0 to gradually reveal the color (must be set with js, js can only access inline styles not css)
    pixel.addEventListener('mouseover', function() { //add object listender to change the pixels color when hovered over
        colorIn(pixel)
    })
    return pixel;
}

function colorIn(pixel) {
    let currentOpacity = parseFloat(pixel.style.opacity); //get current opacity
    pixel.style.opacity = Math.min(currentOpacity + 0.1, 1); //increment opacity, but capt it at 1
}

function createGridLine() { // function to create the row to hold size number of pixels
    const gridLine = document.createElement("div");
    gridLine.classList.add("grid-line");
    return gridLine;
}

function drawGrid() {
    for (let lineNum = 1; lineNum <= gridSize; lineNum++) { // create size number of grid lines
        const gridLine = createGridLine();
        canvas.appendChild(gridLine);
        
        for (let squareNum = 1; squareNum <= gridSize; squareNum++) { // populate each gridlines with size number of pixels
            const pixel = createPixel();
            gridLine.appendChild(pixel);
        }
    }
}

function clearGrid() {
    console.log("clearing grid")
    const pixels = canvas.querySelectorAll(".pixel") // get all the pixels 

    pixels.forEach(function(pixel) {
        pixel.remove(); // remove each pixel
    });
}

function createCanvas() {
    clearGrid();
    drawGrid();
}

function getSize() {
    let input;

    do {
        input = prompt("please enter a grid size between 1 and 100");
    } while (isNaN(input));
    
    return input;
}

function changeGridSize() {
    gridSize = getSize();
    createCanvas();
}

document.addEventListener("DOMContentLoaded", () => { //load canvas in when html loads
    drawGrid();
});
