export function getData(){

fetch(`https://api.cryptonator.com/api/ticker/btc-usd`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(err))
}