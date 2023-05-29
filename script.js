const container = document.querySelector(".container");
const smallButton = document.querySelector("#smallButton");
const mediumButton = document.querySelector("#mediumButton");
const largeButton = document.querySelector("#largeButton");

let numberOfBoxes = 16;
let numberOfLines = 16;

// container.style.display = "grid";
// container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 0fr)`; 

// mediumButton.onclick = ;


function createMediumGrid (){
//creating a line of boxes horizontally
function createLines (){
    for (let i = 0; i < numberOfLines; i++){
        const line = document.createElement("div");
        container.appendChild(line);
        line.classList.add("line");
        line.classList.add("colored");
        console.log(i);
    }
}

function createBoxes (){
for (let i = 0; i < numberOfBoxes; i++){
    createLines();
}
}
createBoxes();

}

createMediumGrid();




