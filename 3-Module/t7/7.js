'use strict'

document.getElementById("trigger").addEventListener("mouseover", function(){
    document.getElementById("target").src= "img/picB.jpg";
})

document.getElementById("trigger").addEventListener("mouseout", function(){
    document.getElementById("target").src= "img/picA.jpg";
})