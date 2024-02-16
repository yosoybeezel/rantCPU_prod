const defrag_Container_Inputs = document.getElementById('defrag_Container_Inputs');

function blockElements(bool) {
    
    // Select all input elements
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
        input.disabled = bool;
        if(bool){
         input.classList.add('disabled');
        } else {
            input.classList.remove('disabled');
            
        }
    
    });

    if(!bool){
        userInput.focus();
    }      
    
};

function blockElementsNotUserInput(bool){


}
