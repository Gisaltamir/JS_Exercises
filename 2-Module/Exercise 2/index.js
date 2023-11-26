'use strict';

let participants = [];
let number = prompt("How many participants?");
let i = 0;

while (i < number){
    let name=  prompt("Enter participant's name:")
    participants.push(name);
    i++;
}
participants.sort()
function printParticipants(p){
    document.querySelector(".participants").innerHTML += "<li>" + p + "</li>";
}

participants.forEach(printParticipants)
