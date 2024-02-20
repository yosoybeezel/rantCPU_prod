let session = false;

function setCookie(cname, cvalue, exdays) {
    
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

};

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

async function checkSession() {
    
    session = getCookie("session");

    if (!session) {
        
        session = true;
        
        setCookie("session", true, 365);
        localStorage.setItem("welcomeMessageCount",0);
        localStorage.setItem("askSubmitTargetCount",0);
        localStorage.setItem("simonSaysGameOverCount",0);
        localStorage.setItem("simonSaysIntroCount", 0);
        localStorage.setItem("simonSaysMaxScore", 0);
        localStorage.setItem("dontSubmitMessageCount", 0);
        localStorage.setItem("emailSubmitedCount",0);
        localStorage.setItem("serviceSwitchCount",0);

    } else {    
        
        if(!localStorage.getItem("serviceSwitchCount")){
            localStorage.setItem("serviceSwitchCount", 0)
        }
        if(!localStorage.getItem("emailSubmitedCount")){
            localStorage.setItem("emailSubmitedCount", 0)
        }
        if(!localStorage.getItem("dontSubmitMessageCount")){
            localStorage.setItem("dontSubmitMessageCount", 0);
        } 
        if(!localStorage.getItem("welcomeMessageCount")){
            localStorage.setItem("welcomeMessageCount", 0);
        } 
        if(!localStorage.getItem("askSubmitTargetCount")){
            localStorage.setItem("askSubmitTargetCount", 0);
        } 
        if(!localStorage.getItem("simonSaysGameOverCount")){
            localStorage.setItem("simonSaysGameOverCount", 0);
        }
        if(!localStorage.getItem("simonSaysIntroCount")){
            localStorage.setItem("simonSaysIntroCount", 0);
        }
        if(!localStorage.getItem("simonSaysMaxScore")){
            localStorage.setItem("simonSaysMaxScore", 0);
        }

    }

    return;
};