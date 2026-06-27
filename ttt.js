let boxes=document.querySelectorAll(".box");
let h1=document.querySelector("#info")
let re=document.querySelector("#re")
let turno=true;
let wp=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerText="O";
            turno=false;
            box.style.pointerEvents = "none"; 
        }
        else{
            box.innerText="X";
            turno=true; 
            box.style.pointerEvents = "none"; 
        }
        console.log("box clicked")
        
checkwinner();
        
    }) 
});



let checkwinner = () => {
    for (let pattern of wp) {
        
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;

        
        if (p1 !== "" && p2 !== "" && p3 !== "") {
           
            if (p1 === p2 && p2 === p3) {
                h1.innerText = `winner:${p1}`;  
                console.log(`${p1} wins!`);
                boxes.forEach((box) => box.style.pointerEvents = "none");
                break;  
            }
        }
    }
}
re.onclick=()=>{
    window.location.reload()
}


