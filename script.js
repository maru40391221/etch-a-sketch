const container = document.querySelector(".container");
let numberOfBoxes = 16;
let numberOfLines = 16;

// container.style.display = "grid";
// container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 0fr)`; 



function createGrid (){
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

createGrid();



