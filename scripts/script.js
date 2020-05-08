let resGrid = 32;

const containerGrid = document.querySelector('.containerGrid');

const getWidth = function() {

    const style = window.getComputedStyle(containerGrid);
    const widthStr = style.getPropertyValue('width');                //getting '500px';
    const widthValue = widthStr.replace('px', '');

    return widthValue;                                              //returns str

}

const getHeight = function() {

    const style = window.getComputedStyle(containerGrid);
    const heightStr = style.getPropertyValue('height');                //getting '500px';
    const heightValue = heightStr.replace('px', '');

    return heightValue;                                                 //returns str

}

for (let i = 1; i <= resGrid; i++) {

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.style.height = `${getHeight()/resGrid}px`;
    containerGrid.appendChild(rowDiv);
    

    for (let j = 1; j <= resGrid; j++) {
    
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('elementGrid');
        elementDiv.style.width = `${getWidth()}px`;
        rowDiv.appendChild(elementDiv);
    };
};