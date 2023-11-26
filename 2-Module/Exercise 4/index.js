'use strict';

let numbers= []
let number = parseInt(prompt("Enter a number:"))

while (number !== 0){
    numbers.push(number);
    number = parseInt(prompt("Enter a number:"));
}

function sortNumbers(numbers){
    let i = 0;
    let length= numbers.length;
    let ordered_numbers= [];
    while(i !== length){
        let largest = Math.max.apply(null, numbers);
        ordered_numbers.push(largest);
        let index =numbers.indexOf(largest);
        numbers.splice(index, 1);
        i++;
    }
    return ordered_numbers;
}
let new_list= sortNumbers(numbers);

function printNumbers(n){
    document.querySelector(".numbers").innerHTML += "<li>" + n + "</li>";
}

new_list.forEach(printNumbers);
console.log(new_list);
