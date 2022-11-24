const square = document.createElement("div");
square.className = "square"; 
const container = document.querySelector(".container");
const grid_btn = document.querySelector(".grid_btn");
const rgb_btn = document.querySelector(".rgb_btn");
const rst_btn = document.querySelector(".rst_btn");

let squareNumber = 256;

function defaultGrid() {
    for (let i = 0; i < squareNumber; i++) {
        container.appendChild(square.cloneNode());
    };
    
    blackHover();
};

function blackHover() {
    const squareDivs = document.querySelectorAll('.square');
    
    squareDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "black";
    })});

    rgb_btn.addEventListener('click', () => {
        randomRGBA();
    });
    
};

defaultGrid();


grid_btn.addEventListener('click', () => {
    numberInput();
});

rgb_btn.addEventListener('click', () => {
    randomRGBA();
});

rst_btn.addEventListener('click', () => {
    const squareDivs = document.querySelectorAll('.square');
    squareDivs.forEach(square => {
        square.style.backgroundColor = "white";
    })
});


function numberInput() {
    let value = prompt("Please enter a number for grid size:");
    let num = parseInt(value);
    if (num <= 100) {
        for (let i = 0; i < squareNumber; i++) {
            container.removeChild(container.lastElementChild);
        };
        squareNumber = value * value;
        for (let i = 0; i < squareNumber; i++) {
            container.appendChild(square.cloneNode());
        };
        container.style.cssText = "grid-template-columns: repeat(" + value + ", 1fr);";
        const squareDivs = document.querySelectorAll('.square');

        squareDivs.forEach(div => {
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "black";
        })});
    } else if (num > 100) {
        alert("Maximum limit is 100.");
        changeGrid();
    } else {
        alert("Please enter a valid number.");
    }
};

function randomRGBA() {
    rgb_btn.innerHTML = "Switch to Black";
    rgb_btn.addEventListener('click', () => {
        blackHover();
        rgb_btn.innerHTML = "Switch to Random RGB";
    })
    const squareDivs = document.querySelectorAll('.square');
    squareDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
            rgbHover(div);
        })
    })
};

let x = Math.round(Math.random()*255), y = Math.round(Math.random()*255), 
z = Math.round(Math.random()*255);
let color;

function rgbHover(input) {
    color = 'rgba(' + x + ', ' + y + ', ' + z + ')';
    input.style.backgroundColor = "" + color;
    colorChange();
};

function colorChange() {
    x = x * 0.9;
    y = y * 0.9;
    z = z * 0.9;
    console.log(x), console.log(y), console.log(z)
    if (x <= 10 && y <= 10 && z <= 10) {
        x = Math.round(Math.random()*255), y = Math.round(Math.random()*255), 
        z = Math.round(Math.random()*255);
        return 'rgba(' + x + ', ' + y + ', ' + z + ')';
    } else {
        return 'rgba(' + x + ', ' + y + ', ' + z + ')';
    }
};


