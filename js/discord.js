async function discordPrompt() {
    isDiscord = true;

    let discordMessageCount = Number(localStorage.getItem("discordMessageCount"));

    await typeText(chatbox, rantCPUobj.discordMessage[discordMessageCount]);

    discordMessageCount += 1;
    
    if (discordMessageCount >= rantCPUobj.discordMessage.length) {

        localStorage.setItem("discordMessageCount", 0);
        return;
    }

    
    localStorage.setItem("discordMessageCount", discordMessageCount);
}