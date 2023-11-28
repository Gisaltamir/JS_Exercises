'use strict';

let target= document.getElementById("target");

let new_list_1= document.createElement("li");
let new_list_2= document.createElement("li");
let new_list_3= document.createElement("li");

target.appendChild(new_list_1);
target.appendChild(new_list_2);
target.appendChild(new_list_3);

new_list_2.className= "my-item";
new_list_1.innerHTML = "First Item";
new_list_2.innerHTML = "Second Item";
new_list_3.innerHTML = "Third Item";

