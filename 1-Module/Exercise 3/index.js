'use strict';

let number1 = parseInt(prompt("Insert the first number"));
let number2 = parseInt(prompt("Insert the second number"));
let number3 = parseInt(prompt("Insert the third number"));

let sum= number1 + number2 + number3;
let mult = number1 * number2 * number3;
let average = sum / 3;

document.querySelector(".sum").innerHTML += sum;
document.querySelector(".mul").innerHTML += mult;
document.querySelector(".ave").innerHTML += average;
