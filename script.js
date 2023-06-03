
const container = document.querySelector(".container");
const smallButton = document.querySelector("#smallButton");
const mediumButton = document.querySelector("#mediumButton");
const largeButton = document.querySelector("#largeButton");
const resetButton = document.querySelector("#reset");


smallButton.onclick = small;
mediumButton.onclick = medium;
largeButton.onclick = large;
resetButton.onclick = () => {
    location.reload();
};

//////******************************MEDIUM****************************************///////
//when mediumButton is clicked the following function gets called

function medium () {

//change the number below to change the number of boxes and the number of columns that contains the boxes
    let numberOfBoxinColumn = 16;
    let numberOfBoxinRow = 16;


function createMediumGrid (){

//creating a line of boxes horizontally
    function createLines (){
    for (let i = 0; i < numberOfBoxinRow; i++){
        const line = document.createElement("div");
        container.appendChild(line);
        line.classList.add("mediumLine");
        line.classList.add("colored");
    }
}

function createBoxes (){
for (let i = 0; i < numberOfBoxinColumn; i++){
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




//////*********************************SMALL*************************************///////
//when smallButton is clicked the following function gets called

function small () {

    //change the number below to change the number of boxes and the number of columns that contains the boxes
        let numberOfBoxinColumn = 30;
        let numberOfBoxinRow = 32;
    
    
    function createMediumGrid (){
    
    //creating a line of boxes horizontally
        function createLines (){
        for (let i = 0; i < numberOfBoxinRow; i++){
            const line = document.createElement("div");
            container.appendChild(line);
            line.classList.add("smallLine");
            line.classList.add("colored");
            console.log(i);
        }
    }
    
    function createBoxes (){
    for (let i = 0; i < numberOfBoxinColumn; i++){
        createLines();
    }
    }
    createBoxes();
    
    }
    
    createMediumGrid();
    
    smallButton.disabled = true;
    mediumButton.style.display = "none";
    largeButton.style.display = "none";
    container.style.display = "grid";  
    container.style.gridTemplateColumns = "repeat(32, 0fr)";
    
    
    }





//////*********************************LARGE*************************************///////

function large () {

    //change the number below to change the number of boxes and the number of columns that contains the boxes
        let numberOfBoxinColumn = 16;
        let numberOfBoxinRow = 8;
    
    
    function createMediumGrid (){
    
    //creating a line of boxes horizontally
        function createLines (){
        for (let i = 0; i < numberOfBoxinRow; i++){
            const line = document.createElement("div");
            container.appendChild(line);
            line.classList.add("largeLine");
            line.classList.add("colored");
            console.log(i);
        }
    }
    
    function createBoxes (){
    for (let i = 0; i < numberOfBoxinColumn; i++){
        createLines();
    }
    }
    createBoxes();
    
    }
    
    createMediumGrid();
    
    largeButton.disabled = true;
    smallButton.style.display = "none";
    mediumButton.style.display = "none";
    
    
    }


