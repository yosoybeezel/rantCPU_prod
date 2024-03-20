async function postEmail(email) {
  const data = {
    "email": email
  };

  const requestOptions = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch("https://n01hpxxa6a.execute-api.us-west-1.amazonaws.com/dev/subscribers/post", requestOptions);
    
    if (!response.ok) {
      throw new Error(`Failed to post email: ${response.status} ${response.statusText}`);
    }

    // Optionally, you can handle the response data here if needed
  } catch (error) {
    console.error("Error posting email:", error);
    // Optionally, you can throw or handle the error further as needed
  }
}


async function validateEmail(email) {
  // Encode the email address
  const encodedEmail = encodeURIComponent(email);

  // Construct the URL with the encoded email address
  const url = `https://emailvalidation.abstractapi.com/v1?api_key=c22f3b500cc44df89e796d7e28b4f36f&email=${encodedEmail}`;

  const options = { method: 'GET' };

  fetch(url, options)
      .then(response => response.json())
      .then(response => handleResponse(response))
      .catch(err => console.error(err));
}

function handleResponse(response) {
  debugger;
  if(response.quality_score >= 0.5){
    postEmail(response.email)
  }
  
}