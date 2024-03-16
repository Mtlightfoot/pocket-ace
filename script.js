const musicCheckbox = document.querySelector("#music-checkbox");
const gameMusic = new Audio("./music/lofi-beat-1.mp3");
const buttonSound = new Audio("./music/button-press.mp3");
const newGameSound = new Audio("./music/sparkle-sound.mp3");
const subButtons = document.querySelectorAll(".sub-btn");
const newGameBtn = document.querySelector(".new-game-btn")
gameMusic.loop = true;

function musicToggle() {
    if (musicCheckbox.checked === true) {
        gameMusic.play();
    } else {
        gameMusic.pause();
    }
}

function buttonClick() {
    buttonSound.play();
}

function newGameClick() {
    newGameSound.play();
}

musicCheckbox.addEventListener("click", musicToggle);
newGameBtn.addEventListener("click", newGameClick);
subButtons.forEach((button) => button.addEventListener("click", buttonClick));


