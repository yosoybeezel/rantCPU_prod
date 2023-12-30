async function captureEmail(str){
    
    localStorage.setItem("email", str);
    
    await postEmail(str);    
    
    setTimeout(()=>{
        
        terminal_Container.classList.add('hide');
        videoBackground.setCurrentTime(49.4);
        videoBackground.play();
        
    }, 800)
    
    
}