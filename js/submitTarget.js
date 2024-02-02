const bt_submit_Target = document.getElementById('bt_submit_Target');

let isSubmitTarget = false;

async function glitchIsDone(resolve) {
    // Simulate some asynchronous work here
    await new Promise((innerResolve) => setTimeout(innerResolve, 7000));

    // Now, the asynchronous work is done, so call resolve to resolve the promise
    resolve();
}

async function submitTargetGlitch() {
    return new Promise((resolve) => {
        isGlitch = true;


        setTimeout(() => {
            terminal_Container.classList.add('hide');
            videoBackground.setCurrentTime(15.7);
            videoBackground.play();

            glitchIsDone(resolve);
        }, 300);
    });
}

// bt_submit_Target.addEventListener("click", (event) => {
//     targetButtonSound.play();
// });

async function askSubmitTarget() {

    userInput.value = ""; // Clear the text field
    bt_submit_Target.classList.add('hide');
    terminalLight.classList.remove('green');
    terminalLight.classList.add('red');
    
    const keysResponses = Object.keys(rantCPUobj.happy.responses);
    const exampleQ = keysResponses[Math.floor(Math.random() * keysResponses.length)];

    

    let targetLimit = getCookie("targetLimit");

    if (targetLimit) {

        chatbox.innerHTML = "";

        await typeText(chatbox, rantCPUobj.submitTText + '\"' + exampleQ + '\"');

        setTimeout(async () => {
            blockElements(false);
            userInput.focus();

            return;
        }, 2000);

        return;
    }

    isSubmitTarget = true;


    chatbox.innerHTML = "";

    let askSubmitTargetCount = Number(localStorage.getItem("askSubmitTargetCount"));

    await typeText(chatbox, rantCPUobj.askSubmitTarget[askSubmitTargetCount]);

    askSubmitTargetCount += 1;

    if (askSubmitTargetCount == rantCPUobj.askSubmitTarget.length) {

        localStorage.setItem("askSubmitTargetCount", 0);
        blockElements(false);
        return;
    }

    localStorage.setItem("askSubmitTargetCount", askSubmitTargetCount);
}

async function lookForTarget(input) {
    
    let bestMatch = { key: null, response: null, score: -1 };

    for (let key in rantCPUobj.targets) {
        const keyWithoutApostrophes = key.toLowerCase().replace(/'/g, ''); // Remove apostrophes from keys

        // Calculate similarity score between input and key
        const score = stringSimilarity.compareTwoStrings(input, keyWithoutApostrophes);

        if (score > bestMatch.score) {
            bestMatch.key = key;
            bestMatch.score = score;
        }
    }

    if (bestMatch.score >= 0.5) { // Adjust the threshold as needed

        setCookie("targetLimit", true, 1);

        let bmk = await capitalize(bestMatch.key);
        
        const bestMatchResponse = "Yes, of course I know " + bmk ;

        setTimeout(async () => {
            // await submitTargetGlitch();
            terminal_Container.classList.add('hide');
            videoBackground.setCurrentTime(15.7);
            videoBackground.play();
            
            setTimeout(async() => {
                await typeText(chatbox, bestMatchResponse);
                terminalLight.classList.add('red');
    
                confirmSubmit = false;
                isSubmitTarget = false;

                blockElements(false);
                userInput.focus();
    
            }, 6000);

            
        }, 500)

    } else {

        input = await capitalize(input);

        const sorryText = "Sorry, I don't know \"" + input + "\". Click the TARGET button to submit another target.";
        await typeText(chatbox, sorryText);

        terminalLight.classList.remove('red');
        terminalLight.classList.add('green');
        bt_submit_Target.classList.remove('hide');
        blockElements(false);
        userInput.focus();
        confirmSubmit = false;
        isSubmitTarget = false;
    }

}