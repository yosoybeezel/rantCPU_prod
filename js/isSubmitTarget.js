async function submitTargetTrue(input) {
    
    if (input == 'y' || input == 'yes') {
        confirmSubmit = true;
        chatbox.innerHTML = "";

        await typeText(chatbox, "Write a target's name.");
        isSubmitTarget = false;
        submitTargetCount = 0;
        unblockUserInput();

        return;
    } else if (input == 'n' || input == 'no') {
        submitTargetCount = 0;
        chatbox.innerHTML = "";
        let dontSubmitMessageCount = Number(localStorage.getItem("dontSubmitMessageCount"));

        await typeText(chatbox, rantCPUobj.dontSubmitMessage[dontSubmitMessageCount]);
        isSubmitTarget = false;
        dontSubmitMessageCount += 1;
        if (dontSubmitMessageCount == rantCPUobj.dontSubmitMessage.length) {
            dontSubmitMessageCount = 0;
        }

        localStorage.setItem("dontSubmitMessageCount", dontSubmitMessageCount);
        
        
        terminalLight.classList.remove('red');
        terminalLight.classList.add('green')
        bt_submit_Target.classList.remove('hide');
        
        setTimeout(() => {
            neutralMode()
        }, 2000);
        return;
    } else {


        if (submitTargetCount === 2) {

            chatbox.innerHTML = "";

            let dontSubmitMessageCount = Number(localStorage.getItem("dontSubmitMessageCount"));

            await typeText(chatbox, rantCPUobj.dontSubmitMessage[dontSubmitMessageCount]);

            isSubmitTarget = false;
            dontSubmitMessageCount += 1;

            if (dontSubmitMessageCount == rantCPUobj.dontSubmitMessage.length) {
                dontSubmitMessageCount = 0;
            }

            localStorage.setItem("dontSubmitMessageCount", dontSubmitMessageCount);

            submitTargetCount = 0;
            
            terminalLight.classList.remove('red');
            terminalLight.classList.add('green')
            bt_submit_Target.classList.remove('hide');
            
            setTimeout(() => {
                neutralMode()
            }, 2000);

            return;
        }

        await typeText(chatbox, rantCPUobj.askSubmitTargetAgain[0]);

        submitTargetCount += 1;
        
        bt_submit_Target.classList.remove('hide')
        blockElements(false);

        return;
    }
}