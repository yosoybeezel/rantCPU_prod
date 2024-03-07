
async function neutralMode() {
    blockElements(true);
    let welcomeMessageCount = Number(localStorage.getItem("welcomeMessageCount"));
    chatbox.innerHTML = '';
    
    Array.from(buttons).forEach(button => {
        button.classList.remove('hide');
    });

    await typeText(chatbox, rantCPUobj.welcomeMessages[welcomeMessageCount]);
    welcomeMessageCount += 1;

    if (welcomeMessageCount == rantCPUobj.welcomeMessages.length) {
        welcomeMessageCount = 0;
    }

    localStorage.setItem("welcomeMessageCount", welcomeMessageCount);
    blockElements(false);
}