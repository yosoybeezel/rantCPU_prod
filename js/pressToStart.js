const btnStart = document.getElementById('btnStart');
let isIntro = false;

async function pressToStart(event) {
    // Remove the event listener after it's triggered
    document.removeEventListener("keypress", pressToStart);
    
    isIntro = true;
    
    pressToStartSound.play();
    startBtnContainer.classList.add('hide');
        
    
    chatAnimation();

}