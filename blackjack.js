'use strict';

//initialize phase
let cp=0;
let firstcard=Math.floor(Math.random()*13)+1;
console.log('firstcard'+firstcard);
let secondcard=Math.floor(Math.random()*13)+1
console.log('secondcard'+secondcard);
let card=0;
let cardarr=[firstcard,secondcard];
let sum=random_ifelse(firstcard)+random_ifelse(secondcard);
console.log('cardarray'+cardarr);
console.log('sum'+sum);
let arrlength=cardarr.length;
let messageEl= document.querySelector('#message-el');
let sumEl=document.querySelector('#sum');
let cardEl=document.querySelector('#card-el');
let imgEl=document.querySelector('#one');
let resetmsg=messageEl.textContent;

let player = {
    name:'Aayush Gurung ',
    chips:145
}
document.getElementById('bet-id').textContent=player.name +"  :  "+player.chips;
function bet(){
    console.log(player.name);
    cp=document.getElementById('bet-id-input').value;
    player.chips= player.chips - parseInt(cp);
    console.log(player.chips);
    document.getElementById('bet-id').textContent=player.name +"  :  "+player.chips;
}
const buttonEnds=document.querySelector('#newcard-btn');
buttonEnds.disabled=true;
const startgamebtn=document.querySelector('#startgame-btn');
startgamebtn.disabled=false;
document.getElementById('newcard-btn').style.display='none';

let message="";

//audio section
var button = document.getElementById('startgame-btn');
var audio = document.getElementById('audio');
var startaudio = document.getElementById('start-audio');
var wonaudio=document.getElementById('won-audio');
wonaudio.volume=0.2;

var onClick = function() {
    audio.play(); // audio will load and then play
};

button.addEventListener('click', onClick);

function startgame(){
    startaudio.play();
    bet();
    rendergame();
    startgamebtn.disabled=true;
    buttonEnds.disabled=false;
    document.getElementById('newcard-btn').style.display='initial';
    document.getElementById('startgame-btn').style.display='none';
}

function reset(){
    firstcard=Math.floor(Math.random()*12)+2;
    secondcard=Math.floor(Math.random()*12)+2;
    cardarr=[firstcard,secondcard];
    document.querySelector('#newcard-btn').innerHTML="NEW CARD";
    sum=firstcard+secondcard;
    messageEl.textContent=resetmsg;
    sumEl.textContent=" ";
    cardEl.textContent=" ";
    imgEl.textContent=" ";
    buttonEnds.disabled=true;
    document.getElementById('newcard-btn').style.display='none';
    document.getElementById('startgame-btn').style.display='initial';
    arrlength=cardarr.length;
    startgamebtn.disabled=false;
}

function rendergame(){
    if(sum<=20){
        message = "Draw a new card";
        document.getElementById('bet-id').textContent=player.name +"  :  "+player.chips;
    }
    else if(sum===21){
        message = "You have blackjack";
        document.querySelector('#newcard-btn').innerHTML="PLAY AGAIN??";
        player.chips = cp*2+player.chips;
        document.getElementById('bet-id').textContent=player.name +"  :  "+player.chips;
        startgamebtn.disabled=true;
        wonaudio.play();
    }
    else{
        message = "You are out of the game";
        document.querySelector('#newcard-btn').innerHTML="PLAY AGAIN??";
        startgamebtn.disabled=true;
        player.chips=player.chips+parseInt(cp);
        document.getElementById('bet-id').textContent=player.name +"  :  "+player.chips;
    }
    console.log(message);
    messageEl.textContent=message;
    cardEl.textContent=" ";
    cardarrprint();
    sumEl.textContent=sum;
}
function newcard(){
    startaudio.play();
    startgamebtn.disabled=true;
    imgEl.textContent=" ";
    if(sum>21||sum===21){
        reset();
    }
    else if(sum<=21){
    let card=Math.floor(Math.random()*13)+1;
    let card_temp=random_ifelse(card);
    sum+=card_temp;
    cardarr.push(card);
    arrlength=cardarr.length;
    rendergame();
    if(sum===21||sum>21){
        document.querySelector('#newcard-btn').innerHTML="PLAY AGAIN??";
    }  
}
}

function cardarrprint(){
    let imgarray=['trans.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg','11.jpg','12.jpg','13.jpg'];
   
    for (let index = 0; index < arrlength; index++) {
        console.log(cardarr[index]);
        let cardarrvalue=cardarr[index];
        let img = document.createElement("img");
        img.style.width=55+50+"px";
        img.style.height=79+50+"px";
        img.style.padding="5px";
        img.style.margin="5px";
        img.style.border="none";
        img.style.boxShadow="1px 1px 5px 1px #53527A ";
        img.src=imgarray[cardarrvalue];
        // let block=document.getElementById("card-el");
        // block.appendChild(img);
        let block=document.getElementById("one");
        block.appendChild(img);     
          
    }
}

function random_ifelse(card){
    if(card === 1){
        return 11;
    }
    else if(card >= 10) {
        return 10;
    }
    else{
        return card;
    }
}
