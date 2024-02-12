async function submitTargetTrue(input) {
    
    const keysResponses = Object.keys(rantCPUobj.happy.responses);
    const exampleQ = keysResponses[Math.floor(Math.random() * keysResponses.length)];

    if (input == 'y' || input == 'yes') {
        confirmSubmit = true;
        chatbox.innerHTML = "";

        await typeText(chatbox, "Write a target's name.");
        isSubmitTarget = false;
        submitTargetCount = 0;
        blockElements(false);
        userInput.focus();

        return;
    } else if (input == 'n' || input == 'no') {
        submitTargetCount = 0;
        chatbox.innerHTML = "";
        const buttons = document.getElementsByClassName('mood');
    
        Array.from(buttons).forEach(button => {
            button.classList.add('hide');
        });

        let dontSubmitMessageCount = Number(localStorage.getItem("dontSubmitMessageCount"));

        await typeText(chatbox, rantCPUobj.dontSubmitMessage[dontSubmitMessageCount]);
        chatButton.classList.remove('hide');
        isSubmitTarget = false;
        dontSubmitMessageCount += 1;
        if (dontSubmitMessageCount == rantCPUobj.dontSubmitMessage.length) {
            dontSubmitMessageCount = 0;
        }
    
        localStorage.setItem("dontSubmitMessageCount", dontSubmitMessageCount);
        blockElements(false);
        userInput.focus();
        terminalLight.classList.remove('red');
        terminalLight.classList.add('green')
        bt_submit_Target.classList.remove('hide')
        return;
    } else {
        

        if (submitTargetCount === 2) {

            chatbox.innerHTML = "";

            await typeText(chatbox, rantCPUobj.dontSubmitMessage[0] + '\"' + exampleQ + '\"');
            isSubmitTarget = false;


            blockElements(false);
            userInput.focus();
            submitTargetCount = 0;
            
            terminalLight.classList.remove('red');
            terminalLight.classList.add('green')
            bt_submit_Target.classList.remove('hide');
            
            return;
        }

        chatbox.innerHTML = "";

        let askSubmitTargetCount = Number(localStorage.getItem("askSubmitTargetCount"));

        await typeText(chatbox, rantCPUobj.askSubmitTarget[askSubmitTargetCount]);

        submitTargetCount += 1;
        askSubmitTargetCount += 1;

        if (askSubmitTargetCount == rantCPUobj.askSubmitTarget.length) {

            localStorage.setItem("askSubmitTargetCount", 0);
            bt_submit_Target.classList.remove('hide')
            blockElements(false);
            userInput.focus();
            return;
        }

        localStorage.setItem("askSubmitTargetCount", askSubmitTargetCount);
        bt_submit_Target.classList.remove('hide')
        blockElements(false);
        userInput.focus();
        return;
    }
}