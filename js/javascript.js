function createBlock(sideLengthBlock, borderSizeBlock) {
    const container = document.querySelector('.container');
    const block = document.createElement('div');
    block.classList.add('singleBlock');
    block.style.cssText = `background-color: white; border: ${borderSizeBlock}px solid gray; width: ${sideLengthBlock-2*borderSizeBlock}px; height: ${sideLengthBlock-2*borderSizeBlock}px;`;
    block.addEventListener('mouseover', changeColorOfBlock);
    container.appendChild(block);
}

function changeColorOfBlock(block) {
    block.target.style.backgroundColor = 'black';
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

function deleteGrid() {
    const blocks = document.querySelectorAll('.singleBlock');
    blocks.forEach(block => block.remove());
}

function clearGrid() {
    const blocks = document.querySelectorAll('.singleBlock');
    console.log('Deleting');
    blocks.forEach(block => block.style.backgroundColor = 'white');
}
function chooseGridSize() {
    let gridSize = Number(prompt("Choose number of blocks per row"));
    while(gridSize*0!=0 || gridSize<=0 || gridSize > 99) {
        gridSize = Number(prompt("Please enter a positive number below 100!"))
    }
    deleteGrid();
    createMultipleBlocks(gridSize);

}


createMultipleBlocks(16);
pressGridSizeButton();
pressClearButton();