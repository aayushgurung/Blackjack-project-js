'use strict';

let firstcard=Math.floor(Math.random()*13)+1;
let secondcard=Math.floor(Math.random()*13)+1;
let card=0;
let cardarr=[firstcard,secondcard];
let sum=firstcard+secondcard;
let arrlength=cardarr.length;
let messageEl= document.querySelector('#message-el');
let sumEl=document.querySelector('#sum');
let cardEl=document.querySelector('#card-el');
let imgEl=document.querySelector('#one');
let resetmsg=messageEl.textContent;

const buttonEnds=document.querySelector('#newcard-btn');
buttonEnds.disabled=true;
document.getElementById('newcard-btn').style.display='none';

let message="";

function startgame(){
    rendergame();
    buttonEnds.disabled=false;
    document.getElementById('newcard-btn').style.display='initial';
}

function reset(){
    firstcard=Math.floor(Math.random()*13)+1;
    secondcard=Math.floor(Math.random()*13)+1;
    cardarr=[firstcard,secondcard];
    document.querySelector('#newcard-btn').innerHTML="NEW CARD";
    sum=firstcard+secondcard;
    messageEl.textContent=resetmsg;
    sumEl.textContent=" ";
    cardEl.textContent=" ";
    imgEl.textContent=" ";
    buttonEnds.disabled=true;
    document.getElementById('newcard-btn').style.display='none';
    arrlength=cardarr.length;
}

function rendergame(){
    if(sum<=20){
        message = "Draw a new card";
    }
    else if(sum===21){
        message = "You have blackjack";
        document.querySelector('#newcard-btn').innerHTML="PLAY AGAIN??";
    }
    else{
        message = "You are out of the game";
        document.querySelector('#newcard-btn').innerHTML="PLAY AGAIN??";
    }
    console.log(message);
    messageEl.textContent=message;
    cardEl.textContent=" ";
    cardarrprint();
    sumEl.textContent=sum;
}
function newcard(){
    imgEl.textContent=" ";
    if(sum>21||sum===21){
        reset();
    }
    else if(sum<=21){
    let card=Math.floor(Math.random()*13)+1;
    sum+=card;
    cardarr.push(card);
    arrlength=cardarr.length;
    rendergame();
    if(sum===21||sum>21){
        document.querySelector('#newcard-btn').innerHTML="PLAY AGAIN??";
    }  
}
}

function cardarrprint(){
    let imgarray=['0','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg'];
   
    for (let index = 0; index < arrlength; index++) {
        cardEl.textContent+= " " +cardarr[index];
        let cardarrvalue=cardarr[index];
        let img = document.createElement("img");
        img.style.width="55px";
        img.style.height="79px";
        img.style.padding="10px";
        img.src=imgarray[cardarrvalue];
        // let block=document.getElementById("card-el");
        // block.appendChild(img);
        let block=document.getElementById("one");
        block.appendChild(img);     
          
    }
    

}
