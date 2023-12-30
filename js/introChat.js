<<<<<<< HEAD
const SM_instagram = document.getElementById('SM_instagram'); 
const SM_tiktok = document.getElementById('SM_tiktok');
const SM_twitter = document.getElementById('SM_twitter');

let introChatCount = 0;
let nftChatCount = 0;
let isNFTRoute = false;
let isIntro = false;
let emailSequence = false;
let typeResponse;
let nftNum = '';

const introChat = async (input) => {
=======
let introChatCount = 0;
let isIntro = false;

async function introChat(input){
>>>>>>> d7f2f6fd5206689102d4af210c76b236118b6139
    introChatCount += 1;
    isIntro = true;

    switch (introChatCount) {
<<<<<<< HEAD

        case 1:
            await typeText(chatbox, rantCPUobj.initDialog_01);
            setTimeout(() => {

                setTimeout(() => {
                    terminal_Container.classList.add('hide');
                    videoBackground.setCurrentTime(96.0);
                    videoBackground.play();
                }, 1000);
            }, 1500);
            break;
        case 2:
            await typeText(chatbox, rantCPUobj.initDialog_02);
            setTimeout(() => {

                setTimeout(() => {
                    terminal_Container.classList.add('hide');
                    videoBackground.setCurrentTime(15.7);
                    videoBackground.play();
                }, 1000);
            }, 1500);
            break;
        case 3:
            await typeText(chatbox, rantCPUobj.initDialog_03);
            blockElements(false);
            nftNum = 1;
            break;
        case 4:
            await typeText(chatbox, rantCPUobj.initDialog_04);

            setTimeout(() => {

                setTimeout(() => {
                    terminal_Container.classList.add('hide');
                    videoBackground.setCurrentTime(80.8);
                    videoBackground.play();
                }, 1000);

            }, 1500);
            break;
        case 5:
            emailSequence = true
            await typeText(chatbox, rantCPUobj.initDialog_05);
            blockElements(false);
            nftNum = 2;
            break;
        case 6:
            SM_instagram.style.opacity = "1";
            SM_twitter.style.opacity = "1";
            SM_tiktok.style.opacity = "1";    
            await typeText(chatbox, rantCPUobj.initDialog_06);

            
            setTimeout(() => {

                setTimeout(() => {
                    SM_instagram.style.opacity = "0";
                    SM_twitter.style.opacity = "0";
                    SM_tiktok.style.opacity = "0";
                    terminal_Container.classList.add('hide');
                    videoBackground.setCurrentTime(84.0);
                    videoBackground.play();
                }, 1000);
            }, 1500);
            break
        case 7:
            await typeText(chatbox, rantCPUobj.initDialog_07);
            setTimeout(() => {

                setTimeout(() => {
                    terminal_Container.classList.add('hide');
                    videoBackground.setCurrentTime(89.9);
                    videoBackground.play();
                }, 1000);

            }, 1500);
            break;
        case 8:
            await typeText(chatbox, rantCPUobj.initDialog_08);
            setTimeout(() => {
                introChatCount = 0;

                setTimeout(async () => {
                    chatbox.innerHTML = '';
                    terminal_Container.classList.add('hide');
                    videoBackground.setCurrentTime(93.0);
                    videoBackground.play();
                }, 1000);
            }, 1500);
            break;
    }

}

async function rantCPUResponse(input, options) {

    const introOptions = rantCPUobj.getType;
    const bestMatch = await compareStrings(input, introOptions);

    const responsesName = `${options}`;
    const responses = rantCPUobj[responsesName];

    let response = '';

    if (responsesName == 'nfts') {

        if (bestMatch.score >= 0.6) {
            switch (bestMatch.key) {
                case 'affirmative':
                    window.open("https://rantcpu.liithos.com/", "_blank");
                    if (nftNum === 1) {
                        introChatCount = 4;
                    } else if (nftNum === 2) {
                        introChatCount = 5;
                    }
                    isNFTRoute = false;
                    nftChatCount = 0;
                    introChat();

                    break;
                case 'negative':
                    await typeText(chatbox, rantCPUobj.nfts.negative[0]);
                    if (nftNum == 1) {
                        introChatCount = 4;
                    } else if (nftNum == 2) {
                        introChatCount = 5;
                    }
                    isNFTRoute = false;
                    nftChatCount = 0;
                    introChat();
                    break;
            }
        } else {
            await typeText(chatbox, rantCPUobj.nfts.another[0]);
            if (nftNum == 1) {
                introChatCount = 4;
            } else if (nftNum == 2) {
                introChatCount = 5;
            }
            isNFTRoute = false;
            nftChatCount = 0;
            introChat();
        }

        nftNum = '';
        return;
    }

    if (bestMatch.score >= 0.6) { // Adjust the threshold as needed
        // Determine whether it's affirmative or negative based on the key
        const isAffirmative = bestMatch.key === "affirmative";

        // Use the response based on the best match
        if (isAffirmative) {
            if (input == 'gotEmail') {
                response = responses.affirmative[0];
            } else {
                response = responses.another[0];

            }

            typeResponse = 'positive';

        } else {

            response = responses.negative[0];
            typeResponse = 'negative';
        }
    } else {

        typeResponse = 'another';
        if (isEmail) {
            response = responses.affirmative[0];
        } else {
            response = responses.another[0];
        }

    }

    await typeText(chatbox, response);

    return;
}

async function nftSequence(input) {
    nftChatCount += 1;

    switch (nftChatCount) {
        case 1:
            await typeText(chatbox, rantCPUobj.initDialog_09);
            terminal_Container.classList.add('hide');
            videoBackground.setCurrentTime(87.2);
            videoBackground.play();
            break;
        case 2:
            await typeText(chatbox, rantCPUobj.initDialog_10);
            blockElements(false);

            break;
    }
=======
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

>>>>>>> d7f2f6fd5206689102d4af210c76b236118b6139

}