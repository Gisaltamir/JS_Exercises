'use strict';

document.getElementById("source").addEventListener("submit", function() {
    event.preventDefault();
    let firstname = document.forms["source"]["firstname"].value;
    let lastname= document.forms["source"]["lastname"].value;

    document.getElementById("target").innerHTML = "Your name is " + firstname + " " + lastname;
})