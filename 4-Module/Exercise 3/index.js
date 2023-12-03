'use strict';

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let word= document.querySelector("input[name= 'word']").value;
    console.log(word);
    fetch(`https://api.chucknorris.io/jokes/search?query=${word}`)
        .then(response => response.json())
        .then(data => {
            let jokesContainer =document.getElementById("jokes");
            jokesContainer.innerHTML = "";
            if (data.result && data.result.length > 0) {
                data.result.forEach(joke=> {
                    const article= document.createElement("article");
                    const p = document.createElement("p");
                    p.textContent= joke.value;
                    article.appendChild(p);

                    document.getElementById("jokes").appendChild(article);
                })
            }
            else{
                 jokesContainer.innerHTML = 'No jokes found.';
            }
        }).catch(e => console.log(e))
})