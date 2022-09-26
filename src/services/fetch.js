
 export const query=()=>{
     

  async function queryData() {
    const response = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
    jsonData=(await response.json());
    console.log(jsonData);
  }}