'use strict';

let words= ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(words){
    let sentence =""
    for(let w of words){
        sentence += w;
    }
    return sentence;
}

let sentence = concat(words);
document.querySelector(".new-string").innerHTML = sentence;