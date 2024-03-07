let isInitArcade = false;

async function initArcade() {

    isIntro = true

    blockElements(true);

    chatbox.innerHTML = "";

    await typeText(chatbox, rantCPUobj.arcadeIntro[0]);

    isInitArcade = true;

    await typeText(chatbox, "RantCPU Says");

    await typeText(chatbox, "RantCPU's Word Scramble");

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
                    neutralMode();
                    break;

                default:
                    break;
            }
        });
    });

    isInitArcade = false;
    isIntro = false;

}

