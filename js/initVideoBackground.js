const chatbox_Container = document.getElementById('chatbox_Container');
const terminalLight = document.getElementById('terminalLight');
const curiousButton = document.getElementById('curiousButton');
const chatButton  = document.getElementById('chatButton');
const toggleSwitch = document.getElementById('toggleSwitch');
const terminal_Container_Inputs = document.getElementById('terminal_Container_Inputs');
const startBtnContainer = document.getElementById('startBtnContainer');

let isDefragOpen = false;

async function initVideo() {

    const options = {
        id:898653551,
        responsive: true,
        muted: false,
        loop: false,
        autoplay: false,
        background: 1 // play video without controls  
    };

    videoBackground = new Vimeo.Player('videoBackground', options);

    videoBackground.on('loaded', () => {
        document.addEventListener("keypress", pressToStart);
        // console.log('video loaded'); 
        startBtnContainer.classList.remove('hide');
        main_Container.classList.remove('hide');
        videoBackgroundContainer.classList.remove('hide');       
        videoBackground.setVolume(1);
        videoBackground.pause();
        checkSession();     
        
    });

    async function addCuePoint(video, time, customKey) {
        return new Promise((resolve, reject) => {
            video.addCuePoint(time, { customKey })
                .then(resolve)
                .catch(reject);
        });
    }

    try {
        await addCuePoint(videoBackground, 9.5, 'terminalOpen');
        await addCuePoint(videoBackground, 11.5, 'defragOpen');
        await addCuePoint(videoBackground, 13.0, 'defragClose');
        await addCuePoint(videoBackground, 15.3, 'terminalClose');
        await addCuePoint(videoBackground, 21.7, 'targetSuccessful');
        await addCuePoint(videoBackground, 31.0, 'tryToClose');
        await addCuePoint(videoBackground, 35.7, 'moodHappy');
        await addCuePoint(videoBackground, 39.8, 'moodSad');
        await addCuePoint(videoBackground, 44.0, 'moodHostile');
        await addCuePoint(videoBackground, 48.3, 'moodHorny');
        await addCuePoint(videoBackground, 53.5, 'emailSucces');
        await addCuePoint(videoBackground, 59.0, 'gestureOne');
        await addCuePoint(videoBackground, 64.0, 'gestureTwo');
        await addCuePoint(videoBackground, 71.5, 'gestureThree');
        await addCuePoint(videoBackground, 76.0, 'gestureFour');
        await addCuePoint(videoBackground, 80.2, 'suckingData');
        await addCuePoint(videoBackground, 83.0, 'thinking');
        await addCuePoint(videoBackground, 86.3, 'smiles');
        await addCuePoint(videoBackground, 89.0, 'hearts');
        await addCuePoint(videoBackground, 91.6, 'crushed');
        await addCuePoint(videoBackground, 94.9, 'goodbye');
        await addCuePoint(videoBackground, 97.4, 'worriedSmile');
        await addCuePoint(videoBackground, 107, 'pimple');
        await addCuePoint(videoBackground, 122.2, 'rantMode');
        await addCuePoint(videoBackground, 134.0, 'gameOver');
        await addCuePoint(videoBackground, 140.2, 'notesOne');
        await addCuePoint(videoBackground, 146.2, 'notesTwo');
        await addCuePoint(videoBackground, 152.2, 'notesThree');
        await addCuePoint(videoBackground, 156.1, 'greenGlow');
        await addCuePoint(videoBackground, 160.6, 'goldenGlow');
        await addCuePoint(videoBackground, 169.4, 'matrix');
        await addCuePoint(videoBackground, 180.0, 'nukeJoke');
    } catch (error) {

    }

    videoBackground.on('play', () => {        
        
        // terminal_Container.classList.add('hide');
    });

    videoBackground.on('cuepoint', async function (obj) {

        const customKey = obj.data.customKey; // Access the customKey property

        switch (customKey) {
            case 'terminalOpen':

                videoBackground.setCurrentTime(5.1);

                break;
            case 'defragOpen':
                liteBriteContainer.classList.remove('hide');
                buttonsBriteLite.classList.remove('hide');
                createLites(17, 64);

                videoBackground.pause();
                break;
            case 'defragClose':

                videoBackground.setCurrentTime(5.1);
                bt_Close_Defrag.classList.remove('disabled');
                isDefragOpen = false;
                break;

            case 'terminalClose':
                videoBackground.pause();
                
                videoBackground.setCurrentTime(0);
                videoBackground.pause();
                terminal_Container.classList.remove('hide');
                isDefragg = false;
                break;

            case 'targetSuccessful':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                chatbox_Container.style.transform = 'scaleY(1)';
                
                setTimeout(async() => {
                    await typeText(chatbox, foundTargetResponse);
                    await typeText(chatbox, rantCPUobj.targetSuccessful[0]);
                    
                    terminalLight.classList.add('red');
        
                    confirmSubmit = false;
                    isSubmitTarget = false;
    
                    setTimeout(() => {
                        chatMode();    
                    }, 1000);    
                }, 500);

                
                

                

                break;


            case 'tryToClose':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                                
                terminal_Container.classList.remove('hide');               

                setTimeout(async () => {
                    chatbox_Container.style.transform = 'scaleY(1)';
                    
                    setTimeout(async () => {
                        let shutOffMessage = rantCPUobj.shutOff;
                        shutOffMessage = shutOffMessage[Math.floor(Math.random() * shutOffMessage.length)];
                        await typeText(chatbox, shutOffMessage);
                        blockElements(false);

                    }, 400);
                }, 400);
                break;

            case 'moodHappy':
                
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');                
                
                let targetLimit = getCookie("targetLimit");

                if(targetLimit){
                    terminalLight.classList.add('red');
                    
                } else {
                    terminalLight.classList.add('green');
                }
                
                if(isIntro){
                    isIntro = false;
                    setTimeout(() => {
                        chatbox_Container.style.transform = 'scaleY(1)';
                        
                        greet();
                        // idleFunction();
                        chatButton.classList.remove('hide');
                        toggleSwitch.classList.remove('hide');
                    }, 300);
                }      

                break;

            case 'moodSad':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                break;

            case 'moodHostile':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                break;

            case 'moodHorny':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                break;

            case 'gestureOne':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');
                blockElements(false)

                break;

            case 'gestureTwo':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');
                blockElements(false)
                break;

            case 'gestureThree':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');
                blockElements(false)
                break;

            case 'gestureFour':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');
                blockElements(false)
                break;

            case 'emailSucces':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                let emailSubmitedCount = Number(localStorage.getItem("emailSubmitedCount"));

                setTimeout(async () => {
                    terminal_Container.classList.remove('hide');                    
                    await typeText(chatbox, rantCPUobj.emailSubmited[emailSubmitedCount]);
                    emailSubmitedCount += 1;
                    if (emailSubmitedCount == rantCPUobj.emailSubmited.length) {
                        emailSubmitedCount = 0;
                    }
        
                    localStorage.setItem("emailSubmitedCount", emailSubmitedCount);
        
                    blockElements(false)
                }, 500);


                break;

            case 'suckingData':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                break;

            case 'worriedSmile':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                break;

            case 'thinking':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                break;

            case 'smiles':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                break;

            case 'hearts':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);


                setTimeout(() => {
                    terminal_Container.classList.remove('hide');
                    nftSequence();
                }, 500);

                return;
                break;

            case 'crushed':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                break;

            case 'goodbye':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');

                break;
            case 'pimple':                
                pimpleBtn.classList.remove('hide');
                videoBackground.setCurrentTime(98.6 );
                break;
            case 'rantMode':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');
                blockElements(false)
                break;
            case 'gameOver':

                let simonSaysGameOverCount = Number(localStorage.getItem("simonSaysGameOverCount"));
                const simonSaysGameOver = rantCPUobj.simonSaysGameOver[simonSaysGameOverCount];
                const result = `Game Over! You reached round ${round}.`;
                
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                
                
                terminal_Container.classList.remove('hide');
                puzzleButton.classList.remove('hide');
                chatbox.innerHTML = '';
                await typeText(chatbox, result);                

                setTimeout(async() => {
                    simonScore.classList.add('hide');
                    chatbox.classList.remove('simonOn');
                    
                    score.innerHTML = '0';
                    chatbox.innerHTML = '';
                    await typeText(chatbox,simonSaysGameOver);
                    bt_power.classList.remove('hide');
                    bt_submit_Target.classList.remove('hide');
                    bt_service.classList.remove('hide');
                    userInput.classList.remove('hide');
                    
                    

                    setTimeout(() => {
                        puzzleButton.classList.add('hide');
                        chatMode();
                    }, 2000);

                }, 2000);
                
                break;
            case 'notesOne':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                
                setTimeout(() => {
                    terminal_Container.classList.remove('hide');
                    blockElements(false);    
                }, 250);
                
                break;
            case 'notesTwo':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                setTimeout(() => {
                    terminal_Container.classList.remove('hide');
                    blockElements(false);    
                }, 250);

                break;
            case 'notesThree':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                setTimeout(() => {
                    terminal_Container.classList.remove('hide');
                    blockElements(false);    
                }, 250);

                break;
            case 'greenGlow':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                terminal_Container.classList.remove('hide');
                toggleSwitch.classList.remove('hide');
                closeButtonSound.play();
                blockElements(false);   
                
                break;
            case 'goldenGlow':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                
                terminal_Container.classList.remove('hide');
                setTimeout(() => {
                    chatbox_Container.style.transform = 'scaleY(1)';
                    toggleSwitch.classList.remove('hide');
                    closeButtonSound.play();
                    blockElements(false); 
                }, 350);
                
                break;

            case 'matrix':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                setTimeout(() => {
                    terminal_Container.classList.remove('hide');
                    blockElements(false);    
                }, 250);
                
                break;
            case 'nukeJoke':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);

                setTimeout(() => {
                    terminal_Container.classList.remove('hide');
                    blockElements(false);    
                }, 250);

                break;

        }

    });

    videoBackground.on('ended', async () => { 
        videoBackground.pause();
        videoBackground.setCurrentTime(0);
        terminal_Container.classList.remove('hide');
        
    })

}

