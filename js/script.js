let rantCPULoader = html5Preloader(
    './assets/terminalVideoBackground.jpg',
    './assets/Green_Service_Light.jpg',
    './assets/mood_happy.jpg',
    './assets/mood_meh.jpg',
    './assets/mood_neutral.jpg',
    './assets/mood_sad.jpg',
    './assets/powerButton.jpg',
    './assets/Red_Service_Light.jpg',
    './assets/Switch_off.png',
    './assets/RantbyteScreen.png',
    './assets/MA_Betacut_SwitchButton_7.wav',
    './assets/MA_Betacut_SwitchButton_10.wav',
    './assets/MA_Betacut_SwitchButton_11.wav',
    './assets/MA_Betacut_SwitchButton_12.wav',
    './assets/Old Industria Clicks-002.wav',
    './assets/Old Industria Clicks-003.wav',
    './assets/580122__annyew__confirm-button-2.wav'
    );

    // Audio elements for buttons
const moodButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_12.wav");
const switchButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_11.wav");
const powerButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_10.wav");
const closeButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_7.wav");
const targetButtonSound = new Audio("./assets/Old Industria Clicks-002.wav");
const targetLightSound = new Audio("./assets/Old Industria Clicks-003.wav");
const pressToStartSound = new Audio("./assets/580122__annyew__confirm-button-2.wav");

const SM_instagram = document.getElementById('SM_instagram');
const SM_tiktok = document.getElementById('SM_tiktok');
const SM_twitter = document.getElementById('SM_twitter');
const userInput = document.getElementById('userInput');

let submitTargetCount = 0;
let confirmSubmit = false;

const videoBackgroundContainer = document.getElementById('videoBackground');
const videoBackgroundPortraitContainer = document.getElementById('videoBackgroundPortrait');
let isMobile = false;

// Set the volume of each audio element to 0.3 (30% volume)
// pressToStartSound.volume = moodButtonSound.volume = switchButtonSound.volume = powerButtonSound.volume = closeButtonSound.volume = targetButtonSound.volume = targetLightSound = 0.3;

let isWelcome = true;

// Start
// Event triggered by html5Preloader when assets have been loaded
rantCPULoader.on('finish', async ()=> {
    

    
    initVideo();    
    
});
