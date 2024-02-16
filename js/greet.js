async function greet(){ 
    
    blockElements(true);
    let welcomeMessageCount = Number(localStorage.getItem("welcomeMessageCount"));

    const welcomeMessage = rantCPUobj.welcomeMessage + " " + rantCPUobj.welcomeMessages[welcomeMessageCount];

    await typeText(chatbox, rantCPUobj.versionMessage);
    await typeText(chatbox, welcomeMessage);

    welcomeMessageCount += 1;

    if (welcomeMessageCount == rantCPUobj.welcomeMessages.length) {
        welcomeMessageCount = 0;
    }

    localStorage.setItem("welcomeMessageCount", welcomeMessageCount);
    
    blockElements(false);
}

