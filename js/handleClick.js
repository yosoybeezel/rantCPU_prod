function handleClick(button) {
    
    const dataBtnValue = button.getAttribute('data-btn');
    const showButton = document.getElementById(dataBtnValue);
    const skipRMBtn = document.getElementById('skipRMBtn');
        
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
                skipRMBtn.classList.remove('hide');
                let rantModeCount = Number(localStorage.getItem("rantModeCount"));
                blockElements(true);
                
                skipRMBtn.disabled = false;
                skipRMBtn.classList.remove('disabled');
                skipRMBtn.focus();

                switch(rantModeCount){
                    case 0:                        
                        localStorage.setItem("rantModeCount", 1);
                        rantMode();
                        break;
                    case 1:
                        localStorage.setItem("rantModeCount", 2);
                        rantMode2();
                        break;
                    case 2:
                        localStorage.setItem("rantModeCount", 3);
                        rantMode3();
                        break;
                    case 3:
                        localStorage.setItem("rantModeCount", 0);
                        rantMode4();
                        break;
                }
                
                break;
            case 'puzzleButton':
                // startGame();
                initArcade();
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
    
    Array.from(buttons).forEach(button => {
        button.classList.add('hide');
    });

    chatButton.classList.remove('hide');
    chatbox.innerHTML = '';

    let positiveAffirmationsCount = Number(localStorage.getItem("positiveAffirmationsCount"));
			
    await typeText(chatbox, rantCPUobj.positiveAffirmations[positiveAffirmationsCount]);

    positiveAffirmationsCount += 1;

    if (positiveAffirmationsCount >= rantCPUobj.positiveAffirmations.length) {

        positiveAffirmationsCount = 0;
    }

    localStorage.setItem("positiveAffirmationsCount", positiveAffirmationsCount);

    setTimeout(() => {
        neutralMode();
    }, 2000);

}