'use strict';

document.getElementById("form").addEventListener("submit", function(evt) {
    evt.preventDefault();
    let word = document.getElementById("query").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${word}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('results').innerHTML = '';
            data.forEach(serie => {
                const article = document.createElement("article");
                const title = document.createElement("h2");
                const image = document.createElement("img");
                const link = document.createElement("a");
                const summary = document.createElement("div");

                title.innerText = serie.show.name;
                link.href = serie.show.url;
                link.target = "_blank";
                image.src = serie.show.image?.medium ? serie.show.image.medium : "https://via.placeholder.com/210x295?text=Not%20Found";
                link.textContent = 'More details';
                image.alt = serie.show.name;
                summary.innerHTML = serie.show.summary;

                article.appendChild(title);
                article.appendChild(link);
                article.appendChild(image);
                article.appendChild(summary);

                document.getElementById("results").appendChild(article);
            });
        })
        .catch(error => {
            console.error(error);
        });
});
