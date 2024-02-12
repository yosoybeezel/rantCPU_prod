function handleClick(button) {
    
    const dataBtnValue = button.getAttribute('data-btn');
    const showButton = document.getElementById(dataBtnValue);
    powerButtonSound.play();
    
    if(dataBtnValue == 'puzzleButton' && !gameOn){
        startGame();
        return;
    }

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
        
        switch (dataBtnValue) {
            case 'chatButton':
                chatMode();       
                break;
            case 'rantButton':
                blockElements(true)
                rantMode();
                break;
            case 'puzzleButton':
                
                break;
            case 'curiousButton':
                askSubmitTarget();
                break;
        
            default:
                break;
        }
    }
       
}

function chatMode(){
    
    const buttons = document.getElementsByClassName('mood');
    
    Array.from(buttons).forEach(button => {
        button.classList.add('hide');
    });

    chatButton.classList.remove('hide');
    blockElements(false);

}