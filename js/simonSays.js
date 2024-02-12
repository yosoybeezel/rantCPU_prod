const simonScore = document.getElementById('simonScore');
const hiScore = document.getElementById('hiScore');
const score = document.getElementById('score');

const simonColors = ['chatButton', 'rantButton', 'puzzleButton', 'curiousButton'];

let gameOn = false;
let sequence = [];
let userSequence = [];
let round = 0;

const gameOverAudio = new Audio('./assets/GameOver.mp3');

const chatButtonAudio = new Audio('./assets/Beep1.mp3');
const rantButtonAudio = new Audio('./assets/Beep2.mp3');
const puzzleButtonAudio = new Audio('./assets/Beep3.mp3');
const curiousButtonAudio = new Audio('./assets/Beep4.mp3');


async function startGame() {
    blockElements(true);
    chatbox.classList.add('simonOn');
    
    bt_power.classList.add('hide');
    bt_submit_Target.classList.add('hide');
    bt_service.classList.add('hide');
    userInput.classList.add('hide');

    let userHiScore = localStorage.getItem("simonSaysMaxScore");
    simonScore.classList.remove('hide');
    hiScore.innerHTML = userHiScore;
    const buttons = document.getElementsByClassName('mood');
    
    Array.from(buttons).forEach(button => {
        button.classList.add('hide');
    });

    chatbox.innerHTML = '';
    let simonSaysIntroCount = Number(localStorage.getItem("simonSaysIntroCount"));
    await typeText(chatbox, rantCPUobj.simonSaysIntro[simonSaysIntroCount]);
    await typeText(chatbox, rantCPUobj.simonSaysBeckon[0])
    simonSaysIntroCount += 1;

    if (simonSaysIntroCount == rantCPUobj.simonSaysIntro.length) {
        simonSaysIntroCount = 0;
    }

    localStorage.setItem("simonSaysIntroCount", simonSaysIntroCount);
    
    sequence = [];
    userSequence = [];
    round = 0;
    gameOn = true;
    blockElements(true);
    nextRound();
    
}
function nextRound() {
    blockElements(true);
    
    displaySequence();
}
function displaySequence() {
    userSequence = [];
    addToSequence();
    showColors(sequence);
}
function addToSequence() {
    const randomColor = simonColors[Math.floor(Math.random() * 4)];
    sequence.push(randomColor);
}
function showColors(sequence) {
    let i = 0;
    const intervalId = setInterval(() => {
        highlightButton(sequence[i]);
        i++;
        if (i >= sequence.length) {
            clearInterval(intervalId);
            blockElements(false);
        }
    }, 1000);
    
}

function highlightButton(color) {
    const button = document.getElementById(color);
    button.classList.remove('hide');    
    switch (color) {
        case 'chatButton':
            chatButtonAudio.play(); 
            break;
        case 'rantButton':
            rantButtonAudio.play();                
            break;
        case 'puzzleButton':
            puzzleButtonAudio.play();
            break;
        case 'curiousButton':
            curiousButtonAudio.play();                
            break;
    }
    setTimeout(() => {
        button.classList.add('hide');
    }, 500);
}

async function checkSequence() {
    
    for (let i = 0; i < userSequence.length; i++) {
        if (userSequence[i] !== sequence[i]) {
            gameOn = false;
            gameOverAudio.play();
            let simonSaysGameOverCount = Number(localStorage.getItem("simonSaysGameOverCount"));
            let userHiScore = Number(localStorage.getItem("simonSaysMaxScore"));
            
            // const result = `Game Over! You reached round ${round}.`
            
            if(round > userHiScore){
                hiScore.innerHTML = round;
                localStorage.setItem("simonSaysMaxScore", round);
            }
            
            simonSaysGameOverCount += 1;

            if (simonSaysGameOverCount == rantCPUobj.simonSaysGameOver.length) {

                simonSaysGameOverCount = 0;
            }

            localStorage.setItem("simonSaysGameOverCount", simonSaysGameOverCount);
            
            gameOver();
        }
    }
    if (userSequence.length === sequence.length) {
        round++;
        setTimeout(() => {
            score.innerHTML = round;
            nextRound();
        }, 1000);
    }
}