function chatAnimation() {

    setTimeout(async () => {
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(32.6);
        videoBackground.play();
    }, 350)

}

async function puzzleAnimation() {

    setTimeout(async () => {
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(40.8);
        videoBackground.play();
    }, 350)

}

async function rantAnimation() {

    setTimeout(async () => {
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(36.4);
        videoBackground.play();
    }, 350)
}

async function curiousAnimation() {

    setTimeout(async () => {
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(45.3);
        videoBackground.play();
    }, 350)
}

function openDefragg() {

    isDefragg = true;
    chatbox_Container.style.transform = 'scaleY(0)';
    setTimeout(() => {
        switchButtonSound.play();
        toggleSwitch.classList.add('hide');
        goldenGlow();
    }, 350);
};

function closeDefragg() {
    toggleSwitch.classList.remove('hide');
    bt_Close_Defrag.classList.add('disabled');
    btDefragPanel.classList.add('disabled');
    defrag_Container_Inputs.classList.add('hide');
    defrag_Container.classList.add('hide');
    closeButtonSound.play();
    videoBackground.setCurrentTime(13.3);
    videoBackground.play();
};

async function defraggPanel(){
    
    if(isDefragOpen == false){ 
        videoBackground.setCurrentTime(10);    
        bt_Close_Defrag.classList.add('disabled');
        isDefragOpen = true;        
    } else{
        liteBriteContainer.classList.add('hide');
        buttonsBriteLite.classList.add('hide');
    }
    
    videoBackground.play();    
}



