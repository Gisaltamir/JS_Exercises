'use strict';

let numbers= [];
let i = 0;
let reverse_numbers= [];

while (i < 5){
    let number = prompt("Insert a number: ");
    numbers.push(number);
    i++;
}
i = 0;

while(i < numbers.length){
    reverse_numbers.push(numbers.pop());
}
function printNumbers(n){
    document.querySelector(".number-list").innerHTML += "<li>" + n + "</li>";
}

console.log(reverse_numbers)
reverse_numbers.forEach(printNumbers)

