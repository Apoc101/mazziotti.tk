function playaudio() {
    var audio=document.getElementById("audiosesso");
    audio.play();
}

document.getElementById("bottone").addEventListener("click", playaudio);

function menu() {
    document.getElementById("menuTendina").classList.toggle("show");
   }
          
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}