const shadowContainer = document.querySelector("#shadow")

createShadow = ()=>{
    for(id = 0 ; id < 20 ; id++){
        const newDiv = document.createElement("DIV");

        shadowContainer.id = "shadow"+id;

        newDiv.style.height = "50vh";
        newDiv.style.width = "50vh";
        newDiv.style.borderRadius = "50%";
        newDiv.style.border = "none";
        newDiv.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);;
        newDiv.style.position = "absolute";
        newDiv.style.top = Math.floor(Math.random() * 100 -1) +"%";
        newDiv.style.left = Math.floor(Math.random() * 100 -1) +"%";

        shadowContainer.appendChild(newDiv)
    }
}

createShadow();