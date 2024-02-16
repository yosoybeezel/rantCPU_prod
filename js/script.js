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
    './assets/580122__annyew__confirm-button-2.wav',
    './assets/click_effect-86995.mp3',
    './assets/snd_fragment_retrievewav-14728.mp3'
    );

// prevent right-click
document.addEventListener('contextmenu', event => event.preventDefault());

    // Audio elements for buttons
const moodButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_12.wav");
const switchButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_11.wav");
const powerButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_10.wav");
const closeButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_7.wav");
const powerButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_10.wav");
const switchButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_11.wav");
const moodButtonSound = new Audio("./assets/MA_Betacut_SwitchButton_12.wav");
const targetButtonSound = new Audio("./assets/Old Industria Clicks-002.wav");
const targetLightSound = new Audio("./assets/Old Industria Clicks-003.wav");
const pressToStartSound = new Audio("./assets/580122__annyew__confirm-button-2.wav");
const pressModeButton = new Audio("./assets/click_effect-86995.mp3");
const scorePoint = new Audio("./assets/snd_fragment_retrievewav-14728.mp3");

const SM_instagram = document.getElementById('SM_instagram');
const SM_tiktok = document.getElementById('SM_tiktok');
const SM_twitter = document.getElementById('SM_twitter');
const userInput = document.getElementById('userInput');

let submitTargetCount = 0;
let confirmSubmit = false;
let isPageVisible = true; 

const videoBackgroundContainer = document.getElementById('videoBackground');
const videoBackgroundPortraitContainer = document.getElementById('videoBackgroundPortrait');

// Set the volume of each audio element to 0.3 (30% volume)
scorePoint.volume = 0.5;
// pressToStartSound.volume = moodButtonSound.volume = switchButtonSound.volume = powerButtonSound.volume = closeButtonSound.volume = targetButtonSound.volume = targetLightSound = 0.3;

let isMobile = false;


document.addEventListener("visibilitychange", handleVisibilityChange);


function handleVisibilityChange() {
  if (document.hidden) {
    // Page is not visible (e.g., minimized or in another tab)
    isPageVisible = false;
    // console.log('page is not visible')
  } else {
    // Page is visible
    isPageVisible = true;
    // console.log('page not visible')
  }
}

// Start
// Event triggered by html5Preloader when assets have been loaded
rantCPULoader.on('finish', async ()=> {

    initVideo();    
    
});