async function gestureOne(){
    
    
    setTimeout(()=>{
    
        const promise = videoBackground.play();
        if (promise !== undefined) {
            promise.then(_ => {
                
                terminal_Container.classList.add('hide');
                videoBackground.setCurrentTime(53.8);
            }).catch(error => {
                
                videoBackground.setCurrentTime(0);
                videoBackground.pause();
                terminal_Container.classList.remove('hide');
                
                userInput.focus();
              
            });
          }
    },350)
}

async function gestureTwo(){
    
    
    setTimeout(()=>{
        
        const promise = videoBackground.play();
        
        if (promise !== undefined) {
            promise.then(_ => {
                
                terminal_Container.classList.add('hide');
                videoBackground.setCurrentTime(59.3);
              
            }).catch(error => {
                
                videoBackground.setCurrentTime(0);
                videoBackground.pause();
                terminal_Container.classList.remove('hide');
                
                userInput.focus();
                
              
            });
          }
    },350)
}
async function gestureThree(){
    
    
    setTimeout(()=>{
        
        const promise = videoBackground.play();
        if (promise !== undefined) {
            promise.then(_ => {
                
                terminal_Container.classList.add('hide');
                videoBackground.setCurrentTime(64.3);

            }).catch(error => {
                
                videoBackground.setCurrentTime(0);
                videoBackground.pause();
                terminal_Container.classList.remove('hide');
                
                userInput.focus();                
              
            });
          }
    },350)
}
async function gestureFour(){
    
    setTimeout(()=>{
        
        const promise = videoBackground.play();
        
        if (promise !== undefined) {
            promise.then(_ => {
                
                terminal_Container.classList.add('hide');
                videoBackground.setCurrentTime(71.8);

            }).catch(error => {
              
              videoBackground.setCurrentTime(0);
              videoBackground.pause();
              terminal_Container.classList.remove('hide');
              userInput.focus();
            });
          }
    },350)
}

async function happyAnimation(){
    
    setTimeout(()=>{
        
        const promise = videoBackground.play();
        
        if (promise !== undefined) {
            promise.then(_ => {
                
                terminal_Container.classList.add('hide');
                videoBackground.setCurrentTime(32.6);

            }).catch(error => {
              
              videoBackground.setCurrentTime(0);
              videoBackground.pause();
              terminal_Container.classList.remove('hide');
              userInput.focus();
            });
          }
    },350)
}

async function popPimple(){
    
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(98.2);
    
    videoBackground.play();

}
async function popMyPimple(){   
    
    videoBackground.setCurrentTime(107.4);
}

async function rantMode(){
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(110.0);
    
    videoBackground.play();
 
}

function gameOver(){
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(122.6);
    
    videoBackground.play();
 
}

async function notesOne(){
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(134.5);
    
    videoBackground.play();
 
}
async function notesTwo(){
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(140.5);
    
    videoBackground.play();
 
}
async function notesThree(){
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(146.6);
    
    videoBackground.play();
 
}

async function greenGlow(){
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(152.8);
    
    videoBackground.play();
 
}

async function goldenGlow(){
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(157.3);
    
    videoBackground.play();
 
}

async function matrix(){
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(161.5);
    
    videoBackground.play();
 
}

async function nukeJoke(){
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(170.5);
    
    videoBackground.play();
 
}