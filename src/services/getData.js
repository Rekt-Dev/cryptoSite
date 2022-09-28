export async function getData() {
  // jshint esnext: true
  // This API key is only for testing, don't use this in production
  const apiKey = "coinrankingdfa125c1105b3ec3b9af03ab2268054ae4a3c06015b4b547";
  const url = "https://api.coinranking.com/v2/coins";
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
  const resultsContainer = document.getElementById("results");
  const queryString = new URLSearchParams({
    mode: `no-cors`,
    "Content-Type": "application/json",
    /*     "Access-Control-Allow-Origin": `*`,
     */ "x-access-token": apiKey,
    search: "Bit",
  });

  // Add the API key to the querystring
  fetch(`${corsAnywhere}${url}`)
    .then((response) => response.json())
    .then((response) => {
      if (response.status === "success") {
        const html = response.data.coins.map(
          (coin) => `
        <tr>
          <td>${coin.rank}</td>
          <td>${coin.name}</td>
          <td>${coin.price}</td>
        </tr>
      `
        );
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

/* 
  url = `https://api.coinranking.com/v2/coins`,
  data = {}
) {
  await fetch(url, {
    method: `GET`,
    mode: `no-cors`,
    headers: {
      "Content-Type": "application/json",

      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    referrerPolicy: "no-referrer",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) =>
      console.log(`this is the error from getData mofo : ${err}`)
    ); */
