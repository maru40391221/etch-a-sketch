
const container = document.querySelector(".container");
const smallButton = document.querySelector("#smallButton");
const mediumButton = document.querySelector("#mediumButton");
const largeButton = document.querySelector("#largeButton");
const resetButton = document.querySelector("#reset");



// smallButton.onclick = small;
mediumButton.onclick = medium;
// largeButton.onclick = large;
resetButton.onclick = () => {
    location.reload();
};

//////******************************MEDIUM****************************************///////
//when mediumButton is clicked the following function gets called

function medium () {

//change the number below to change the number of boxes and the number of columns that contains the boxes
    let numberOfBoxes = 16;
    let numberOfLines = 16;


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

mediumButton.disabled = true;
smallButton.style.display = "none";
largeButton.style.display = "none";


}
//////**********************************************************************///////




