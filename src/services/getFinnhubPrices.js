//import { fetchFinnhubOptions } from "fetchFinnhubOptions";

export async function getFinnhubPrices() {
  const response = await fetch(
    "https://finnhub-realtime-stock-price.p.rapidapi.com/quote?symbol=AAPL",
    fetchFinnhubOptions
  )
    .then((response) => response.json())
    .then((response) => console.log(response));
  return response.catch((err) => console.error(err));
}
