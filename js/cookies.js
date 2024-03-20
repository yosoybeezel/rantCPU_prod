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

function generateUniqueId() {
    // Generate a random alphanumeric ID
    const randomId = Math.random().toString(36).substr(2, 9);
    // Get current timestamp
    const timestamp = new Date().getTime();
    // Concatenate randomId and timestamp to create a unique ID
    const uniqueId = `${randomId}_${timestamp}`;
    return uniqueId;
}

async function checkSession() {

    session = getCookie("session");

    // Generate a unique ID if it doesn't exist in local storage
    if (!localStorage.getItem("uniqueId")) {
        const uniqueId = generateUniqueId();
        localStorage.setItem("uniqueId", uniqueId);
    }

    // Define an array of default localStorage item names and their initial values
    const defaultItems = [
        { name: "welcomeMessageCount", value: 0 },
        { name: "askSubmitTargetCount", value: 0 },
        { name: "simonSaysGameOverCount", value: 0 },
        { name: "simonSaysIntroCount", value: 0 },
        { name: "simonSaysMaxScore", value: 0 },
        { name: "dontSubmitMessageCount", value: 0 },
        { name: "emailSubmitedCount", value: 0 },
        { name: "serviceSwitchCount", value: 0 },
        { name: "positiveAffirmationsCount", value: 0 },
        { name: "wordScrambleScore", value: 0 },
        { name: "wordScrambleHiScore", value: 0 },
        { name: "currentWordScramble", value: 0 },
        { name: "checkNotesCount", value: 0 },
        { name: "rantModeCount", value: 1 },
        { name: "requestTargetNameCount", value: 0 },
        { name: "simonSaysGamePlayCount", value: 0 },
        { name: "wordScrambleGamePlayCount", value: 0 },
        { name: "discordMessageCount", value: 0 }
    ];

    if (!session) {
        session = true;
        setCookie("session", true, 365);

        // Loop through default items and set them in localStorage
        defaultItems.forEach(item => {
            localStorage.setItem(item.name, item.value);
        });
    } else {
        // Loop through default items and check if they exist in localStorage
        defaultItems.forEach(item => {
            if (!localStorage.getItem(item.name)) {
                localStorage.setItem(item.name, item.value);
            }
        });
    }


    return;
};