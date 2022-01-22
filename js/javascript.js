function createBlock(sideLengthBlock, borderSizeBlock) {
    const container = document.querySelector('.container');
    const block = document.createElement('div');
    block.style.cssText = `border: ${borderSizeBlock}px solid blue; width: ${sideLengthBlock-2*borderSizeBlock}px; height: ${sideLengthBlock-2*borderSizeBlock}px;`;
    container.appendChild(block);
}

function createMultipleBlocks(numberOfBlocksPerRow) {
    const sideLengthContainer = document.querySelector('.container').clientWidth;
    const sideLengthBlock = Math.floor(sideLengthContainer/numberOfBlocksPerRow);
    const numberOfNewBlocks = numberOfBlocksPerRow**2;
    for (let i = 0; i<numberOfNewBlocks; i++) {
        createBlock(sideLengthBlock, 2);
    }
}
createMultipleBlocks(15);
