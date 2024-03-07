function goThroughNotes(){
    let checkNotesCount = Number(localStorage.getItem("checkNotesCount"));   

    switch(checkNotesCount){
        case 0:
            localStorage.setItem("checkNotesCount", 1)    
            notesOne();            
            break;
        case 1:            
            localStorage.setItem("checkNotesCount", 2)
            notesTwo();
            break;
        case 2:
            localStorage.setItem("checkNotesCount", 0)
            notesThree();
            break;
    }

}