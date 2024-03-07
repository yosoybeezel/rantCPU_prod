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
    chatbox.classList.remove('wordScrambeOn');
    
    let userHiScore = localStorage.getItem("simonSaysMaxScore");
    simonScore.classList.remove('hide');
    hiScore.innerHTML = userHiScore;
    
    Array.from(buttons).forEach(button => {
        button.classList.add('hide');
    });

    puzzleButton.classList.remove('hide');

    chatbox.innerHTML = '';
    let simonSaysIntroCount = Number(localStorage.getItem("simonSaysIntroCount"));
    await typeText(chatbox, rantCPUobj.simonSaysIntro[simonSaysIntroCount]);
    // await typeText(chatbox, rantCPUobj.simonSaysBeckon[0])
    await typeText(chatbox, rantCPUobj.simonSaysConfirm[0])
    simonSaysIntroCount += 1;

    if (simonSaysIntroCount == rantCPUobj.simonSaysIntro.length) {
        simonSaysIntroCount = 0;
    }

    localStorage.setItem("simonSaysIntroCount", simonSaysIntroCount);
    
    sequence = [];
    userSequence = [];
    round = 0;
    gameOn = true;
    
    unblockUserInput();

    // blockElements(true);
    // nextRound();
    
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
    }, 800);
    
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
            blockElements(true);
            gameOn = false;
            gameOverAudio.play();
            let simonSaysGameOverCount = Number(localStorage.getItem("simonSaysGameOverCount"));
            let userHiScore = Number(localStorage.getItem("simonSaysMaxScore"));
                        
            if(round > userHiScore){
                hiScore.innerHTML = round;
                localStorage.setItem("simonSaysMaxScore", round);
            }
            
            simonSaysGameOverCount += 1;

            if (simonSaysGameOverCount >= rantCPUobj.simonSaysGameOver.length) {

                simonSaysGameOverCount = 0;
            }

            localStorage.setItem("simonSaysGameOverCount", simonSaysGameOverCount);
            
            gameOver();
            return;
        }
    }
    if (userSequence.length === sequence.length) {
        round++;
        setTimeout(() => {
            score.innerHTML = round;
            scorePoint.play();
            nextRound();
        }, 500);
    }
}

async function endRantCPUSays(){
    
    gameOn = false;
    gameOverAudio.play();
    simonScore.classList.add('hide');
    chatbox.classList.remove('simonOn');
    score.innerHTML = '0';
    chatbox.innerHTML = '';
    await typeText(chatbox, rantCPUobj.simonSaysCanceled[0]);

    setTimeout(() => {
        neutralMode()
    }, 2000);
    
    

}