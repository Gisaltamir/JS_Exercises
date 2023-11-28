'use strict';

document.getElementById("start").addEventListener("click", function(){
    let a= parseInt(document.getElementById("num1").value);
    let b= parseInt(document.getElementById("num2").value);
    let value = document.getElementById("operation").value;
    if (value === "add"){
        document.getElementById("result").innerHTML = add(a, b) ;
    }
    if (value === "multi"){
       document.getElementById("result").innerHTML = multiply(a, b)
    }
    if (value === "sub"){
       document.getElementById("result").innerHTML = subtract(a, b)
    }
    if (value === "div"){
       document.getElementById("result").innerHTML = divide(a, b)
    }
})

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