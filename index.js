let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".resetbtn");
let newbtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let turnO=true;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X"
            turnO=true;
        }
        checkwinner();
    })
})

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
    boxes.forEach(box => box.classList.remove("win-sequence"));
}

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]];
        let pos2 = boxes[pattern[1]];
        let pos3 = boxes[pattern[2]];
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    
    if(pos1val!="" && pos2val!="" && pos3val!=""){
        if(pos1val==pos2val && pos2val==pos3val){
            console.log("Winner",pos1val);
            pos1.classList.add("win-sequence");
            pos2.classList.add("win-sequence");
            pos3.classList.add("win-sequence");
            showWinner(pos1val);
        }
    }
  }
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);





