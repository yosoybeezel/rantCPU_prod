const chatbox = document.getElementById('chatbox');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(element, text) {

    

    chatbox.innerHTML += "<p class='assistant'><strong>> RantCPU: </strong></p>";

    const lastChild = element.lastChild;

    return new Promise(async (resolve) => {
        for (let i = 0; i < text.length; i++) {
            lastChild.innerHTML += text.charAt(i);
            element.scrollTop = element.scrollHeight; // Scroll to the bottom
            await sleep(35); // Adjust typing speed here (in milliseconds)
        }

        element.scrollTop = element.scrollHeight; // Scroll to the bottom
        resolve(); // Resolve the promise once typing is complete
    });
    
}