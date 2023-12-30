let isEmail;
const generateResponse = async (input)=>{
    
    if (input === '') {
        return;
    }
    
    input = input.toLowerCase().replace(/'/g, ''); // Remove apostrophes
    userInput.value = ""; // Clear the text field
    blockElements(true);
    // // user types
    chatbox.innerHTML += "<p class='user'><strong>> You:</strong> " + input + "</p>";
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
    
    if(isNFTRoute){
        rantCPUResponse(input, 'nfts');
        return;
    }
    
    const bestMatch = await compareStrings(input, rantCPUobj.isNFT);
    if (bestMatch.score >= 0.6) {
        isNFTRoute = true;
        emailSequence = false;
        nftSequence();        
        return;
    }
    
    if (emailSequence) {
        isEmail = await checkIfEmail(input);
        
        if(isEmail){
            await captureEmail(input);
            return;
        }

        await rantCPUResponse(input,'email');
        
        setTimeout(() => {
            isIntro = false;
            blockElements(true);
            
            introChat();
        }, 1200);
        emailSequence = false;
        return;
    }

    if(isIntro){
        isIntro = false;
        blockElements(true);
        introChat();
    }

}