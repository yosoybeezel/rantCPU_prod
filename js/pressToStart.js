
const btnStart = document.getElementById('btnStart');
const startBtnContainer = document.getElementById('startBtnContainer');

let isIntro = true;


let loadRantbyte = false;

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
    
    isIntro = true;
    
    pressToStartSound.play();
    startBtnContainer.classList.add('hide');
    videoBackground.setCurrentTime(32.6);
    videoBackground.play();

}
