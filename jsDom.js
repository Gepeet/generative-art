// TODO 
// create a item div
// create a content in the div

//append the item div inside the container
//edit the with of the content

function createDiv(){

    for(let i = 0 ; i < 100 ; i++){
        const container = document.querySelector("#container__jsflex");

        const divItem = document.createElement("DIV");
        divItem.id = "newdiv" + i; 
        // divItem.style.borderRadius = Math.floor(Math.random() * 100 + 1) +"px";
        divItem.style.flex = Math.floor(Math.random() * 300 + 1) +"px";
        divItem.style.height = 200 + "px";
        divItem.style.border = "solid", 1+ "px", "black";
        divItem.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
        container.appendChild(divItem)
    }   
}

regenDiv = () =>{


    for(let i = 0 ; i < 100 ; i++){

        let itemID = "newdiv" + i; 

        const item = document.getElementById(itemID);
        item.style.flex = Math.floor(Math.random() * 300 + 1) +"px";
        item.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
    }   
}

jsflex_btn = () =>{
    regenDiv();
}

// setInterval(regenDiv,100);

createDiv();

// setInterval(regenDiv, 5000)