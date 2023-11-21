'use strict';

let number = prompt("How many rolls?");

let i = 0;
let total = 0;

while (i < number){
    let dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dices").innerHTML+= "<li>Dice number "+ ++i + ": <strong>" + dice + "</strong></li>";
    total += dice;
}

document.querySelector(".result").innerHTML= "Your score is " + total + ".";

console.log("Your score is " + total + ".")