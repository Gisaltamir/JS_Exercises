'use strict';

function isPrime(number){
    let i = number - 1
    if (number < 1){
        return false;
    }
    while(i >= 2){
        console.log(number)
        if (number % i === 0){
            return false;
        }
        i--;
    }
    return true;
}

let number = parseInt(prompt("Enter a number:"));
let result = isPrime(number);

if (result === true) {
    document.querySelector(".prime").innerHTML = "The number is prime";
}
else{
    document.querySelector(".prime").innerHTML = "The number is not prime";
}