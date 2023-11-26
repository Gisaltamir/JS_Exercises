'use strict';

let numbers= [2, 7, 4, 99];

function even(numbers){
    let new_array = []
    for(let n of numbers){
        if (n % 2 === 0){
            new_array.push(n);
        }
    }
    return new_array;
}

function printNumbers(numbers, ul_class){
    for (let n of numbers){
        document.querySelector(ul_class).innerHTML += "<li>" + n + "</li>";
    }
}

printNumbers(numbers, ".normal")
printNumbers(even(numbers), ".even")