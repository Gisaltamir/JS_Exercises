'use strict';

let numbers= []
let number = parseInt(prompt("Enter a number:"))

while (!numbers.includes(number)){
    numbers.push(number);
    number = parseInt(prompt("Enter a number:"));
}

console.log("The number " + number + " already exists!");

function sortNumbers(numbers){
    let i = 0;
    let length= numbers.length;
    let ordered_numbers= [];
    while(i !== length){
        let smallest = Math.min.apply(null, numbers);
        ordered_numbers.push(smallest);
        let index =numbers.indexOf(smallest);
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