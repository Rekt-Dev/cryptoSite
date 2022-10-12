import "./styles.css";
import { useState } from "react";
import User from "./components/User/User";
import { Tickers } from "./components/Tickers";
import { Notifs } from "./components/Notifs";
import { Mcap } from "./components/Mcap";
import { BasicCharts } from "./components/BasicCharts";
//import {Fear} from "./components/Fear"
//import {Goi} from "./components/Goi"
import { LivePrices } from "./components/LivePrices";
import { WinLose } from "./components/WinLose";
import { Liquidations } from "./components/Liquidations";
import { Header } from "./components/Header.jsx";
import { News } from "./components/News.jsx";
//import { getData } from "./services/getData.jsx";
//import {consoleLog} from "./components/Tickers"
//import {query} from "./services/fetch"
//import cmc from "./services/cmc";
export default function App() {
  const [currencies, setCurrencies] = useState([]);
  const [btcsPrice, setBtcsPrice] = useState(0);

  //const loggedIn
  async function getData() {
    console.log(`getData activ8d`);

    const apiKey =
      "coinrankingdfa125c1105b3ec3b9af03ab2268054ae4a3c06015b4b547";
    const url = "https://api.coinranking.com/v2/coins";
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    const queryString = new URLSearchParams({
      mode: `no-cors`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": `*`,
      "x-access-token": apiKey,
      search: "Bit"
    });
    // Add the API key to the querystring
    await fetch(`${corsAnywhere}${url}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.status === "success") {
          console.log("RESPONSE SUCCESS !!!");
          let coins = response.data.coins;

          console.log(`btc ? ${coins[0].price}`);
          setCurrencies(coins);
          setBtcsPrice(coins[0].price);
          console.log(`here is btcsPrice:${btcsPrice}`);
          console.log(currencies);

          console.log(
            "success u toilet",
            `here is btcs price: ${currencies[0]}`
          );

          return currencies;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //loggedIn?

  return (
    <div className="App">
      <div>
        <div className="Header justifyCenter">
          <Header />
          <div className="flexRow">
            <Tickers />
            <button onClick={getData}>bitcoins price update </button>
            <div className="Mcap">
              <Mcap />
            </div>
          </div>
          <Notifs />
        </div>
        <div className="">
          <div></div>
          <br />
        </div>
        <div
          onClick={() => console.log("i was clicked ticker names")}
          className="tickerNames"
        ></div>
        <div id="wrapper-column" className="flexRow">
          <div className="flexColumn">
            <User />
            <WinLose />
            <Liquidations />
          </div>
          <div
            onClick={() => console.log("i was clicked basic charts")}
            className="Charts flexRow"
          >
            <BasicCharts />
          </div>
          <div className="flexColumn">
            <LivePrices />
            <WinLose />
            <Liquidations />
          </div>
          <div className="flexColumn">
            <LivePrices />
            <WinLose />
            <Liquidations />
          </div>
          <div className="News">
            <News />
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
