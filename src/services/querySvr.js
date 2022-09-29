
export async function querySvr (){
    

    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

const apiKey = "ae892c4004msh44f9eb6e9b4441cp13282cjsn9e8bfa4b5636";
const url = "https://api.coinranking.com/v2/coins";
const queryString = new URLSearchParams({
  "x-access-token": apiKey,
  search: "Bit",
});

let response = await fetch(`${url}?${queryString}`)
  .then((response) => response.json())
  .then((response) => {
    if (response.status === "success") {
      console.log("fetch success", `${response}`);
      const html = response.data.coins.map(
        (coin) => `
        <tr>
          <td>${coin.rank}</td>
          <td>${coin.name}</td>
          <td>${coin.price}</td>
        </tr>
      `
      );
    } else {
      `<tr><td colspan="3">${response.message}</td></tr>`;
    }
  })
  .catch((error) => {
    console.error(error);
  });
}