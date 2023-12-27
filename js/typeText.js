const chatbox = document.getElementById('chatbox');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(element, text) {

    if(isWelcome){
        chatbox.innerHTML += "<p id='btnStart' class='assistant' onClick='pressToStart()'><strong>> RantCPU: </strong></p>";
        isWelcome = false;
        
    } else{
        chatbox.innerHTML += "<p class='assistant'><strong>> RantCPU: </strong></p>";
        
    }    

    for (let i = 0; i < text.length; i++) {
        element.lastChild.innerHTML += text.charAt(i);
        element.scrollTop = element.scrollHeight; // Scroll to the bottom
        await sleep(80); // Adjust typing speed here (in milliseconds)
    }

    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom

}