const chatbox_Container = document.getElementById('chatbox_Container');
const terminalLight = document.getElementById('terminalLight');
const curiousButton = document.getElementById('curiousButton');
const chatButton  = document.getElementById('chatButton');
const toggleSwitch = document.getElementById('toggleSwitch');
const terminal_Container_Inputs = document.getElementById('terminal_Container_Inputs');

let isDefragOpen = false;

async function initVideo() {

    const options = {
        id: 898653551,
        responsive: true,
        muted: false,
        loop: false,
        autoplay: false,
        background: 1 // play video without controls  
    };

    videoBackground = new Vimeo.Player('videoBackground', options);

    videoBackground.on('loaded', () => {
        console.log('video loaded')
        videoBackground.setCurrentTime(0);
        videoBackground.setVolume(1);
        videoBackground.pause();
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
    } catch (error) {

    }

    videoBackground.on('play', async () => {        
        terminal_Container.classList.add('hide');
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
                    greet();
                    chatButton.classList.remove('hide');
                    toggleSwitch.classList.remove('hide');
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


                setTimeout(async () => {
                    terminal_Container.classList.remove('hide');
                    await rantCPUResponse('gotEmail', 'email');

                    emailSequence = false;
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

    switchButtonSound.play();
    toggleSwitch.classList.add('hide');
    setTimeout(() => {
        
        toggleSwitch.classList.remove('hide');
        closeButtonSound.play();
    }, 300);

    // setTimeout(() => {
    //     terminal_Container.classList.add('hide');
    //     videoBackground.play();
    // }, 250);

    // setTimeout(() => {
    //     defrag_Container_Inputs.classList.remove('hide');
    //     btDefragPanel.classList.remove('disabled')
    //     bt_Close_Defrag.classList.remove('disabled');
    // }, 1700);

    // setTimeout(() => {
    //     defrag_Container.classList.remove('hide');
    // }, 10000);

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




// async function happyAnimation(){
//     randomTriggerStop();
//     triggerGestureStop();
//     chatbox_Container.style.transform = 'scaleY(0)';
//     setTimeout(async()=>{
//         terminal_Container.classList.add('hide');
//         videoBackground.setCurrentTime(32.6);
//         videoBackground.play();
//     },350)
    
// }

async function popPimple(){
    
    // chatbox_Container.style.transform = 'scaleY(0)';
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(98.2);
    
    videoBackground.play();

}
async function popMyPimple(){   
    
    videoBackground.setCurrentTime(107.4);
}