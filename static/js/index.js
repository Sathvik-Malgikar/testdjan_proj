hw = document.querySelector("#hw")
img = document.querySelector("#img")
set =1 

drawglobe = () => {
    if(set){
        console.log("if");
        img.classList.add("visible")
        set=0
    }
    else{
    console.log("else");
    set =1
    
    img.classList.remove("visible")
    }
}

hw.addEventListener('click',drawglobe)