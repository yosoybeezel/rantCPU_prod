const chatbox_Container = document.getElementById('chatbox_Container');
const terminalLight = document.getElementById('terminalLight');
const curiousButton = document.getElementById('curiousButton');
const chatButton = document.getElementById('chatButton');
const toggleSwitch = document.getElementById('toggleSwitch');
const terminal_Container_Inputs = document.getElementById('terminal_Container_Inputs');
const startBtnContainer = document.getElementById('startBtnContainer');
const termsOfUseBtn = document.getElementById('termsOfUseBtn');
const privacyPolicyBtn = document.getElementById('privacyPolicyBtn');

let isWink = false;

let isDefragOpen = false;

async function initVideo() {

    const options = {
        id: 898653551,
        // id:922108562,
        responsive: true,
        muted: false,
        loop: false,
        autoplay: false,
        background: 1 // play video without controls  
    };

    videoBackground = new Vimeo.Player('videoBackground', options);

    videoBackground.on('loaded', () => {
        document.addEventListener("keypress", pressToStart);
        startBtnContainer.classList.remove('hide');
        main_Container.classList.remove('hide');
        videoBackgroundContainer.classList.remove('hide');
        videoBackground.setVolume(0.7);
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
        await addCuePoint(videoBackground, 35.6, 'moodHappy');
        await addCuePoint(videoBackground, 39.8, 'moodSad');
        await addCuePoint(videoBackground, 44.0, 'moodHostile');
        await addCuePoint(videoBackground, 48.3, 'moodHorny');
        await addCuePoint(videoBackground, 53.5, 'emailSucces');
        await addCuePoint(videoBackground, 59.0, 'plainEnd');
        await addCuePoint(videoBackground, 64.0, 'plainEnd');
        await addCuePoint(videoBackground, 71.5, 'plainEnd');
        await addCuePoint(videoBackground, 76.0, 'plainEnd');
        await addCuePoint(videoBackground, 80.2, 'plainEnd');
        await addCuePoint(videoBackground, 83.0, 'plainEnd');
        await addCuePoint(videoBackground, 86.3, 'plainEnd');
        await addCuePoint(videoBackground, 89.0, 'hearts');
        await addCuePoint(videoBackground, 91.6, 'plainEnd');
        await addCuePoint(videoBackground, 94.9, 'plainEnd');
        await addCuePoint(videoBackground, 97.4, 'plainEnd');
        await addCuePoint(videoBackground, 106.3, 'pimple');
        await addCuePoint(videoBackground, 109.5, 'pimplePop');
        await addCuePoint(videoBackground, 122.2, 'skipBtnEnd');
        await addCuePoint(videoBackground, 134.0, 'gameOver');
        await addCuePoint(videoBackground, 140.2, 'plainEnd');
        await addCuePoint(videoBackground, 146.2, 'plainEnd');
        await addCuePoint(videoBackground, 152.2, 'plainEnd');
        await addCuePoint(videoBackground, 156.1, 'greenGlow');
        await addCuePoint(videoBackground, 160.6, 'goldenGlow');
        await addCuePoint(videoBackground, 169.2, 'defaultEnd');
        await addCuePoint(videoBackground, 179.8, 'skipBtnEnd');
        await addCuePoint(videoBackground, 193.9, 'skipBtnEnd');
        await addCuePoint(videoBackground, 213.2, 'skipBtnEnd');        
        await addCuePoint(videoBackground, 232.9, 'skipBtnEnd');
        await addCuePoint(videoBackground, 240.0, 'skipBtnEnd');
        await addCuePoint(videoBackground, 247.5, 'skipBtnEnd');
        await addCuePoint(videoBackground, 255.6, 'skipBtnEnd');
        await addCuePoint(videoBackground, 262.4, 'skipBtnEnd');
        await addCuePoint(videoBackground, 270.4, 'skipBtnEnd');
        await addCuePoint(videoBackground, 278.2, 'skipBtnEnd');
        // await addCuePoint(videoBackground, 285.0, 'skipBtnEnd');
    } catch (error) {

    }

    videoBackground.on('play', () => {
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
                await resetVideo();
                isDefragg = false;
                break;

            case 'targetSuccessful':
                await resetVideo();
                chatbox_Container.style.transform = 'scaleY(1)';
                setTimeout(async () => {
                    await typeText(chatbox, foundTargetResponse);
                    await typeText(chatbox, rantCPUobj.targetSuccessful[0]);

                    terminalLight.classList.add('red');

                    confirmSubmit = false;
                    isSubmitTarget = false;

                    setTimeout(() => {
                        neutralMode();
                    }, 3000);
                }, 500);
                break;

            case 'tryToClose':
                await resetVideo();

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

                await resetVideo()

                let targetLimit = getCookie("targetLimit");

                if (targetLimit) {
                    terminalLight.classList.add('red');

                } else {
                    terminalLight.classList.add('green');
                }

                if (isIntro) {
                    greet();
                }

                if (isWink){
                    isWink = false;
                    neutralMode();
                }
                break;

            case 'moodSad':
                await resetVideo();
                break;

            case 'moodHostile':
                await resetVideo();
                break;

            case 'moodHorny':
                await resetVideo();
                break;           

            case 'emailSucces':
                await resetVideo();
                let emailSubmitedCount = Number(localStorage.getItem("emailSubmitedCount"));

                setTimeout(async () => {

                    await typeText(chatbox, rantCPUobj.emailSubmited[emailSubmitedCount]);
                    emailSubmitedCount += 1;
                    if (emailSubmitedCount == rantCPUobj.emailSubmited.length) {
                        emailSubmitedCount = 0;
                    }

                    localStorage.setItem("emailSubmitedCount", emailSubmitedCount);

                    blockElements(false)
                }, 500);
                break;
            case 'hearts':
                await resetVideo();
                setTimeout(() => {
                    nftSequence();
                }, 500);
                return;
                break;
            case 'pimple':
                videoBackground.setCurrentTime(102.3);
                break;

            case 'pimplePop':
                if(isIntro){
                    isIntro = false;
                    privacyPolicyBtn.classList.remove('hide');
                    termsOfUseBtn.classList.remove('hide');
                }
                await resetVideo();
                
                neutralMode();                
                break;

            case 'gameOver':

                let simonSaysGameOverCount = Number(localStorage.getItem("simonSaysGameOverCount"));
                const simonSaysGameOver = rantCPUobj.simonSaysGameOver[simonSaysGameOverCount];
                const result = `Game Over! You reached round ${round}.`;

                await resetVideo();

                puzzleButton.classList.remove('hide');
                chatbox.innerHTML = '';
                await typeText(chatbox, result);

                setTimeout(async () => {
                    simonScore.classList.add('hide');
                    chatbox.classList.remove('simonOn');

                    score.innerHTML = '0';
                    chatbox.innerHTML = '';
                    await typeText(chatbox, simonSaysGameOver);
                    bt_power.classList.remove('hide');
                    bt_submit_Target.classList.remove('hide');
                    bt_service.classList.remove('hide');
                    userInput.classList.remove('hide');



                    setTimeout(() => {
                        puzzleButton.classList.add('hide');
                        neutralMode()
                    }, 2000);

                }, 2000);

                break;
            
            case 'goldenGlow':
                await resetVideo();
                let serviceSwitchCount = Number(localStorage.getItem("serviceSwitchCount"));

                setTimeout(async () => {
                    chatbox_Container.style.transform = 'scaleY(1)';
                    toggleSwitch.classList.remove('hide');
                    closeButtonSound.play();

                    await typeText(chatbox, rantCPUobj.serviceSwitch[serviceSwitchCount]);
                    blockElements(false);

                    serviceSwitchCount += 1;

                    if (serviceSwitchCount == rantCPUobj.serviceSwitch.length) {
                        serviceSwitchCount = 0;
                    }

                    localStorage.setItem("serviceSwitchCount", serviceSwitchCount);


                }, 350);

                break;
                   
            case 'skipBtnEnd':
                skipRMBtn.classList.add('hide');
                await resetVideo();
                chatbox_Container.style.transform = 'scaleY(1)';
                if(idleUserOn){
                    await typeText(chatbox, rantCPUobj.idleUser[0]);
                }
                blockElements(false);
                break;            
            case 'defaultEnd':
                await resetVideo();
                chatbox_Container.style.transform = 'scaleY(1)';
                blockElements(false);
                break;            
            case 'plainEnd':
                await resetVideo();
                blockElements(false);
                break;            

        }

    });

    videoBackground.on('ended', async () => {
        skipRMBtn.classList.add('hide');
        await resetVideo();
        chatbox_Container.style.transform = 'scaleY(1)';
        blockElements(false);
    })

}

