const pressToStartSound = new Audio("./assets/580122__annyew__confirm-button-2.wav");
const btnStart = document.getElementById('btnStart');

async function pressToStart(event) {
    // Remove the event listener after it's triggered
    document.removeEventListener("keypress", pressToStart);
    
    isIntro = true;
    chatbox.innerHTML = '';
    
    if(isMobile){
        lockPageToPortrait();
        videoBackgroundPortrait.setCurrentTime(0);
        videoBackgroundPortrait.play();
    }else{
        videoBackground.setCurrentTime(76.5);
        videoBackground.play();
    }
}