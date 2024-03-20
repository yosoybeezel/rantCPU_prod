let isTxtGame = false;
let txtGameOn = false;
const exitGame = document.getElementById('exitGame');
const storyIndex = document.getElementById('storyIndex');
const curPage = document.getElementById('curPage');




async function waitAndRemoveClass() {
    return new Promise((resolve) => {
        setTimeout(async () => {
            chatbox.classList.remove('hide');
            storyIndex.classList.remove('hide');
            chatbox_Container.classList.remove('fireworks');
            setTimeout(async() => {
                await typeText(chatbox, rantCPUobj.gameData.endMessage[0]);
                resolve(); // Resolve the promise once the timeout and typing are complete
            }, 1000);
        }, 3000);
    });
}




function exitGameF(){
    isTxtGame = false;
    txtGameOn = false;
    exitGame.classList.add('hide');
    exitGame.removeEventListener("click", exitGameF)
    storyIndex.classList.add('hide');
    userInput.classList.remove('hide');
    neutralMode();
}
async function startTextGame(){
    displayScene("initGame"); 
    exitGame.addEventListener("click", exitGameF)
    
    userInput.classList.add('hide');
}
async function displayScene(key) {    
    txtGameOn = true;

    const scene = rantCPUobj.gameData[key];
    
    let curPageNum = Number(curPage.innerHTML);

    switch (key) {
        case "initGame":
            chatbox.innerHTML = "";    
            isIntro = true;
            break;
        case "exit":
            exitGameF();
            return;
        case "start":
            exitGame.classList.remove('hide');
            exitGame.classList.remove('disabled');
            exitGame.disabled = false;
            storyIndex.classList.remove('hide');
            curPageNum = 1;
            curPage.innerHTML = "1";
            break;
        case "conclusion":
            exitGame.classList.add('hide');
            break;
    }
    if(key == "exitScreen"){
        chatbox.classList.add('hide');
        storyIndex.classList.add('hide');
        chatbox_Container.classList.add('fireworks');
        
        await waitAndRemoveClass();
        
    }else{
        await typeText(chatbox, scene.narrative);
    }
    
    isIntro = false;
    if(scene.choices.length == 1){
        
        setTimeout(() => {
            
            if(!txtGameOn){
                return;
            }
            displayScene(scene.choices[0].nextKey);    
        }, 1000);
        return;
    }
    
    for (const choice of scene.choices) {
        isTxtGame = true;
        if(!txtGameOn){
            return;
        }
        await typeText(chatbox, choice.text);
    }

    const txtOptions = document.querySelectorAll('.txtOption');

    txtOptions.forEach((element, index) => {
        element.addEventListener('click', function () {
            chatbox.innerHTML = "";
            displayScene(scene.choices[index].nextKey);            
            if(key != "initGame" && key != "start" && key != "conclusion" && key != "exitScreen"){
                curPageNum +=1;
                curPage.innerHTML = curPageNum;                
            }
            
        });
    });
    
    
    isTxtGame = false;
}
