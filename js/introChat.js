

let introChatCount = 0;
let nftChatCount = 0;
let isNFTRoute = false;
let isIntro = false;
let emailSequence = false;
let nftNum = '';
let typeResponse;

// const introChat = async (input) => {
//     introChatCount += 1;
//     isIntro = true;

//     switch (introChatCount) {

//         case 1:
//             await typeText(chatbox, rantCPUobj.initDialog_01);
//             setTimeout(() => {
//                 terminal_Container.classList.add('hide');
//                 videoBackground.setCurrentTime(96.5);
//                 videoBackground.play();
//             }, 1000);
//             break;

//         case 2:
//             await typeText(chatbox, rantCPUobj.initDialog_02);
//             setTimeout(() => {
//                 terminal_Container.classList.add('hide');
//                 videoBackground.setCurrentTime(15.7);
//                 videoBackground.play();
//             }, 1000);
//             break;

//         case 3:
            
//             await typeText(chatbox, rantCPUobj.initDialog_03);
//             await rantBytes();
            
//             nftNum = 1;
//             break;

//         case 4:
//             await typeText(chatbox, rantCPUobj.initDialog_04);
//             setTimeout(() => {
//                 setTimeout(() => {
//                     terminal_Container.classList.add('hide');
//                     videoBackground.setCurrentTime(80.8);
//                     videoBackground.play();
//                 }, 1000);

//             }, 1500);
//             break;

//         case 5:
//             emailSequence = true
//             await typeText(chatbox, rantCPUobj.initDialog_05);
//             blockElements(false);
//             nftNum = 2;
//             break;

//         case 6:
//             SM_instagram.style.opacity = "1";
//             SM_twitter.style.opacity = "1";
//             SM_tiktok.style.opacity = "1";    
//             await typeText(chatbox, rantCPUobj.initDialog_06);
//             setTimeout(() => {

//                 setTimeout(() => {
//                     SM_instagram.style.opacity = "0";
//                     SM_twitter.style.opacity = "0";
//                     SM_tiktok.style.opacity = "0";
//                     terminal_Container.classList.add('hide');
//                     videoBackground.setCurrentTime(84.0);
//                     videoBackground.play();
//                 }, 1000);
//             }, 1500);
//             break

//         case 7:
//             await typeText(chatbox, rantCPUobj.initDialog_07);
//             setTimeout(() => {

//                 setTimeout(() => {
//                     terminal_Container.classList.add('hide');
//                     videoBackground.setCurrentTime(89.9);
//                     videoBackground.play();
//                 }, 1000);

//             }, 1500);
//             break;

//         case 8:
//             await typeText(chatbox, rantCPUobj.initDialog_08);
//             setTimeout(() => {
//                 introChatCount = 0;

//                 setTimeout(async () => {
//                     chatbox.innerHTML = '';
//                     terminal_Container.classList.add('hide');
//                     videoBackground.setCurrentTime(93.0);
//                     videoBackground.play();
//                 }, 1000);
//             }, 1500);
//             break;
//     }

// }

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
                    
                    setTimeout(() => {
                        chatMode();    
                    }, 2000);
                    

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
                    
                    setTimeout(() => {
                        chatMode();    
                    }, 2000);

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
            setTimeout(() => {
                chatMode();
            }, 2000);
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
            await typeText(chatbox, rantCPUobj.nft_01);
            terminal_Container.classList.add('hide');
            videoBackground.setCurrentTime(87.2);
            videoBackground.play();
            
            break;

        case 2:
            await typeText(chatbox, rantCPUobj.nft_02);
            blockElements(false);

            break;
    }

}