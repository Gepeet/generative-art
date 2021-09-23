// TODO 
// create a item div
// create a content in the div

//append the item div inside the container
//edit the with of the content

function createDiv(){

    for(let i = 0 ; i < 5 ; i++){
        const container = document.querySelector("#container__jsflex");

        const divItem = document.createElement("DIV");
        divItem.id = "newdiv" + i; 
        divItem.style.width = Math.floor(Math.random() * 500 + 1) +"px";
        divItem.style.height = Math.floor(Math.random() * 500 + 1) +"px";
        divItem.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
        container.appendChild(divItem)
    }   
}

createDiv();