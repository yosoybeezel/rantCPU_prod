const generateResponse = async (input)=>{
    if (input.length == 0) {        
        return;
    }

    input = input.toLowerCase().replace(/'/g, ''); // Remove apostrophes
    userInput.value = ""; // Clear the text field
    
    // user types
    chatbox.innerHTML += "<p class='user'><strong>> You:</strong> " + input + "</p>";
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom

    if(isIntro){
        isIntro = false;
        blockElements(true);
        introChat();
    }

}