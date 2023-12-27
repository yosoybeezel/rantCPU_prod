const main_Container = document.getElementById('main_Container');
const powerButton = document.getElementById('powerButton');
const terminalLight = document.getElementById('terminalLight');
const userInput = document.getElementById('userInput');
const curiousButton = document.getElementById('curiousButton');
const pressToStartSound = new Audio("./assets/580122__annyew__confirm-button-2.wav");

function pressToStart(event) {
    // Remove the event listener after it's triggered
    document.removeEventListener("keypress", pressToStart);
    
    pressToStartSound.play();

    main_Container.classList.remove('fullHeight');
    chatbox.innerHTML = '';
    
    
    setTimeout(() => {
        terminalLight.classList.remove('hide');
        curiousButton.classList.remove('hide');
        userInput.classList.remove('hide');
        introChat();
    }, 2000);
}