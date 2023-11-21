'use strict';

let start= parseInt(prompt("Insert the starting year:"))
let finish= parseInt(prompt("Insert the starting year:"))

while(start <= finish) {
    let code = document.querySelector(".years");

    if (start % 4 === 0) {
        if (start % 100 === 0 && start % 400 === 0) {
            code.innerHTML += "<li>" + start + " is leap</li>";
        } else {
            code.innerHTML += "<li>" + start + " is leap</li>";
        }
    }
    start++;
}