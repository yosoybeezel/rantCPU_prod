const closeLegalsBtn = document.getElementById('closeLegalsBtn');

function privacyPolicy(){
    blockElements(true);
    closeLegalsBtn.classList.remove('hide');
    closeLegalsBtn.classList.remove('disabled');
    closeLegalsBtn.disabled = false;
    userInput.classList.add('hide');
    chatbox.innerHTML = "";
    chatbox.innerHTML = privacyPolicyTxt;
    
}

function termsOfUse(){    
    blockElements(true);
    closeLegalsBtn.classList.remove('hide');    
    closeLegalsBtn.classList.remove('disabled');
    closeLegalsBtn.disabled = false;
    userInput.classList.add('hide');
    chatbox.innerHTML = "";
    chatbox.innerHTML = termsOfUseTxt;

}

function closeLegals(){
    blockElements(false);
    closeLegalsBtn.classList.add('hide');
    userInput.classList.remove('hide');
    chatbox.innerHTML = "";
    neutralMode();
}