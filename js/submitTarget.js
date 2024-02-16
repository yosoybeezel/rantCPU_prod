const bt_submit_Target = document.getElementById('bt_submit_Target');

let isSubmitTarget = false;
let foundTargetResponse = '';

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

bt_submit_Target.addEventListener("click", (event) => {
    targetButtonSound.play();
});

async function askSubmitTarget() {

    userInput.value = ""; // Clear the text field
    
    blockElements(true);
    

    terminalLight.classList.remove('green');
    terminalLight.classList.add('red');

    const buttons = document.getElementsByClassName('mood');
    
    Array.from(buttons).forEach(button => {
        button.classList.add('hide');
    });


    curiousButton.classList.remove('hide');
        
    let targetLimit = getCookie("targetLimit");

    if (targetLimit) {

        chatbox.innerHTML = "";

        await typeText(chatbox, rantCPUobj.submitTText[0]);

        setTimeout(async () => {
            chatMode();
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


    } else {
        localStorage.setItem("askSubmitTargetCount", askSubmitTargetCount);
    }
    
    // blockElements(false);
    userInput.disabled = false;
    userInput.classList.remove('disabled');
    userInput.focus();

    
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
        foundTargetResponse = "Yes, of course I know " + bmk ;
    
        chatbox_Container.style.transform = 'scaleY(0)';

        
        
        setTimeout(() => {
            terminal_Container.classList.add('hide');
            videoBackground.setCurrentTime(15.7);
            videoBackground.play();    
        }, 600);

    } else {

        input = await capitalize(input);
        
        const sorryText = "Sorry, I don't know \"" + input + "\". Click the TARGET button to submit another target.";
        await typeText(chatbox, sorryText);

        const buttons = document.getElementsByClassName('mood');
    
        Array.from(buttons).forEach(button => {
            button.classList.add('hide');
        });
        
        terminalLight.classList.remove('red');
        terminalLight.classList.add('green');
        bt_submit_Target.classList.remove('hide');
        chatButton.classList.remove('hide');
        blockElements(false);
        
        confirmSubmit = false;
        isSubmitTarget = false;
    }

}