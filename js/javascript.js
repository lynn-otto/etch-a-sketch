function createBlock(sideLengthBlock) {
    const container = document.querySelector('.container');
    const block = document.createElement('div');
    block.style.cssText = `border: 2px solid blue; width: ${sideLengthBlock}px; height: ${sideLengthBlock}px;`;
    container.appendChild(block);
}

function createMultipleBlocks(numberOfBlocksPerRow) {
    const sideLengthContainer = document.querySelector('.container').clientWidth;
    const sideLengthBlock = sideLengthContainer/numberOfBlocksPerRow;
    const numberOfNewBlocks = numberOfBlocksPerRow**2;
    for (let i = 0; i<numberOfNewBlocks; i++) {
        createBlock(sideLengthBlock);
    }
}
createMultipleBlocks(2);
