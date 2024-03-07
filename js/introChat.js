

let introChatCount = 0;
let nftChatCount = 0;
let isNFTRoute = false;
let emailSequence = false;
let nftNum = '';
let typeResponse;

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
                        
                        neutralMode()
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
                        neutralMode()
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
                neutralMode();
            }, 2000);
        }

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