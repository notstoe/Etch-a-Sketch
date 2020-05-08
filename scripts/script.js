let resGrid = 32;

const containerGrid = document.querySelector('.containerGrid');

const getWidth = function(targetElement) {

    const style = window.getComputedStyle(targetElement);
    const widthStr = style.getPropertyValue('width');                //getting '500px';
    const widthValue = widthStr.replace('px', '');

    return widthValue;                                              //returns string
}

const getHeight = function(targetElement) {

    const style = window.getComputedStyle(targetElement);
    const heightStr = style.getPropertyValue('height');                //getting '500px';
    const heightValue = heightStr.replace('px', '');

    return heightValue;                                                 //returns string
}

for (let i = 1; i <= resGrid; i++) {                                   //creates the grid and sets width and height of elements

    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.style.height = `${getHeight(containerGrid)/resGrid}px`;
    containerGrid.appendChild(rowDiv);
    

    for (let j = 1; j <= resGrid; j++) {
    
        const elementDiv = document.createElement('div');
        elementDiv.classList.add('elementGrid');
        elementDiv.style.width = `${getWidth(containerGrid)/resGrid}px`;
        rowDiv.appendChild(elementDiv);
    };
};



/*const gridElements = document.querySelectorAll('.elementGrid');
gridElements.forEach((div) => {div.addEventListener('mouseenter', turnBlack); } );

function turnBlack() {

    this.classList.add('goBlack');

}*/


/*
const gridElements = document.querySelectorAll('.elementGrid');
gridElements.forEach((div) => {div.addEventListener('mouseenter', decreaseBrightness); } );

function decreaseBrightness() {

    const style = window.getComputedStyle(this);
    const backgroundColorValue = style.getPropertyValue('background-color');                //getting 'rgb(x, x, x)'
    const endSlice = backgroundColorValue.indexOf(',');
    const valueColor = backgroundColorValue.slice('4', endSlice);                           //getting just one number x as string

    const newValueColor = valueColor - (valueColor*0.1);

    const borderColorvalue = style.getPropertyValue('border-top-color');                    //same logic for border color        
    const endSliceBorder = borderColorvalue.indexOf(',');
    const valueColorBorder = borderColorvalue.slice('4', endSliceBorder);                           
    
    const newValueColorBorder = valueColorBorder - (valueColorBorder*0.1);

    this.style.backgroundColor = `rgb(${newValueColor},${newValueColor},${newValueColor})`;
    this.style.borderColor = `rgb(${newValueColorBorder},${newValueColorBorder},${newValueColorBorder})`;

}

*/