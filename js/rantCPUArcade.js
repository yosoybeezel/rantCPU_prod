let isInitArcade = false;

async function initArcade() {

    isIntro = true;

    blockElements(true);
    Array.from(buttons).forEach(button => {
        button.classList.add('hide');
    });
    puzzleButton.classList.remove('hide');

    chatbox.innerHTML = "";

    await typeText(chatbox, rantCPUobj.arcadeIntro[0]);
    isIntro = isInitArcade = true;

    
    await typeText(chatbox, "RantCPU Says");

    await typeText(chatbox, "RantCPU's Word Scramble");
    
    await typeText(chatbox, "RantCPU's Big City Adventure");

    await typeText(chatbox, "Exit");

    
    const arcadeElements = document.querySelectorAll('.arcadeElement');

    arcadeElements.forEach((element, index) => {
        element.addEventListener('click', function () {

            switch (index) {
                case 0:
                    startGame();
                    break;
                case 1:
                    wordScramble();
                    break;
                case 2:
                    startTextGame();
                    // displayScene("initGame");
                    // neutralMode();
                    break;                    
                case 3:
                    neutralMode();
                    break;
            }
        });
    });

    isInitArcade = false;
    isIntro = false;

}

