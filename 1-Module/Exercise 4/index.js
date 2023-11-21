'use strict';

let name = prompt("Welcome to Howgarts! Write your name:");

let houses= ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

let index= Math.floor(Math.random()*4);

document.querySelector(".sortingHat").innerHTML = name + ", you are " + houses[index] +".";