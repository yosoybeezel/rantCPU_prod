async function postEmail(str){
    const urlPostEmail = 'https://n01hpxxa6a.execute-api.us-west-1.amazonaws.com/dev/subscribers/post';

    // Create an object to represent the data you want to send
    const data = {
      "email": str, 
    };
  
    const requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify(data), // Convert data to JSON string
    };
  
    fetch(urlPostEmail, requestOptions)
      .then((response) => {
        // Handle response
      })
      .then((data) => {
        
      })
      .catch((error) => {
        // Handle error
      });
  }

