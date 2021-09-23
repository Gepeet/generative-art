const box = document.querySelector('#box');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');

const grid = document.querySelector('#grid');
const grid2 = document.querySelector('#grid2');
const grid3 = document.querySelector('#grid3');
const grid4 = document.querySelector('#grid4');
const grid5 = document.querySelector('#grid5');
const grid6 = document.querySelector('#grid6');


changeBoxGrid = () =>{
    const allGrid = [grid,grid2,grid3,grid4,grid5,grid6]
    for(let i = 0 ; i < allGrid.length; i++){
        console.log(allGrid[i])
        allGrid[i].style.width = Math.floor(Math.random() * 500 + 1) +"px";
        allGrid[i].style.height = Math.floor(Math.random() * 500 + 1) +"px";
        allGrid[i].style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
}

generate = () =>{
    location.reload();
}


changeBoxFlex = () =>{
    const allBox = [box,box2,box3,box4,box5,box6];
    for(let i = 0 ; i < allBox.length ; i++){
        allBox[i].style.width = Math.floor(Math.random() * 500 + 1) +"px";
        allBox[i].style.height = Math.floor(Math.random() * 500 + 1) +"px";
        allBox[i].style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
}

changeBoxFlex()
changeBoxGrid()