'use strict';

let result = confirm("Should I calculate the square root?");
if (result){
    let number= parseInt(prompt("Insert a number: "));
    if (number < 0){
        document.querySelector(".sqr").innerHTML = "The square root of a negative number is not defined.";
    }
    else{
        document.querySelector(".sqr").innerHTML = Math.sqrt(number);
    }
}
else{
    document.querySelector(".sqr").innerHTML = "The square root is not calculated."
}