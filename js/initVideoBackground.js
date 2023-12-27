const chatbox_Container = document.getElementById('chatbox_Container');
let videoBackground;

async function initVideo() {

    const options = {
        id: 876067421,
        responsive: true,
        muted: true,
        loop: false,
        autoplay: 0,
        background: 1
    };

    videoBackground = new Vimeo.Player('videoBackground', options);
    

    videoBackground.on('loaded', () => {
        console.log('loaded');
        videoBackground.setCurrentTime(0);
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
        await addCuePoint(videoBackground, 15.1, 'terminalClose');
        await addCuePoint(videoBackground, 21.7, 'targetSuccessful');
        await addCuePoint(videoBackground, 31.0, 'tryToClose');
        await addCuePoint(videoBackground, 35.5, 'moodHappy');
        await addCuePoint(videoBackground, 39.8, 'moodSad');
        await addCuePoint(videoBackground, 44.0, 'moodHostile');
        await addCuePoint(videoBackground, 48.4, 'moodHorny');
        await addCuePoint(videoBackground, 53.5, 'emailSucces');
        await addCuePoint(videoBackground, 59.0, 'gestureOne');
        await addCuePoint(videoBackground, 64.0, 'gestureTwo');
        await addCuePoint(videoBackground, 71.5, 'gestureThree');
        await addCuePoint(videoBackground, 76.0, 'gestureFour');
    } catch (error) {
        
    }

    videoBackground.on('play', async () => {
        chatbox_Container.style.transform = 'scaleY(0)';        
    });

    videoBackground.on('cuepoint', async function (obj) {

        const customKey = obj.data.customKey; // Access the customKey property

        switch (customKey) {
          
            case 'targetSuccessful':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                chatbox_Container.style.transform = 'scaleY(1)';                
            
                if(isIntro){                    
                    await introChat();
                }
                break;
            
            case 'moodHappy':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                setTimeout(()=>{
                    chatbox_Container.style.transform = 'scaleY(1)';
                    if(isIntro){
                        isIntro = false;
                        introChat();
                    }
                },250)
                
                break;
            case 'moodSad':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                setTimeout(()=>{
                    chatbox_Container.style.transform = 'scaleY(1)';
                    if(isIntro){
                        isIntro = false;
                        introChat();
                    }
                },250)
                break;
            case 'moodHostile':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                setTimeout(()=>{
                    chatbox_Container.style.transform = 'scaleY(1)';
                    if(isIntro){
                        isIntro = false;
                        introChat();
                    }
                },250)
                break;
            case 'moodHorny':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                setTimeout(()=>{
                    chatbox_Container.style.transform = 'scaleY(1)';
                    if(isIntro){
                        isIntro = false;
                        introChat();
                    }
                },250)
                break;
            case 'gestureOne':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                setTimeout(()=>{
                    chatbox_Container.style.transform = 'scaleY(1)';                
                    if(isIntro){
                        isIntro = false;
                        introChat();
                        return;
                    }
                    userInput.focus();
                },250)
                break;
            case 'gestureTwo':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                setTimeout(()=>{
                    chatbox_Container.style.transform = 'scaleY(1)';                
                    if(isIntro){
                        isIntro = false;
                        introChat();
                        return;
                    }
                    userInput.focus();
                },250)
                break;
            case 'gestureThree':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                setTimeout(()=>{
                    chatbox_Container.style.transform = 'scaleY(1)';                
                    if(isIntro){
                        isIntro = false;
                        introChat();
                        return;
                    }
                    userInput.focus();
                },250)
                break;
            case 'gestureFour':
                videoBackground.pause();
                videoBackground.setCurrentTime(0);
                terminal_Container.classList.remove('hide');
                setTimeout(()=>{
                    chatbox_Container.style.transform = 'scaleY(1)';                
                    
                    if(isIntro){
                        isIntro = false;
                        introChat();
                        return;
                    }
                    userInput.focus();
                },250)
                break;
        }

    });

    videoBackground.on('ended', async () => {        
        
    })

}


async function happyAnimation(){
    chatbox_Container.style.transform = 'scaleY(0)';
    setTimeout(async()=>{
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(32.6);
        videoBackground.play();
    },350)
    
}

async function sadAnimation(){
    chatbox_Container.style.transform = 'scaleY(0)';
    setTimeout(()=>{
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(40.8);
        videoBackground.play();
    },350)
    
}

async function hostileAnimation(){
    chatbox_Container.style.transform = 'scaleY(0)';
    setTimeout(()=>{
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(36.4);   
        videoBackground.play();
    },350)
}

async function hornyAnimation(){

    chatbox_Container.style.transform = 'scaleY(0)';
    setTimeout(async ()=>{
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(45.3);
        videoBackground.play();
    },350)
}

function playVideo(){
    videoBackground.setCurrentTime(45.3);
    videoBackground.play();
}