var character = document.getElementById("character");
var cactus = document.getElementById("cactus");

function jump() {
    if (character.classList != "make-it-jump") {
        character.classList.add("make-it-jump");
    }
    setTimeout(() => {
        character.classList.remove("make-it-jump");
    }, 500);
}
var checkDead = setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if (cactusLeft < 40 && cactusLeft > 0 && characterTop >= 260) {
        cactus.style.animation = "none";
        cactus.style.display = "none";        
        if (confirm("You Lost") == true) {
            location.reload();
          } else {
            window.close();
          }

    }
}, 10)