function handleClick(button) {
    
    const dataBtnValue = button.getAttribute('data-btn');
    const showButton = document.getElementById(dataBtnValue);
        
    if(gameOn){
        switch (dataBtnValue) {
            case 'chatButton':
                chatButtonAudio.play(); 
                break;
            case 'rantButton':
                rantButtonAudio.play();
                break;
            case 'puzzleButton':
                puzzleButtonAudio.play();
                break;
            case 'curiousButton':
                curiousButtonAudio.play();
                break;
        }

        setTimeout(() => {
            showButton.classList.add('hide');
        }, 500);

        showButton.classList.remove('hide');
        
        userSequence.push(dataBtnValue);

        checkSequence();

        return;
    } else{
        pressModeButton.play();
        
        switch (dataBtnValue) {
            case 'chatButton':
                chatMode();
                break;
            case 'rantButton':
                blockElements(true)
                rantMode();
                break;
            case 'puzzleButton':
                startGame();
                break;
            case 'curiousButton':
                askSubmitTarget();
                break;
        
            default:
                break;
        }
    }
       
}

async function chatMode(){
    
    blockElements(true);
    const buttons = document.getElementsByClassName('mood');
    
    Array.from(buttons).forEach(button => {
        button.classList.add('hide');
    });

    chatButton.classList.remove('hide');
    chatbox.innerHTML = '';

    await typeText(chatbox, rantCPUobj.inciteChat[0]);

    blockElements(false);

}