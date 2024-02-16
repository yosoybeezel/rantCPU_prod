let idleAnimationRequest = null;

async function idleAnimation(){
    // console.log('idleAnimation');
    

}

async function idleFunction(){
    
    idleAnimationRequest = setInterval(idleAnimation, 5000);    
}

function idleFunctionStop() {
    
    if (idleAnimationRequest) {

        clearInterval(idleAnimationRequest);
        idleAnimationRequest = null; // Set randomGestureRequest to null to indicate it's not running
      
    }
}