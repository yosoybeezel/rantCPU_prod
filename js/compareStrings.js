async function compareStrings(input, options) {
    let bestMatch = { key: null, response: null, score: -1 };
  
    for (let key in options) {
      const optionsArray = options[key];
  
      optionsArray.forEach(response => {
        const responseWithoutApostrophes = response.toLowerCase().replace(/'/g, ''); // Remove apostrophes from responses
  
        // Calculate similarity score between input and response
        const score = stringSimilarity.compareTwoStrings(input, responseWithoutApostrophes);
  
        if (score > bestMatch.score) {
          bestMatch.key = key;
          bestMatch.response = response;
          bestMatch.score = score;
        }
      });
    }
  
    return bestMatch;
  }