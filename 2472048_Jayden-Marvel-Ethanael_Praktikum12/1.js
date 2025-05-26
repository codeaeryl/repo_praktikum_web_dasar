function setContent() {
    fetch("1.json")
    .then(response => response.json())
    .then(data =>{
        for (let i=0; i<5; i++) {
            // create div.card
            var newDiv=document.createElement("div");
            newDiv.classList.add("card")
            // append img
            var image=document.createElement("img");
            image.src=data.arrayImg[i]
            newDiv.appendChild(image)

            // append name
            var nama=document.createElement("div");
            nama.innerHTML=data.arrayNama[i]
            nama.className="name"
            newDiv.appendChild(nama)

            // append desc
            var desc=document.createElement("p");
            desc.innerHTML=data.arrayDesc[i]
            newDiv.appendChild(desc)

            // append harga
            var harga=document.createElement("div");
            harga.innerHTML="Rp. "+data.arrayHarga[i]
            newDiv.appendChild(harga)

            // append div.card
            var container=document.querySelector(".container");
            container.appendChild(newDiv);
        }
    });
};
setContent()