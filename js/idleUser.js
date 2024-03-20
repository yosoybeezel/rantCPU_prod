let idleUserMessage = null;
let idleUserOn = false;

function idleAnimation(){
    
    nukeJoke();

}

function idleUser(){
    // console.log('idleUser');
    idleUserOn = true;
    
    nukeJoke();
    
}

function idleUserStop() {
    if (idleUserMessage) {
        // console.log('idleUserStop')
        clearInterval(idleUserMessage);
        idleUserOn = false;
        idleUserMessage = null;

    }
}
  