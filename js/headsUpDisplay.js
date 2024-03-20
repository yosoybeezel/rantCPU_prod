const headsUpDisplay = document.getElementById('headsUpDisplay');

function showHUD(bool){
    if(bool){
        headsUpDisplay.classList.remove('hide');
        chatbox.classList.add('hudOn');
        chatbox.classList.remove('simonOn');
        chatbox.classList.remove('wordScrambeOn');
    } else {
        headsUpDisplay.classList.add('hide');
        chatbox.classList.remove('hudOn');
    }
}