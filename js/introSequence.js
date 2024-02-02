async function introSequence(){

    switch (introSequenceCount) {
        case 0:
            blockElements(true);
            await typeText(chatbox, rantCPUobj.firstTime_01);
            setTimeout(() => {
                introSequence();
            }, 500);
            break;
        case 1:
            await typeText(chatbox, rantCPUobj.firstTime_02);
            setTimeout(() => {
                terminal_Container.classList.add('hide');
                videoBackground.setCurrentTime(15.7);
                videoBackground.play();
            }, 1000);
            break;
        case 2:
            await typeText(chatbox, rantCPUobj.firstTime_03);
            setTimeout(async() => {
                await rantBytes();
            }, 500);
            break;
        case 3:
            await typeText(chatbox, rantCPUobj.firstTime_04);
            setTimeout(() => {
                introSequence();
            }, 500);
            break;
        case 4:
            await typeText(chatbox, rantCPUobj.firstTime_05);
            setTimeout(() => {
                introSequence();
            }, 500);
            break;
        case 5:
            await typeText(chatbox, rantCPUobj.firstTime_06);
            introSequenceCount = 0;
            terminalLight.classList.remove('red');
            terminalLight.classList.add('green');
            bt_submit_Target.classList.remove('hide');
            targetLightSound.play();
            break;
    }

    introSequenceCount +=1;

}