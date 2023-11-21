'use strict';

let year = parseInt(prompt("Insert a year:"));
let code= document.querySelector(".leap");
if (year % 4 === 0) {
    if (year % 100 === 0){
        if( year % 400 === 0) {
            code.innerHTML += year + " is leap";
        }
        else{
            code.innerHTML += year + " is not leap";        }
    }
    else{
        if (year % 100 === 0){
            code.innerHTML += year + " is not leap";
            }
        else{
            code.innerHTML += year + " is leap";
        }}
}
else{
    code.innerHTML += year + " is not leap"
}