function chatAnimation() {
    blockElements(true);
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
    blockElements(true);
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

async function defraggPanel() {

    if (isDefragOpen == false) {
        videoBackground.setCurrentTime(10);
        bt_Close_Defrag.classList.add('disabled');
        isDefragOpen = true;
    } else {
        liteBriteContainer.classList.add('hide');
        buttonsBriteLite.classList.add('hide');
    }

    videoBackground.play();
}

async function gestureOne() {

    setTimeout(() => {

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
    }, 350)
}

async function gestureTwo() {

    setTimeout(() => {

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
    }, 350)
}

async function gestureThree() {

    setTimeout(() => {

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
    }, 350)
}

async function gestureFour() {

    setTimeout(() => {

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
    }, 350)
}

async function happyAnimation() {

    setTimeout(() => {

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
    }, 350)
}

async function popPimple() {
    pimpleBtn.classList.remove('hide');
    pimpleBtn.classList.remove('disabled');
    pimpleBtn.disabled = false;
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(98.2);
    videoBackground.play();
}

async function popMyPimple() {
    blockElements(true);
    videoBackground.setCurrentTime(107.4);
}

async function rantMode1() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(110.0);
    videoBackground.play();
}

async function rantMode2() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(180.8);
    videoBackground.play();
}

async function rantMode3() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(194.3);
    videoBackground.play();
}
async function rantMode4() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(213.9);
    videoBackground.play();
}
async function rantMode5() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(234.0);
    videoBackground.play();
}
async function rantMode6() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(240.5);
    videoBackground.play();
}
async function rantMode7() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(248.0);
    videoBackground.play();
}
async function rantMode8() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(256.1);
    videoBackground.play();
}
async function rantMode9() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(262.7);
    videoBackground.play();
}
async function rantMode10() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(271.0);
    videoBackground.play();
}
async function rantMode11() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(278.5);
    videoBackground.play();
}

