let isEmail;

const generateResponse = async (input) => {

    if (input === '') {
        return;
    }

    input = input.toLowerCase().replace(/'/g, ''); // Remove apostrophes
    userInput.value = ""; // Clear the text field
    blockElements(true);
    // // user types
    chatbox.innerHTML += "<p class='user'><strong>> You:</strong> " + input + "</p>";
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom

    switch (input) {
        case 'first gesture':
            await gestureOne();
            return;
            break;
        case 'second gesture':
            await gestureTwo();
            return;
            break;
        case 'third gesture':
            await gestureThree();
            return;
            break;
        case 'fourth gesture':
            await gestureFour();
            return;
            break;
        case 'rantbyte':
            await rantBytes();
            return;
            break;
        case 'pimple':
            await popPimple();
            return;
            break;
        case 'notes one':
            await notesOne();
            return;
            break;
        case 'notes two':
            await notesTwo();
            return;
            break;
        case 'notes three':
            await notesThree();
            return;
            break;
    }

    
    if (isSubmitTarget) {

        submitTargetTrue(input);
        return;

    }
    
    if (confirmSubmit) {
        lookForTarget(input);
        return;
    }

    if (isNFTRoute) {
        rantCPUResponse(input, 'nfts');
        return;
    }

    const checkIfNft = await compareStrings(input, rantCPUobj.isNFT);

    if (checkIfNft.score >= 0.8) {
        isNFTRoute = true;
        emailSequence = false;
        nftSequence();
        return;
    }

    let bestMatch = { key: null, response: null, score: -1 };

    const responses = rantCPUobj.happy.responses;


    for (let key in responses) {

        const keyWithoutApostrophes = key.toLowerCase().replace(/'/g, ''); // Remove apostrophes from keys

        // Calculate similarity score between input and key
        const score = stringSimilarity.compareTwoStrings(input, keyWithoutApostrophes);

        if (score > bestMatch.score) {
            bestMatch.key = key;
            bestMatch.score = score;
        }
    }
    if (bestMatch.score >= 0.75) { // Adjust the threshold as needed
        const bestMatchResponse = responses[bestMatch.key][Math.floor(Math.random() * responses[bestMatch.key].length)];

        await typeText(chatbox, bestMatchResponse);

    } else {

        const keys = Object.keys(responses);
        const dontKnow = rantCPUobj.dontKnow;

        let randomString = keys[Math.floor(Math.random() * keys.length)];

        dontKnowReply = dontKnow[Math.floor(Math.random() * dontKnow.length)]

        const sorryResponse = dontKnowReply + "\"" + randomString + "\"";

        await typeText(chatbox, sorryResponse);


    }

    // if (emailSequence) {
    //     isEmail = await checkIfEmail(input);

    //     if(isEmail){
    //         await captureEmail(input);
    //         return;
    //     }

    //     await rantCPUResponse(input,'email');

    //     emailSequence = false;
    //     return;
    // }

    blockElements(false);

}