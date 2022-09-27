export  async function getData(){



 await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => console.log(`this is the error from getData mofo : ${err}`))}
  
  
  
  