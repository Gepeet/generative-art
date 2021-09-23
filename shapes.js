
const container = document.querySelector("#container__shapes");

createShapes = ()=>{

    for (id = 0 ; id < 1000 ; id++){
        const newDiv = document.createElement("DIV");

        const random = Math.floor(Math.random() * 100 -1);
        // console.log(random)
    
        newDiv.id = "newshape" + id;
        newDiv.style.width = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.height = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.borderRadius = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
        newDiv.style.position = "absolute";
        newDiv.style.top = Math.floor(Math.random() * 100 -1) +"%";
        newDiv.style.left = Math.floor(Math.random() * 100 -1) +"%";
        // newDiv.style.borderLeft = random + "px "+"solid "+ "transparent";
        newDiv.style.transform = "rotate"+"("+random+"deg)";
        container.appendChild(newDiv);
    }

}

regenShapes = () =>{
    for (id = 0 ; id < 1000 ; id++){
        let idd = "newshape"+id;

        const newDiv = document.getElementById(idd)

        newDiv.style.width = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.height = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.borderRadius = Math.floor(Math.random() * 300 + 1) +"px";
        newDiv.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
        newDiv.style.position = "absolute";
        newDiv.style.top = Math.floor(Math.random() * 100 -1) +"%";
        newDiv.style.transform = "rotate",(Math.floor(Math.random() * 100)+"deg");
        newDiv.style.left = Math.floor(Math.random() * 100 -1) +"%";
        
    }
}


createShapes();

shapes_btn=()=>{
    regenShapes();
}