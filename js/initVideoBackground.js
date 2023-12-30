const chatbox_Container = document.getElementById('chatbox_Container');
const userInput = document.getElementById('userInput');
const terminalLight = document.getElementById('terminalLight');
const curiousButton = document.getElementById('curiousButton');

async function initVideo() {

    const options = {
        // id: 897330006,
        id:898653551,
        responsive: true,
        muted: false,
        loop: false,
        autoplay: false,
        background: 1 // play video without controls  
    };

    videoBackground = new Vimeo.Player('videoBackground', options);

    videoBackground.on('loaded', async () => {
        videoBackground.setVolume(1);
        videoBackground.pause();

        userInput.classList.remove('hide');       

        setTimeout(async () => {
            await typeText(chatbox,'Press any key or tap here to start.');
            
            document.addEventListener("keypress", pressToStart);
        }, 400);
        
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
        await addCuePoint(videoBackground, 15.1, 'terminalClose');
        await addCuePoint(videoBackground, 21.7, 'targetSuccessful');
        await addCuePoint(videoBackground, 31.0, 'tryToClose');
        await addCuePoint(videoBackground, 35.5, 'moodHappy');
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
        await addCuePoint(videoBackground, 92.3, 'crushed');
        await addCuePoint(videoBackground, 94.9, 'goodbye');
        await addCuePoint(videoBackground, 97.0, 'worriedSmile');
    } catch (error) {
        
    }

    videoBackground.on('play', async () => {
        
        terminal_Container.classList.add('hide');
    });

    videoBackground.on('cuepoint', async function (obj) {

        const customKey = obj.data.customKey; // Access the customKey property

        switch (customKey) {
          
            case 'targetSuccessful':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                
                if(isIntro){
                    setTimeout(async() => {
                        await introChat();
                    }, 600);
                    
                }
            break;
            
            case 'moodHappy':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                                    
                if(isIntro){
                    setInterval(() => {
                        isIntro = false;
                        introChat();    
                    }, 250);
                    
                }                
                
            break;
            case 'moodSad':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                
                    
                if(isIntro){
                    setTimeout(() => {
                        isIntro = false;
                        introChat();
                    }, 250);
                    
                }
                
            break;
            case 'moodHostile':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                
                if(isIntro){
                    setTimeout(() => {
                        isIntro = false;
                        introChat();
                    }, 250);
                    
                }
            break;
            case 'moodHorny':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                
                    
                if(isIntro){
                    setTimeout(() => {
                        terminalLight.classList.remove('hide');
                        curiousButton.classList.remove('hide');
                        isIntro = false;
                        introChat();    
                    }, 250);
                    
                }
                
            break;
            case 'gestureOne':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                
                    
                if(isIntro){
                    setTimeout(() => {
                        isIntro = false;
                        introChat();
                        return;    
                    }, 250);
                    
                }
                userInput.focus();
                
            break;
            case 'gestureTwo':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                if(isIntro){
                    setTimeout(() => {
                        isIntro = false;
                        introChat();
                        return;    
                    }, 250);
                    
                }
                userInput.focus();
            break;
            case 'gestureThree':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                if(isIntro){
                    setTimeout(() => {
                        isIntro = false;
                        introChat();
                        return;    
                    }, 250);
                    
                }
                userInput.focus();
            break;
            case 'gestureFour':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                if(isIntro){
                    setTimeout(() => {
                        isIntro = false;
                        introChat();
                        return;    
                    }, 250);
                    
                }
                userInput.focus();
            break;

            case 'emailSucces':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                setTimeout(async () => {

                    if(isIntro){
                    
                        await rantCPUResponse('gotEmail','email');
                        
                        setTimeout(() => {
                            isIntro = false;
                            blockElements(true);
                            
                            introChat();
                        }, 1200);
                        emailSequence = false;
                        
                    }

                }, 600);

            break;  

            case 'suckingData':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');        
                if(isIntro){
                    videoBackground.setCurrentTime(45.3);
                    videoBackground.play();
                    return;
                };
            break;

            case 'worriedSmile':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                if(isIntro){
                    setTimeout(() => {
                        terminal_Container.classList.remove('hide');
                        isIntro = false;
                        introChat();
                        return;    
                    }, 500);
                    
                };
                
            break;
            case 'thinking':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                
                
                    
                if(isIntro){
                    setTimeout(() => {
                        terminal_Container.classList.remove('hide');
                        isIntro = false;
                        introChat();
                        return;    
                    }, 500);
                    
                };
                
            break;
            case 'smiles':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                
                if(isIntro){
                    setTimeout(() => {
                        terminal_Container.classList.remove('hide');
                        isIntro = false;
                        introChat();
                        return;    
                    }, 500);
                    
                };
                    
                
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
                
                if(isIntro){
                    setTimeout(() => {
                        terminal_Container.classList.remove('hide');
                        isIntro = false;
                        introChat();
                        return;    
                    }, 500);
                    
                };
            break;
            case 'goodbye':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                
                setTimeout(() => {
                    terminal_Container.classList.remove('hide');    
                    terminalLight.classList.add('hide');
                    curiousButton.classList.add('hide');

                    if(isIntro){
                        
                        isWelcome = true;
                        typeText(chatbox, 'Press any key or tap here to start.');
                        document.addEventListener("keypress", pressToStart);
                    };
                }, 2000);
            break;
        }

    });

    videoBackground.on('ended', async () => { 
        console.log(videoBackground.getCurrentTime())
    })

}

async function happyAnimation(){
    
    setTimeout(async()=>{
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(32.6);
        videoBackground.play();
    },350)
    
}

async function sadAnimation(){
    
    setTimeout(()=>{
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(40.8);
        videoBackground.play();
    },350)
    
}

async function hostileAnimation(){
    
    setTimeout(()=>{
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(36.4);   
        videoBackground.play();
    },350)
}

async function hornyAnimation(){
    
    setTimeout(async ()=>{
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(45.3);
        videoBackground.play();
    },350)
}