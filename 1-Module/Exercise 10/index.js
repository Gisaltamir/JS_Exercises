'use strict';

let dice = parseInt(prompt("Insert the number of dice:"));
let final_number = parseInt(prompt("Insert your desired result:"));
let test = 10000;
let counter = 0;

function rollDice(){
    let roll= Math.floor(Math.random() * 6) + 1
    return roll;
}

for (let i = 0; i < test; i++) {
    let total = 0;
    for (let j = 0; j < dice; j++) {
        total += rollDice();
    }
    if (final_number === total) {
        counter++;
    }
}

let probability = (counter / test) * 100;
document.getElementById("Probability").innerHTML = "<p>" + "The probability to get " + final_number + " with " + dice + " dices is " + probability.toFixed(2) + "%." + "</p>";
