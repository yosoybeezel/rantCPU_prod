let isTyping = false;
const chatbox = document.getElementById('chatbox');
let skipTyping = false; // Flag to indicate whether to skip typing

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(element, text) {
    isTyping = true;

    if (isIntro && isInitArcade) {
        chatbox.innerHTML += "<p class='assistant arcadeElement'></p>";
    } else if (isIntro) {
        chatbox.innerHTML += "<p class='assistant'></p>";
    } else if (isTxtGame) {
        chatbox.innerHTML += "<p class='assistant txtOption'></p>";
    } else {
        chatbox.innerHTML += "<p class='assistant'><strong>> RantCPU: </strong></p>";
    }

    const lastChild = element.lastChild;

    for (let i = 0; i < text.length; i++) {
        if (skipTyping) {
            lastChild.innerHTML += text;
            element.scrollTop = element.scrollHeight; // Scroll to the bottom
            skipTyping = false;
            break;
        }
            
        lastChild.innerHTML += text.charAt(i);
        element.scrollTop = element.scrollHeight; // Scroll to the bottom
        await sleep(20); // Adjust typing speed here (in milliseconds)
    }

    
    isTyping = false;
}

// Function to skip typing
function skipTypingAnimation() {
    skipTyping = true; // Set the skipTyping flag to true
}
