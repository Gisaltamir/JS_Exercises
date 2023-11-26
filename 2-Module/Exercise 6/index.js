'use strict';

let dices= [];
let number= 0;
function printNumbers(n){
        document.querySelector(".dices").innerHTML += "<li>" + n + "</li>";
}
function rollDice(){
    return (Math.floor(Math.random()*6)+1);
}

while (number !== 6){
    number= rollDice();
    console.log(number);
    dices.push(number);
}

dices.forEach(printNumbers);