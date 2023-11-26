'use strict';

let candidates_list= []
let candidates= prompt("How many candidates?")

let i = 0;
while (i < candidates){
    let name= prompt("Name for candidate " + i + ":");
    let cand= {"name": name, "votes": 0}
    candidates_list.push(cand);
    i++
}

let voters= parseInt(prompt("How many voters?"));
let j = 0;

while (j < voters){
    let vote= prompt("Insert the name of the candidate you want to vote for:");
    for(let c of candidates_list){
        if (c["name"] === vote){
            c["votes"]++;
        }
    }
    j++;
}

candidates_list.sort((a, b) => b.votes - a.votes);

let winner= candidates_list[0];

console.log("The winner is " + winner["name"] + " with " + winner["votes"] +  " votes.")
console.log("results:")
for (let c of candidates_list.sort()){
    console.log(c["name"] + ": " + c["votes"] + " votes")
}