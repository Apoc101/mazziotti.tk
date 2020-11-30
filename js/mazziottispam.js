function spam() {
    var audio= document.getElementById("mazziottiaudio");
    while (true){
        audio.play();
        alert("MAZZIOTTI"); 
    }
}




document.getElementById("bottone").addEventListener("click", spam)

