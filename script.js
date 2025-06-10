let boxes=document.querySelectorAll('.box');
let resetbtn= document.querySelector('#Reset-btn');
let newBtn=document.querySelector('#new-btn');
let messageContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');

let turnO=true;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
         console.log("clicked");
         if(turnO){
             box.innerHTML='O';
             turnO=false;
         }
         else{
             box.innerHTML='X';
             turnO=true;
         }
         box.disabled=true;
             checkwin(); 
     })
})

const resetgame=()=>{
    turnO=true;
    enableebtn();
    messageContainer.classList.add('hide');
 
}

const disablebtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enableebtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}


const showWinnner=(winner)=>{
    msg.innerHTML=`${winner} won the game`;
    messageContainer.classList.remove('hide');
    disablebtn();
}

const checkwin=()=>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1==pos2 && pos1==pos3 && pos1!="" && pos2!="" && pos3!=""){
            showWinnner(pos1);
            break;
        
}}}
  

resetbtn.addEventListener("click", resetgame);
newBtn.addEventListener("click", resetgame);


