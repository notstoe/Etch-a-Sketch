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

function turnBlack(e) {

    this.style.backgroundColor = 'black';
    this.style.borderColor = 'black';        
}

function goBlack() {

    const gridElements = document.querySelectorAll('.elementGrid');
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', decreaseBrightness); });
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', randomColor); });
    gridElements.forEach((div) => { div.addEventListener('mouseenter', turnBlack); });

}

function decreaseBrightness() {

    const style = window.getComputedStyle(this);
    const backgroundColorValue = style.getPropertyValue('background-color');                //getting 'rgb(x, x, x)'
    const firstComma = backgroundColorValue.indexOf(',');
    const firstSpace = backgroundColorValue.indexOf(' ');
    const lastComma = backgroundColorValue.lastIndexOf(',');
    const lastSpace = backgroundColorValue.lastIndexOf(' ');

    const valueColorR = backgroundColorValue.slice('4', firstComma);                           //getting each number x as string
    const valueColorG = backgroundColorValue.slice((firstSpace+1), lastComma);
    const valueColorB = backgroundColorValue.slice((lastSpace+1),-1);

    const newValueColorR = valueColorR - (valueColorR*0.1);
    const newValueColorG = valueColorG - (valueColorG*0.1);
    const newValueColorB = valueColorB - (valueColorB*0.1);
 
    this.style.backgroundColor = `rgb(${newValueColorR},${newValueColorG},${newValueColorB})`;
    this.style.borderColor = `rgb(${newValueColorR},${newValueColorG},${newValueColorB})`;
}

function goGradient() {

    const gridElements = document.querySelectorAll('.elementGrid');
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', turnBlack); });
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', randomColor); });
    gridElements.forEach((div) => {div.addEventListener('mouseenter', decreaseBrightness); } );

}

function randomColor() {
    let randomRGB = []; 
    
    for (let i=0; i<3; i++) { randomRGB[i] = Math.random()*255; }

    this.style.backgroundColor = `rgb(${randomRGB[0]},${randomRGB[1]},${randomRGB[2]})`;
    this.style.borderColor     = `rgb(${randomRGB[0]},${randomRGB[1]},${randomRGB[2]})`;
}

function goRandom() {
 
    const gridElements = document.querySelectorAll('.elementGrid');
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', decreaseBrightness); });
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', turnBlack); });
    gridElements.forEach((div) => {div.addEventListener('mouseenter', randomColor); } );
}
