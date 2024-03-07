const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    time = document.querySelector(".time"),
    timeText = document.querySelector(".time b"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word"),
    details = document.getElementById("details");
    wordScrambleContainer = document.getElementById("wordScrambleContainer");

let isWordScrambleOn = false;
let isWordScramble = false;
let correctWord, timer, category, wsHiScore;
let currentQuestion = 0;
let curCategory = 0;

const checkWord = async (input) => {
    
    let userWord = input.toLowerCase();
    
    if (!userWord){
        await typeText(chatbox, "Please enter the word to check!");
        return;
    } else if (userWord !== correctWord){
        
        await typeText(chatbox, `Oops! \"${userWord}\" is not the correct answer`)
        unblockUserInput();
        return;
    }  else {
        isWordScramble = true;
        isWordScrambleOn = false;
        
        userInput.removeAttribute("maxlength");

        let curScore = Number(score.textContent);
        
        score.innerHTML = curScore +=1
        
        wsHiScore = Number(localStorage.getItem("wordScrambleHiScore"));

        if(curScore >= wsHiScore){
            hiScore.innerHTML = curScore;
            localStorage.setItem("wordScrambleHiScore", curScore);
        }
        
        clearInterval(timer);
        timeText.innerText = "30";
        wordText.innerHTML = correctWord.toUpperCase();
        await typeText(chatbox,`Congrats! ${correctWord.toUpperCase()} is the correct word`);
        
        if(currentQuestion >= rantCPUobj.wordScramble[category].length){
            currentQuestion = 0;
            isWordScramble = true;
            isWordScrambleOn = false;
            curCategory +=1;


            if (curCategory >= Object.keys(rantCPUobj.wordScramble).length) {
                curCategory = 0;
                score.innerHTML = "0";
            }

            clearInterval(timer);
            timeText.innerText = "30";
            
            chatbox.innerHTML = "";

            let txtCategory;

            switch(category){
                case 'moviesTv':
                    txtCategory = 'Comics';
                    break;
                case 'comics':
                    txtCategory = 'Video Games';
                    break;
                case 'videoGames':
                    txtCategory = 'Movies & TV';
                    break;
            }

            await typeText(chatbox, "You've reached the end of this category. You ARE good!");

            await typeText(chatbox, `Ready for next category? ${ txtCategory}  Y / N`);
            
            unblockUserInput();
            return;
        }
        await typeText(chatbox,rantCPUobj.wordScrambleConfirm[0]);
        unblockUserInput();
    }
    
};

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(async() => {
        if (maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }

        clearInterval(timer);
        chatbox.innerHTML = "";
        userInput.value = "";
        wordText.innerHTML = correctWord.toUpperCase();
        timeText.innerText = "30";
        await typeText(chatbox, `Time off! ${correctWord.toUpperCase()} was the correct word`);
        await typeText(chatbox,rantCPUobj.wordScrambleConfirm[0]);
        isWordScramble = true;
        isWordScrambleOn = false;
        unblockUserInput();    
       
    }, 1000);

}

function endGameWordScramble(){
    simonScore.classList.add('hide');
    
    isWordScramble = false;
    score.innerHTML = "0";
    time.classList.add('hide');
    wordScrambleContainer.classList.add('hide');
    chatbox.classList.remove('wordScrambeOn');
    details.classList.add('hide');
    chatbox.innerHTML = "";
}

const initWordScramble = async() => {
    isWordScramble = false;
    isWordScrambleOn = true;
    details.classList.remove('hide');
    chatbox.innerHTML = "";
    initTimer(30);


    category = Object.keys(rantCPUobj.wordScramble)[curCategory];
    
    

    if(currentQuestion >= rantCPUobj.wordScramble[category].length){
        currentQuestion = 0;
        isWordScramble = true;
        isWordScrambleOn = false;
        curCategory +=1;


        if (curCategory >= Object.keys(rantCPUobj.wordScramble).length) {
            curCategory = 0;
            score.innerHTML = "0";
        }

        clearInterval(timer);
        timeText.innerText = "30";
        
        chatbox.innerHTML = "";

        let txtCategory;

        switch(category){
            case 'moviesTv':
                txtCategory = 'Comics';
                break;
            case 'comics':
                txtCategory = 'Video Games';
                break;
            case 'videoGames':
                txtCategory = 'Movies & TV';
                break;
        }

        await typeText(chatbox, "You've reached the end of this category. You ARE good!");

        await typeText(chatbox, `Ready for next category? ${ txtCategory}  Y / N`);
        
        unblockUserInput();
        return;
    }


    let currentElement = rantCPUobj.wordScramble[category][currentQuestion];
    
    currentQuestion +=1;



    let wordArray = currentElement.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = currentElement.hint;
    correctWord = currentElement.word.toLowerCase();;
    userInput.value = "";
    userInput.setAttribute("maxlength", correctWord.length);
    unblockUserInput();
}

async function wordScramble() {
    wsHiScore = Number(localStorage.getItem("wordScrambleScore"));
    wsHiScore = Number(localStorage.getItem("wordScrambleHiScore"));
    hiScore.innerHTML = wsHiScore;

    chatbox.classList.remove('simonOn');
    blockElements(true);
    chatbox.classList.add('wordScrambeOn');
    simonScore.classList.remove('hide');
    time.classList.remove('hide');
    isWordScramble = true;
    wordScrambleContainer.classList.remove('hide');
    if(timer){
        clearInterval(timer);
        score.innerHTML = "0"
    }    

    chatbox.innerHTML = wordText.innerHTML = hintText.innerText = "";
    let simonSaysIntroCount = Number(localStorage.getItem("simonSaysIntroCount"));

    const confirmQuestion = rantCPUobj.wordScrambleQuestion[0] + " Category is, Movies & TV." + " Y / N";
    await typeText(chatbox, rantCPUobj.simonSaysIntro[simonSaysIntroCount]);   
    await typeText(chatbox, confirmQuestion);
    simonSaysIntroCount += 1;

    if (simonSaysIntroCount == rantCPUobj.simonSaysIntro.length) {
        simonSaysIntroCount = 0;
    }

    localStorage.setItem("simonSaysIntroCount", simonSaysIntroCount);

    unblockUserInput();

}