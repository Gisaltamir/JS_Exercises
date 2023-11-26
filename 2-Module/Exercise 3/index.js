'use strict';

let dogs = [];
let i = 0;

while (i < 6){
    let name=  prompt("Enter dog's name:")
    dogs.push(name);
    i++;
}
dogs.sort()
dogs.reverse()
function printDogs(d){
    document.querySelector(".dogs").innerHTML += "<li>" + d + "</li>";
}

dogs.forEach(printDogs)
