let gameSeq =[];
let userSeq =[];
let started = false;
let level =0;

let btns = ["yellow","purple","red","green"]
h2= document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started..!!")
        started = true;


        levelup();
    }

});

function btnFlash(btn){
    btn.classList.add("flash");
    // console.log("added class");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250); 

}

function levelup(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*3);
    let ranclr = btns[ranIdx];
    let ranbtn = document.querySelector(`.${ranclr}`)
    // console.log(ranIdx);
    // console.log(ranclr);
    // console.log(ranbtn);
    gameSeq.push(ranclr);
    console.log(gameSeq);
    btnFlash(ranbtn);
}

function btnpress(){
   let btn = this;
   btnFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   console.log(userSeq);

   checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function checkAns(idx){
    if (userSeq[idx]== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game Over. Your score was <b> ${level} </b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}