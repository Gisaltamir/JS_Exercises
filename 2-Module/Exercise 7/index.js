'use strict';

let dices= [];
let number= 0;
let sides= parseInt(prompt("How many sides are in your dice?"));
function printNumbers(n){
        document.querySelector(".dices").innerHTML += "<li>" + n + "</li>";
}
function rollDice(){
    return (Math.floor(Math.random()*sides)+1);
}

while (number !== sides){
    number= rollDice();
    console.log(number);
    dices.push(number);
}

dices.forEach(printNumbers);