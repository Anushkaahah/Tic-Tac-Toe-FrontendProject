let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgamebtn =document.querySelector("#newGame");
let container = document.querySelector(".msgclass");
let para=document.querySelector("#msgtext");


let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log("box was clicked")
        if(turnO === true){
            box.innerText="O";
            box.style.color= "green" ;
            turnO = false ;
        }else{
            box.innerText="X";
            box.style.color="orange";
            turnO = true;
        }
        box.disabled = true ;
        checkWinner();
    })
})

const showwinner=(winner) => {
    para.innerText=`Congrats,winner is ${winner}`;
    container.classList.remove("hide");
}

const disableboxes=()=> {
    for(let box of boxes){
        box.disabled= true;
    }
}
const enableboxes=()=> {
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
};
const resetGame = () => {
    turnO = true;
    enableboxes();
    container.classList.add("hide");
    alert("GAME RESTARTED");
};

const checkWinner = () => {
    for( let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 !="" && posVal2 !="" && posVal3 !=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                console.log("Congrats you won!",posVal1);
                showwinner(posVal1);
                disableboxes();
            }
        }
    }
}

const hover = () =>{
    resetbtn.style.backgroundColor="white";
    resetbtn.style.color = "black";
}
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("mouseover",hover);
