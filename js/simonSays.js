const simonColors = ['chatButton', 'rantButton', 'puzzleButton', 'curiousButton'];

let gameOn = false;
let sequence = [];
let userSequence = [];
let round = 0;

const audio_01 = new Audio('./assets/SynthBeep EC03_61_3.wav');


async function startGame() {
    const buttons = document.getElementsByClassName('mood');
    
    Array.from(buttons).forEach(button => {
        button.classList.add('hide');
    });

    chatbox.innerHTML = '';

    await typeText(chatbox, rantCPUobj.simonSaysIntro[0]);
    await typeText(chatbox, rantCPUobj.simonSaysIntro[1]);
    await typeText(chatbox, rantCPUobj.simonSaysIntro[2]);
    
    sequence = [];
    userSequence = [];
    round = 0;
    gameOn = true;
    nextRound();
    
}
function nextRound() {
    round++;
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
        }
    }, 1000);
}

function highlightButton(color) {
    const button = document.getElementById(color);
    button.classList.remove('hide');    
    audio_01.play();
    setTimeout(() => {
        button.classList.add('hide');
    }, 500);
}

function handleClick(button) {

    
    const dataBtnValue = button.getAttribute('data-btn');
    const showButton = document.getElementById(dataBtnValue);

    if(dataBtnValue == 'puzzleButton' && !gameOn){
        startGame();
        return;
    }

    if(gameOn){
        audio_01.play();
        setTimeout(() => {
            showButton.classList.add('hide');
        }, 500);

        showButton.classList.remove('hide');
        
        userSequence.push(dataBtnValue);

        checkSequence();

        return;
    } else{
        switch (dataBtnValue) {
            case 'rantButton':
                terminal_Container.classList.add('hide');
                blockElements(true)
                const JoeMachi_01 = new Audio("./assets/Rantcpu3.wav");
                
                /* the audio is now playable; play it if permissions allow */
                JoeMachi_01.addEventListener("canplaythrough", (event) => {                    
                    JoeMachi_01.play();
                });
                
                  /* Listen for the 'ended' event on the audio element */
                JoeMachi_01.addEventListener('ended', (event) => {
                    console.log('audio ended');
                    blockElements(false);
                    terminal_Container.classList.remove('hide');
                });
                break;
        
            default:
                break;
        }
    }
    
    
}
async function checkSequence() {
    for (let i = 0; i < userSequence.length; i++) {
        if (userSequence[i] !== sequence[i]) {
            
            let simonSaysGameOverCount = Number(localStorage.getItem("simonSaysGameOverCount"));
            
            const simonSaysGameOver = rantCPUobj.simonSaysGameOver[simonSaysGameOverCount];
            const result = `Game Over! You reached round ${round}.`
            
            setTimeout(async() => {
                chatButton.classList.remove('hide');
                await typeText(chatbox, result);
                await typeText(chatbox,simonSaysGameOver);
                
                gameOn = false;
            }, 500);

            simonSaysGameOverCount += 1;

            if (simonSaysGameOverCount == rantCPUobj.simonSaysGameOver.length) {

                localStorage.setItem("simonSaysGameOverCount", 0);
                blockElements(false);
                return;
            }

            localStorage.setItem("simonSaysGameOverCount", simonSaysGameOverCount);
            
            return;
        }
    }
    if (userSequence.length === sequence.length) {
        setTimeout(() => {
            nextRound();
        }, 1000);
    }
}