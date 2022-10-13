import "./styles.css";
import { useEffect, useState } from "react";
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
  const [btcsPrice, setBtcsPrice] = useState(1000000);
  const [toilethsPrice, setToilethsPrice] = useState(-1500);
  const [bnbsPrice, setBnbsPrice] = useState([0]);
  const [xrpeesPrice, setXrpeessPrice] = useState([-3]);
  const [adasPrice, setAdasPrice] = useState([0]);
  const [solsPrice, setSolsPrice] = useState([]);
  const [dogesPrice, setDogesPrice] = useState([]);
  const [dotsPrice, setDotsPrice] = useState([]);
  const [maticsPrice, setMaticsPrice] = useState([]);
  const [daisPrice, setDaisPrice] = useState([]);

  /* useEffect(() => {
    getData()
    .then((data) => {
      console.log(data);
    });
  }); */

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 10000);
    return () => clearInterval(interval);
  });

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

          console.log(`btcs price:  ${coins[0].price}`);
          setCurrencies(coins);
          setBtcsPrice(coins[0].price);
          setToilethsPrice(coins[1].price);
          setBnbsPrice(coins[4].price);
          setXrpeessPrice(coins[5].price);
          setAdasPrice(coins[7].price);
          setSolsPrice(coins[8].price);
          setDogesPrice(coins[9].price);
          setDotsPrice(coins[10].price);
          setMaticsPrice(coins[11].price);
          setDaisPrice(coins[8].price);

          console.log(currencies);

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
          <div>
            This is beh teh sehs price{btcsPrice} <br />
            This is toileths price{toilethsPrice}
            <br />
            This is bnbs price{bnbsPrice}
            <br />
            This is xrpees price{xrpeesPrice}
            <br />
            This is adas price{adasPrice}
            <br />
            This is sols price{solsPrice}
            <br />
            This is doges price{dogesPrice}
            <br />
            This is dots price{dotsPrice}
            <br />
            This is matics price{maticsPrice}
            <br />
            This is dais price{daisPrice}
          </div>
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
            <BasicCharts
              state={[
                btcsPrice,
                toilethsPrice,
                bnbsPrice,
                xrpeesPrice,
                adasPrice,
                solsPrice,
                dogesPrice,
                dotsPrice,
                maticsPrice,
                daisPrice
              ]}
            />
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
