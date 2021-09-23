const box = document.querySelector('#box');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');
const box5 = document.querySelector('#box5');
const box6 = document.querySelector('#box6');



changeCss = () =>{
    const allBox = [box,box2,box3,box4,box5,box6];
    for(let i = 0 ; i < allBox.length ; i++){
        allBox[i].style.width = Math.floor(Math.random() * 500 + 1) +"px";
        allBox[i].style.height = Math.floor(Math.random() * 500 + 1) +"px";
        allBox[i].style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
}

changeCss()