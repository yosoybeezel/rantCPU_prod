let introChatCount = 0;
let isIntro = false;

async function introChat(input){
    introChatCount += 1;
    isIntro = true;

    switch (introChatCount) {
        case 1:
            terminal_Container.classList.add('hide');
            
            break;
        case 2:
            
            await typeText(chatbox, rantCPUobj.initDialog_01[0]);
            setTimeout(() => {
                introChat();
            }, 1000);
          break;
        case 3:
            await typeText(chatbox, rantCPUobj.initDialog_02[0]);                            
            chatbox_Container.style.transform = 'scaleY(0)';
            setTimeout(() => {
                terminal_Container.classList.add('hide');
                videoBackground.setCurrentTime(15.7);
                videoBackground.play();
            }, 1000);
          break;
        case 4:
            await typeText(chatbox, rantCPUobj.initDialog_03[0]);
            blockElements(false);
          break;
        case 5:
            await typeText(chatbox, rantCPUobj.initDialog_04[0]);

            chatbox_Container.style.transform = 'scaleY(0)';
                
            setTimeout(() => {
                terminal_Container.classList.add('hide');
                videoBackground.setCurrentTime(71.8);
                videoBackground.play();
            }, 1000);
            break;
        case 6:
            await typeText(chatbox, rantCPUobj.initDialog_05[0]);
            setTimeout(() => {
                introChat();
            }, 1000);
            break;
        case 7:
            await typeText(chatbox, rantCPUobj.initDialog_06[0]);
            chatbox_Container.style.transform = 'scaleY(0)';
            
            setTimeout(() => {
                terminal_Container.classList.add('hide');
                videoBackground.setCurrentTime(64.3);    
                videoBackground.play();
            }, 1000);
            break
        case 8:
            await typeText(chatbox, rantCPUobj.initDialog_07[0]);
            setTimeout(() => {
                introChat();
            }, 1000);
            break;
        case 9:
            await typeText(chatbox, rantCPUobj.initDialog_08[0]);
            setTimeout(() => {
                introChatCount = 0;
                chatbox_Container.style.transform = 'scaleY(0)';
                terminalLight.classList.add('hide');
                curiousButton.classList.add('hide');
                main_Container.classList.add('fullHeight');
                setTimeout(async () => {
                    chatbox.innerHTML = '';
                    chatbox_Container.style.transform = 'scaleY(1)';
                    isWelcome = true;
                    await typeText(chatbox,'Press any key to start.');
                    document.addEventListener("keypress", pressToStart);
                }, 2000);
            }, 1000);
            break;
      }


}