let isEmail;
let wrongCount = 0;

const generateResponse = async (input) => {

    if (input === '') {
        return;
    }
    
    blockElements(true);

    input = input.toLowerCase().replace(/'/g, ''); // Remove apostrophes
    userInput.value = ""; // Clear the text field

    // user types
    chatbox.innerHTML += "<p class='user'><strong>> You:</strong> " + input + "</p>";
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    
    if(isWordScramble){
        
        if(input == 'y'){
            initWordScramble();
        } else if(input == 'n') {
            endGameWordScramble();
            neutralMode();
        } else {
            
            chatbox.innerHTML = "";
            
            if(wrongCount == 2){
                wrongCount = 0;
                endGameWordScramble();
                neutralMode();
                return;
            }

            await typeText(chatbox,rantCPUobj.wordScramblePrompt[0]);

            unblockUserInput();
            wrongCount +=1;
        }
        return;
    }

    if(isWordScrambleOn){
        checkWord(input);
        
        return;
    }
    
    if(isDiscord){

        isDiscord = false;
        
        
        const typeOfResponse = await getTypeOfResponse(input);

        switch(typeOfResponse){

            case 'positive':
                window.open('https://discord.gg/liithos', '_blank');
                blockElements(false);
                break;
            case 'negative':
                    await typeText(chatbox,'Fine, suit yourself!');
                    blockElements(false);
                break;
            case 'another':
                await typeText(chatbox, 'What?! Whatever.');
                blockElements(false);
                break;
        }
        
        return;
        
    }

    const isEmail = await checkIfEmail(input);

    if (isEmail) {
      captureEmail(input);
      return;
    }

    switch (input) {
        case 'rantbyte':
            await rantBytes();
            return;
        case 'pimple':
            await popPimple();
            return;
        // case 'notes one':
        //     await notesOne();
        //     return;
        // case 'notes two':
        //     await notesTwo();
        //     return;
        // case 'notes three':
        //     await notesThree();
        //     return;
        case 'matrix':
            await matrix();
            return;
        case 'nuke joke':
            await nukeJoke();
            return;
        // case 'rantcpu says':
        //     startGame();
        //     return;
        // case 'rantcpu says game':
        //     startGame();
        //     return;
        // case 'positive affirmations':
        //     chatMode();
        //     return;
        // case 'wordscramble':
        //     wordScramble();    
        //     return;        
        case 'discord':
            blockElements(true);  
            await discordPrompt();
            blockElements(false);
            return;
        
    }
    
    if(gameOn){
        const typeOfResponse = await getTypeOfResponse(input);
        
        switch(typeOfResponse){
            case 'positive':
                // console.log('positive');
                puzzleButton.classList.add('hide');
                chatbox.innerHTML = '';
                await typeText(chatbox,rantCPUobj.simonSaysBeckon[0]);
                bt_power.classList.add('hide');
                bt_submit_Target.classList.add('hide');
                bt_service.classList.add('hide');
                userInput.classList.add('hide');
                nextRound();
                break;
            case 'negative':
                // console.log('negative');
                await endRantCPUSays();
                
                break;
            case 'another':
                // console.log('another');
                await endRantCPUSays();
                
                break;
        }
        
        return;
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

    const responses = rantCPUobj.chat.responses;


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

        // const sorryResponse = dontKnowReply + "\"" + randomString + "\"";
        

        await typeText(chatbox, dontKnowReply);


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