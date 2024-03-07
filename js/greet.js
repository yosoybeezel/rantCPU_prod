const buttons = document.getElementsByClassName('mood');
let interrupted = false;
async function greet() {
    toggleSwitch.classList.remove('hide');
    skipIntroBtn.disabled = false;
    skipIntroBtn.classList.remove('disabled');

    chatbox_Container.style.transform = 'scaleY(1)';
    isIntro = false;
    await typeText(chatbox, rantCPUobj.versionMessage);
    await typeText(chatbox, rantCPUobj.welcomeMessage);
    isIntro = true;
    
    if (interrupted) return;

    setTimeout(async () => {
        if (interrupted) return;
        
        chatButton.classList.remove('hide');
        chatButtonAudio.play();
        setTimeout(() => {
            chatButton.classList.add('hide');
            setTimeout(() => {
                chatButton.classList.remove('hide');
                chatButtonAudio.play();
            }, 250);
        }, 250);

        await typeText(chatbox, ":) GREEN = RantCPU's Positive Affirmations")

        setTimeout(async () => {
            if (interrupted) return;
            chatButton.classList.add('hide');
            puzzleButtonAudio.play();
            puzzleButton.classList.remove('hide');

            setTimeout(() => {
                puzzleButton.classList.add('hide');
                setTimeout(() => {
                    puzzleButton.classList.remove('hide');
                    puzzleButtonAudio.play();
                }, 250);
            }, 250);

            await typeText(chatbox, ":/ ORANGE = RantCPU Says Game");

            setTimeout(async () => {
                if (interrupted) return;
                puzzleButton.classList.add('hide');
                curiousButtonAudio.play();
                curiousButton.classList.remove('hide');

                setTimeout(() => {
                    curiousButton.classList.add('hide');
                    setTimeout(() => {
                        curiousButton.classList.remove('hide');
                        curiousButtonAudio.play();
                    }, 250);
                }, 250);

                await typeText(chatbox, ":| YELLOW = Feed RantCPU a TARGET");

                setTimeout(async () => {
                    if (interrupted) return;
                    curiousButton.classList.add('hide');
                    rantButtonAudio.play();
                    rantButton.classList.remove('hide');

                    setTimeout(() => {
                        rantButton.classList.add('hide');
                        setTimeout(() => {
                            rantButton.classList.remove('hide');
                            rantButtonAudio.play();
                        }, 250);
                    }, 250);

                    await typeText(chatbox, ":( RED = Hear me RANT!");
                    isIntro = false;

                    setTimeout(async () => {
                        skipIntroBtn.removeEventListener("click", skipIntro);
                        skipIntroBtn.classList.add('hide');
                        
                        if (interrupted) return;
                        rantButton.classList.add('hide');
                        Array.from(buttons).forEach(button => {
                            button.classList.remove('hide');
                        });
                        let welcomeMessageCount = Number(localStorage.getItem("welcomeMessageCount"));

                        await typeText(chatbox, rantCPUobj.welcomeMessages[welcomeMessageCount]);
                        welcomeMessageCount += 1;

                        if (welcomeMessageCount == rantCPUobj.welcomeMessages.length) {
                            welcomeMessageCount = 0;
                        }

                        localStorage.setItem("welcomeMessageCount", welcomeMessageCount);
                        
                        blockElements(false);
                        
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 500);

    
}

function interruptGreet() {
    chatbox.innerHTML = "";
    interrupted = true;
    setTimeout(() => {
        isIntro = false;
        neutralMode();    
    }, 250);
    
}