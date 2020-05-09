let resGridUser = 32;
let userColor;

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

function createGrid(resolutionGrid) {
   
    const containerGrid = document.querySelector('.containerGrid');

    for (let i = 1; i <= resolutionGrid; i++) {                                   //creates the grid and sets width and height of elements

        const rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.style.height = `${getHeight(containerGrid)/resolutionGrid}px`;
        containerGrid.appendChild(rowDiv);
        

        for (let j = 1; j <= resolutionGrid; j++) {
        
            const elementDiv = document.createElement('div');
            elementDiv.classList.add('elementGrid');
            elementDiv.style.width = `${getWidth(containerGrid)/resolutionGrid}px`;
            rowDiv.appendChild(elementDiv);
        };
    };
}

createGrid(resGridUser);                    //creates initial grid

function turnBlack() {

    this.style.backgroundColor = 'black';
    this.style.borderColor = 'black';        
}

function goBlack() {

    const gridElements = document.querySelectorAll('.elementGrid');
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', decreaseBrightness); });
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', randomColor); });
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', turnColor); });
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
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', turnColor); });
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
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', turnColor); });
    gridElements.forEach((div) => {div.addEventListener('mouseenter', randomColor); } );
}

function turnColor() {

    
    this.style.backgroundColor = userColor;
    this.style.borderColor = userColor;        
}

function goColor(e) {

    const gridElements = document.querySelectorAll('.elementGrid');
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', decreaseBrightness); });
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', randomColor); });
    gridElements.forEach((div) => { div.removeEventListener('mouseenter', turnBlack); });
    gridElements.forEach((div) => { div.addEventListener('mouseenter', turnColor); });
    
    userColor = e.target.value;
}

const blackButton = document.querySelector('#goBlack');
blackButton.addEventListener('click', goBlack);

const gradientButton = document.querySelector('#goGradient');
gradientButton.addEventListener('click', goGradient);

const randomButton = document.querySelector('#goRandom');
randomButton.addEventListener('click', goRandom);

const colorButton = document.querySelector('#goColor');
colorButton.addEventListener('click', goColor);
colorButton.addEventListener('change', goColor);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', reset);

function reset() {

    const containerGrid = document.querySelector('.containerGrid');
    const newContainerGrid = document.createElement('div');
    newContainerGrid.classList.add('containerGrid');
    containerGrid.replaceWith(newContainerGrid);

    createGrid(resGridUser);
}

const changeResolutionButton = document.querySelector('#changeRes');
changeResolutionButton.addEventListener('click', changeGridResolution);

function changeGridResolution() {

    let resGridUserStr = window.prompt('Enter the number of squares desired (e.g. if you enter 32, it\'ll be a 32x32 grid):', '32');           //getting string with response
    resGridUser = Number(resGridUserStr);

    if (resGridUser >= 100) {

        let confirmation = window.prompt('Warning! Values over 100 might crash your browser! Are you sure you wanna continue? (Type Yes or No)','No');
        
        let confirmationLowerCase = confirmation.toLowerCase();
            
        if (confirmationLowerCase === 'yes') {

            reset()

        } else if (confirmationLowerCase === 'no') {

            changeGridResolution();
        }


    } else {
        reset();
    }


} 