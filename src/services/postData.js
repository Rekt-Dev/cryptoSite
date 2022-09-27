
  
  // Example POST method implementation:
export async function postData(url = '', data = {}) {
  // Default options are marked with *

  return response.json(); // parses JSON response into native JavaScript objects
}

postData(`https://api.cryptonator.com/api/ticker/btc-usd`)
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });