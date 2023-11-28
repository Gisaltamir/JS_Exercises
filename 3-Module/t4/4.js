'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


for (let s of students){
  let new_option= document.createElement("option");
  new_option.value= s["id"];
  new_option.innerHTML= s["name"];
  document.getElementById("target").appendChild(new_option);
}