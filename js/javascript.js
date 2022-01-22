function createBlock(sideLength) {
    const container = document.querySelector('.container');
    const block = document.createElement('div');
    block.style.cssText = `border: 2px solid blue; width: ${sideLength}px; height: ${sideLength}px;`;
    container.appendChild(block);
}

createBlock(20);
