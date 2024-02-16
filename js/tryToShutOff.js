async function tryToShutOff(){

    blockElements(true);
    chatbox_Container.style.transform = 'scaleY(0)';
    
    setTimeout(()=>{
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(22.3);
        powerButtonSound.play();    
        videoBackground.play();
    },300);
}