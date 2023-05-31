const container = document.querySelector(".container");
let column;

// create columns
const numberOfColumn = 16;
Array.from({length: numberOfColumn}, () => {
    let box = document.createElement("div")
    column.appendChild(box);
    container.appendChild(column);
    column.classList.add("column");
});

// create rows

const numberOfRow = 16;
Array.from({length: numberOfrow}, () => {

    container.appendChild(column);
    column.classList.add("column");
});






//  the codes below are the first attempt with grid-layout. I failed. Now I will try to make 16x16 grids with flexbox-layout. So they can shrink and whatnot. 
// const container = document.querySelector(".container");
// const smallButton = document.querySelector("#smallButton");
// const mediumButton = document.querySelector("#mediumButton");
// const largeButton = document.querySelector("#largeButton");

// let numberOfBoxes = 16;
// let numberOfLines = 16;

// // container.style.display = "grid";
// // container.style.gridTemplateColumns = `repeat(${numberOfBoxes}, 0fr)`; 
// // mediumButton.onclick = ;


// function createMediumGrid (){
// //creating a line of boxes horizontally
// function createLines (){
//     for (let i = 0; i < numberOfLines; i++){
//         const line = document.createElement("div");
//         container.appendChild(line);
//         line.classList.add("line");
//         line.classList.add("colored");
//         console.log(i);
//     }
// }

// function createBoxes (){
// for (let i = 0; i < numberOfBoxes; i++){
//     createLines();
// }
// }
// createBoxes();

// }

// createMediumGrid();




