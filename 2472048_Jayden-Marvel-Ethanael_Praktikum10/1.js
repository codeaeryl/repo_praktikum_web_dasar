// 2472048 - Jayden Marvel Ethanael //
let n=0
function addList() {
    listElement=prompt("Masukkan hal yang harus dilakukan")
    if (listElement != null) {
        const li = document.createElement("li");
        li.id="list"+n
        li.addEventListener('click', (e) => {
            cross=confirm("Sudah mengerjakan tugas ini?");
            if (cross) {
                document.getElementById(e.target.id).style.textDecoration="line-through"
            } else {
                document.getElementById(e.target.id).style.textDecoration="none"
            }
        });
        const node = document.createTextNode(listElement);
        li.appendChild(node);

        const element = document.getElementById("list");
        element.appendChild(li);
        n+=1
    }
}