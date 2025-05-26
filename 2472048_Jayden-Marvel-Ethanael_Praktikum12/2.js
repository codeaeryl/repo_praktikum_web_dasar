function showFilm() {
    document.querySelector("button").remove()
    fetch("Datamovie.json")
    .then(response => response.json())
    .then(data =>{
        for (let i=0; i<7; i++) {
            // create div.card
            var newDiv=document.createElement("div");
            newDiv.classList.add("card")
            // append img
            var image=document.createElement("img");
            image.src=data[i].img
            newDiv.appendChild(image)

            // append title
            var title=document.createElement("h2");
            title.innerHTML=data[i].title
            newDiv.appendChild(title)

            // append genre
            var genre=document.createElement("p");
            genre.innerHTML=data[i].genre;
            newDiv.appendChild(genre);

            // append div.card
            var container=document.querySelector(".content");
            container.appendChild(newDiv);
        }
    });
}