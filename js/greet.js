async function greet(){ 
    blockElements(true);
 

    

    await typeText(chatbox, rantCPUobj.versionMessage);
    await typeText(chatbox, rantCPUobj.welcomeMessage);

    
    blockElements(false);
}

