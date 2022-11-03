const square = document.createElement("div");
square.style.border = "1px solid green";
square.style.display = "block";

const container = document.querySelector(".container");

let squareNumber = 256;

for (let i = 0; i < squareNumber; i++) {
    container.appendChild(square.cloneNode());
};

