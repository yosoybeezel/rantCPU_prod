const chatbox_Container = document.getElementById('chatbox_Container');
const chatbox = document.getElementById('chatbox');
let gestureNumber = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(element, text) {
    
    chatbox.innerHTML += "<p class='assistant'><strong>> </strong></p>";

    for (let i = 0; i < text.length; i++) {
        element.lastChild.innerHTML += text.charAt(i);
        element.scrollTop = element.scrollHeight; // Scroll to the bottom
        await sleep(100); // Adjust typing speed here (in milliseconds)
    }

    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    
}

async function initComingSoon(){    

    setTimeout(()=>{
        chatbox_Container.style.transform = 'scaleY(1)';
        setTimeout(() => {
            typeText(chatbox,'LOADING...');

            setTimeout(()=>{
                initVideo();
            }, 6000);

        }, 500);

    }, 1000);
    
}

async function initVideo(){  
    let optionsVidBackground = {
        id: 891772648,
        responsive: true,
        background: 1, // play video without controls
        loop: 0,
        autoplay: 0,
        muted: true
    }

    const videoBackground = new Vimeo.Player('videoBackground', optionsVidBackground);

    async function addCuePoint(video, time, customKey) {
        video.addCuePoint(time, { customKey })
            .then(function (id) {
                // The cue point is added
            })
            .catch(function (error) {
                switch (error.name) {
                    case 'UnsupportedError':
                        // Cue points aren't supported by the current player or browser
                        break;
                    case 'RangeError':
                        // The time is less than 0 or greater than the video's duration
                        break;
                    default:
                        // Some other error occurred
                        break;
                }
            });
    }
    
    await addCuePoint(videoBackground, 5.5, 1);   
    await addCuePoint(videoBackground, 10, 2);
    await addCuePoint(videoBackground, 17.9, 3);

    videoBackground.on('loaded', function() {        
        videoBackground.play();
    });
        
    videoBackground.on('play', function (data) {
        gestureNumber += 1;
        chatbox.innerHTML = "";
        chatbox_Container.style.transform = 'scaleY(0)';
    });

    videoBackground.on('pause', function () {
    });

    videoBackground.on('cuepoint', async function (obj) {


        switch (gestureNumber) {
            case 1:                
                videoBackground.setCurrentTime(0);
                videoBackground.pause();    
                chatbox_Container.style.transform = 'scaleY(1)';
                setTimeout(async() => {
                    await typeText(chatbox, 'LOADING...');    
                }, 400);
                setTimeout(() => {
                    videoBackground.setCurrentTime(5.8);
                    videoBackground.play();
                }, 6000);
                break;
            case 2:                
                videoBackground.setCurrentTime(0);
                videoBackground.pause();    
                chatbox_Container.style.transform = 'scaleY(1)';
                setTimeout(async() => {
                    await typeText(chatbox, 'LOADING...');    
                }, 400);
                setTimeout(() => {
                    videoBackground.setCurrentTime(10.8);
                    videoBackground.play();
                }, 6000);
                break;
            case 3:
                videoBackground.setCurrentTime(0);
                videoBackground.pause();    
                chatbox_Container.style.transform = 'scaleY(1)';
                setTimeout(async() => {
                    await typeText(chatbox, 'LOADING...');    
                }, 400);
                
                setTimeout(() => {
                    videoBackground.setCurrentTime(18.2);
                    videoBackground.play();                    
                }, 6000);
                break;
            
        }

    });

    videoBackground.on('ended', async function () {        
        gestureNumber = 0;
        videoBackground.setCurrentTime(0);
        videoBackground.pause();    
        
        chatbox_Container.style.transform = 'scaleY(1)';
        setTimeout(async() => {
            await typeText(chatbox, 'LOADING...');    
        }, 400);
        setTimeout(() => {
            videoBackground.setCurrentTime(0);
            videoBackground.play();                    
        }, 4000);
    });
}

initComingSoon()