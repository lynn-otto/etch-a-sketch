function createBlock(sideLengthBlock, borderSizeBlock) {
    const container = document.querySelector('.container');
    const block = document.createElement('div');
    block.classList.add('singleBlock');
    block.style.cssText = `background-color: white; border: ${borderSizeBlock}px solid gray; width: ${sideLengthBlock-2*borderSizeBlock}px; height: ${sideLengthBlock-2*borderSizeBlock}px;`;
    block.addEventListener('mouseover', changeColorOfBlock);
    container.appendChild(block);
}

function generateRandomIntegerInbetweenInclusive(lowerBound, upperBound) {
    return Math.floor(Math.random()* (upperBound - lowerBound + 1)) + lowerBound;
}

function changeColorOfBlock(block) {
    if (toggledRainbow) {
        if (block.target.style.backgroundColor == "white" || block.target.style.backgroundColor == "black") {
            const colorRed = generateRandomIntegerInbetweenInclusive(0,255);
            const colorGreen = generateRandomIntegerInbetweenInclusive(0,255);
            const colorBlue = generateRandomIntegerInbetweenInclusive(0,255);
            block.target.style.backgroundColor = `rgba(${colorRed}, ${colorGreen}, ${colorBlue}, 1.0)`;
            console.log(block.target.style.backgroundColor);
        }
    }
    else {
        block.target.style.backgroundColor = 'black';
    }
}

function createMultipleBlocks(numberOfBlocksPerRow) {
    const sideLengthContainer = document.querySelector('.container').clientWidth;
    const sideLengthBlock = Math.floor(sideLengthContainer/numberOfBlocksPerRow);
    const numberOfNewBlocks = numberOfBlocksPerRow**2;
    for (let i = 0; i<numberOfNewBlocks; i++) {
        createBlock(sideLengthBlock, 1);
    }
}

function pressGridSizeButton() {
    const gridSizeButton = document.querySelector('.chooseGridSize');
    gridSizeButton.addEventListener('click', chooseGridSize);
}

function pressClearButton() {
    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', clearGrid);
}

function pressToggleRainbowButton() {
    const toggleRainbowButton = document.querySelector('.toggleRainbow');
    toggleRainbowButton.addEventListener('click', toggleRainbow);
}

function deleteGrid() {
    const blocks = document.querySelectorAll('.singleBlock');
    blocks.forEach(block => block.remove());
}

function clearGrid() {
    const blocks = document.querySelectorAll('.singleBlock');
    console.log('Deleting');
    blocks.forEach(block => block.style.backgroundColor = 'white');
}

function toggleRainbow() {
    const toggleRainbowButton = document.querySelector('.toggleRainbow');
    if (toggledRainbow) {
        toggledRainbow = false;
        console.log("Toggle off");
        toggleRainbowButton.style.backgroundColor = 'red';
    }
    else {
        toggledRainbow = true;
        console.log("Toggle on");
        toggleRainbowButton.style.backgroundColor = 'green';
    }
}

function chooseGridSize() {
    let gridSize = Number(prompt("Please choose number (greater than 0, smaller than 60) of blocks per row."));
    while(gridSize*0!=0 || gridSize<=0 || gridSize > 59) {
        gridSize = Number(prompt("Please enter a positive number below 60!"))
    }
    deleteGrid();
    createMultipleBlocks(gridSize);

}

let toggledRainbow = false;
createMultipleBlocks(16);
pressGridSizeButton();
pressClearButton();
pressToggleRainbowButton();