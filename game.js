// Declaring variables
//submil button
//message
//lives

const $submitbutton = document.getElementById("submit")
const $message = document.getElementById("message")
const $lives = document.getElementById("lives")

const guessNumber = Math.round(Math.random() * 100);

var message;
var lives = 10;

// Game function

$submitbutton.onclick =()=>{
console.log(guessNumber);
let userInput = document.getElementById("number-input").value;
lives --;
if(userInput === guessNumber){
location.herf= "./win.html";
}
else if(lives ===0){
location.href="./lose.html";
}
else if(userInput < guessNumber){
message=`Oops 😶! Your message is too low. You have ${lives} lives remaining.`;
}
else if(userInput > guessNumber){
message=`Oops 😶! Your message is too high. You have ${lives} lives remaining.`;
}

$message.style.display="inherit";
$message.innerHTML=message;
$lives.innerHTML=lives;
}