function gameOver() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(122.6);
    videoBackground.play();
}

async function notesOne() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(134.5);
    videoBackground.play();
}

async function notesTwo() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(140.5);
    videoBackground.play();
}

async function notesThree() {
    terminal_Container.classList.add('hide');
    videoBackground.setCurrentTime(146.6);
    videoBackground.play();
}

async function greenGlow() {
    chatbox_Container.style.transform = 'scaleY(0)';
    setTimeout(() => {
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(152.8);
        videoBackground.play();
    }, 300);
}

async function goldenGlow() {
    chatbox_Container.style.transform = 'scaleY(0)';
    setTimeout(() => {
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(157.3);
        videoBackground.play();
    }, 300);
}

async function matrix() {
    chatbox_Container.style.transform = 'scaleY(0)';
    setTimeout(() => {
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(161.5);
        videoBackground.play();
    }, 300);
}

async function nukeJoke() {
    chatbox_Container.style.transform = 'scaleY(0)';
    if(idleUserOn){
        idleUserStop();
    }
    setTimeout(() => {
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(170.6);
        videoBackground.play();
    }, 300);
}

async function resetVideo() {
    videoBackground.pause();
    videoBackground.setCurrentTime(0);

    terminal_Container.classList.remove('hide');
}

function skipRantMode(){
    skipRMBtn.classList.add('hide');
    resetVideo();
    blockElements(false);

}