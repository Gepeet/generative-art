
const container_triangle = document.querySelector("#container__triangle");
console.log(container)
createDiv = () =>{
    for(id = 0; id< 500; id++){

        const newDiv = document.createElement("DIV");

        let random_boolean = Math.random() < 0.5;

        newDiv.id = "newDiv"+id;
        container_triangle.appendChild(newDiv)
        if(random_boolean < .5){
            newDiv.className = "triangle-bottomright";
            newDiv.style.borderBottomColor="#" + Math.floor(Math.random()*16777215).toString(16);
        }else{
            newDiv.className= "triangle-bottomleft";
            newDiv.style.borderBottomColor="#" + Math.floor(Math.random()*16777215).toString(16);
        }
        
        
    }
}

regenTriangle=()=>{
    for(id = 0; id< 500; id++){

        const newDiv = "newDiv"+id;
        let idd = document.getElementById(newDiv);
        let random_boolean = Math.random() < 0.5;

        if(random_boolean < .5){
            idd.className = "triangle-bottomright";
            idd.style.borderBottomColor="#" + Math.floor(Math.random()*16777215).toString(16);
        }else{
            idd.className= "triangle-bottomleft";
            idd.style.borderBottomColor="#" + Math.floor(Math.random()*16777215).toString(16);
        }
        
        
    }
}

createDiv();
triangles_btn= ()=>{
    regenTriangle();
}