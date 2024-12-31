let boxes=document.querySelectorAll(".box");
let reset_btn=document.querySelector(".reset");
let p1=document.querySelector("#p1");
let player1=document.querySelector(".p1");
let p2=document.querySelector("#p2");
let player2=document.querySelector(".p2");
let message=document.querySelector("#message");
let msg=document.querySelector(".msg");
let boxX=true;
let count=-1;

let wp=[[0,1,2], [3,4,5],[6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

function winnerP() {
    for (win of wp){
        if (boxes[win[0]].innerHTML==="X" && boxes[win[1]].innerHTML==="X" && boxes[win[2]].innerHTML==="X"){
            message.innerHTML=`Congratulations, You : WON`;
            msg.style.display="flex";
            player1.style.border="2px solid white";
            player2.style.border="none";

            p1.innerHTML=Number(p1.innerHTML) +1;
            return true;

        }
        if (boxes[win[0]].innerHTML==="O" && boxes[win[1]].innerHTML==="O" && boxes[win[2]].innerHTML==="O"){
            message.innerHTML=`Congratulations, P2 : WON`;
            msg.style.display="flex";


            player2.style.border="2px solid white";
            player1.style.border="none";

            p2.innerHTML=Number(p2.innerHTML) + 1;
            return true;

        }
        
    }
}


boxes.forEach(
    (box)=>{
        box.addEventListener("click",()=>{
            count+=1;
            if (boxX){
                box.innerHTML="X"; 
                boxX=false;
            }
            else{
                box.innerHTML="O";
                boxX=true

            }
            box.style.pointerEvents="none";
    
            
            if ((winnerP()) || (count==8 && winnerP()!==true)){
                if (count==8 && winnerP()!==true){
                    message.innerHTML=`Oops, Match : TIED`;
                    msg.style.display="flex";
                }

                count=-1;
                boxes.forEach(
                    (box)=>{
                        box.innerHTML=""; 
                        box.style.pointerEvents="all";
                    })

            }
        })
    }

)

reset_btn.addEventListener("click",()=>{
    document.querySelector(".btn").classList.add('clicked');
    setTimeout(() => {
        document.querySelector(".btn").classList.remove('clicked');
    }, 200);
    p1.innerHTML=0;
    p2.innerHTML=0;
    
    boxes.forEach(
        (box)=>{
            box.innerHTML=""; 
            box.style.pointerEvents="all";
        })
})

