'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let n of names){
    document.getElementById("target").innerHTML += "<li>" + n + "</li>"
}