
const container = document.querySelector("#container__shapes");

createShapes = ()=>{

    for (id = 0 ; id < 100 ; id++){
        const newDiv = document.createElement("DIV");
    
        newDiv.id = "newshape" + id;
        newDiv.style.width = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.height = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.borderRadius = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
        newDiv.style.position = "absolute";
        newDiv.style.top = Math.floor(Math.random() * 100 -1) +"%";
        newDiv.style.left = Math.floor(Math.random() * 100 -1) +"%";
        container.appendChild(newDiv)
    }

}

regenShapes = () =>{
    for (id = 0 ; id < 100 ; id++){
        let idd = "newshape"+id;

        const newDiv = document.getElementById(idd)

        newDiv.style.width = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.height = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.borderRadius = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
        newDiv.style.position = "absolute";
        newDiv.style.top = Math.floor(Math.random() * 100 -1) +"%";
        newDiv.style.left = Math.floor(Math.random() * 100 -1) +"%";
        
    }
}


createShapes();

shapes_btn=()=>{
    regenShapes();
}