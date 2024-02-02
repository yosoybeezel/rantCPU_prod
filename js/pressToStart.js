const pressToStartSound = new Audio("./assets/580122__annyew__confirm-button-2.wav");
const btnStart = document.getElementById('btnStart');
const startBtnContainer = document.getElementById('startBtnContainer');

let isIntro = true;

async function pressToStart(event) {
    
    let opacity = 1;

    pressToStartSound.play();

    const fadeInterval = setInterval(async function () {
        if (opacity > 0) {
            opacity -= 0.1;
            btnStart.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval);
            startBtnContainer.classList.add('hide');
            terminal_Container.classList.add('hide');
            videoBackground.setCurrentTime(32.6);
            videoBackground.play();
        };

    }, 30);

    // Remove the event listener after it's triggered
    document.removeEventListener("keypress", pressToStart);
}

document.addEventListener("keypress", pressToStart);