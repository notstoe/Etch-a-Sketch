let sizeGrid = 16;

const containerGrid = document.querySelector('.containerGrid');

const getWidth = function() {

    const style = window.getComputedStyle(containerGrid);
    const widthStr = style.getPropertyValue('width');                //getting '500px';
    const widthValue = widthStr.replace('px', '');

    return widthValue/sizeGrid;                                      //returns num not str

}

const getHeight = function() {

    const style = window.getComputedStyle(containerGrid);
    const heightStr = style.getPropertyValue('height');                //getting '500px';
    const heightValue = heightStr.replace('px', '');

    return heightValue/sizeGrid;                                       //returns num not str

}


for (let i = 1; i <= sizeGrid; i++) {
  
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('elementGrid');
    rowDiv.style.width = `${getWidth()}px`;
    rowDiv.style.height = `${getHeight()}px`;
    containerGrid.appendChild(rowDiv);
};