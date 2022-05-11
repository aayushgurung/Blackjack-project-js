'use strict';

let firstcard=Math.floor(Math.random()*14)+1;
let secondcard=Math.floor(Math.random()*14)+1;
let card=0;
let cardarr=[firstcard,secondcard];
let sum=firstcard+secondcard;
let arrlength=cardarr.length;
let messageEl= document.querySelector('#message-el');
let sumEl=document.querySelector('#sum');
let cardEl=document.querySelector('#card-el');
let resetmsg=messageEl.textContent;
const buttonEnds=document.querySelector('#newcard-btn');
buttonEnds.disabled=true;
document.getElementById('newcard-btn').style.display='none';

let message="";

function reset(){
    firstcard=Math.floor(Math.random()*14)+1;
    secondcard=Math.floor(Math.random()*14)+1;
    cardarr=[firstcard,secondcard];
    document.querySelector('#newcard-btn').innerHTML="NEW CARD";
    sum=firstcard+secondcard;
    messageEl.textContent=resetmsg;
    sumEl.textContent=" ";
    cardEl.textContent=" ";
    buttonEnds.disabled=true;
    document.getElementById('newcard-btn').style.display='none';
    arrlength=cardarr.length;
}
function startgame(){
    rendergame();
    buttonEnds.disabled=false;
    document.getElementById('newcard-btn').style.display='initial';
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
    if(sum>21||sum===21){
        reset();
    }
    else if(sum<=21){
    let card=Math.floor(Math.random()*14)+1;
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
    for (let index = 0; index < arrlength; index++) {
        cardEl.textContent+= " " +cardarr[index];
    }

}


