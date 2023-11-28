'use strict';

document.getElementById("start").addEventListener("click", function(){
    let sentence= document.getElementById("calculation").value;
    let numbers= format_string(sentence);
    console.log(numbers)
    if (sentence.includes("+")){
        document.getElementById("result").innerHTML = add(numbers[0], numbers[1]) ;
    }
    if (sentence.includes("*")){
       document.getElementById("result").innerHTML = multiply(numbers[0], numbers[1])
    }
    if (sentence.includes("-")){
       document.getElementById("result").innerHTML = subtract(numbers[0], numbers[1])
    }
    if (sentence.includes("/")){
       document.getElementById("result").innerHTML = divide(numbers[0], numbers[1])
    }
})

function format_string(text) {
    let operators = ["+", "-", "/", "*"];
    let numbers = []
    for (let o of operators) {
        let result = text.split(o);
        if (result.length > 1) {
            numbers.push(parseInt(result[0]), parseInt(result[1]));
        }
    }
    return numbers;
}
function add(a, b){
    let result= a + b;
    return (result);
}

function subtract(a, b){
    let result= a - b;
    return result;
}

function divide(a, b){
    let result= a / b;
    return result;
}

function multiply(a, b){
    let result= a * b;
    return result;
}