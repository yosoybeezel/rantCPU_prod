async function getTypeOfResponse(input){
    let bestMatch = { key: null, response: null, score: -1 };
    
    bestMatch = await compareStrings(input, rantCPUobj.getType);
    
    if (bestMatch.score >= 0.75) { // Adjust the threshold as needed

        switch (bestMatch.key) {
            case 'affirmative':
                typeResponse = 'positive';

                break;
            case 'negative':
                typeResponse = 'negative';

                break;
        }
        

    } else {

        typeResponse = 'another';

    }

    return typeResponse;
}