import "./styles.css";
import { useState } from "react";
import { User } from "./components/User";
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
//import { getFinnhubPrices } from "./services/getFinnhubPrices";
//import { querySvr } from "./services/querySvr";
//import { getData } from "./services/getData.jsx";
//import {consoleLog} from "./components/Tickers"
//import {query} from "./services/fetch"
//import cmc from "./services/cmc"

export default function App() {
  const [currencies, setCurrencies] = useState([]);
  //const [serverResponse, setServerResponse] = useState({});

  async function getData() {
    // jshint esnext: true
    // This API key is only for testing, don't use this in production
    const apiKey =
      "coinrankingdfa125c1105b3ec3b9af03ab2268054ae4a3c06015b4b547";
    const irlUrl = "https://api.coinranking.com/v2/coins";
    const corsAnywhere = "https://cors-anywhere.herokuapp.com/";
    const finalizedUrl = `${corsAnywhere}${irlUrl}`;
    /*   const queryString = new URLSearchParams({
      mode: `no-cors`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": `*`,
      "x-access-token": apiKey,
      search: "Bit",
    }); */

    let fetchOptions = {
      method: `GET`,
      mode: `no-cors`,
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
    };

    {
      const response = await fetch(finalizedUrl, fetchOptions)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((err) =>
          console.log(`this is the error from getData mofo : ${err}`)
        );
    }
    return (
      <div className="App">
        <div>
          <div className="Header justifyCenter">
            <Header />
            <div className="flexRow">
              <User />
              <Tickers />
              <div className="Mcap">
                <button onClick={() => getData}> button</button>

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
              <LivePrices />
              <WinLose />
              <Liquidations />
            </div>
            <div
              onClick={() => {
                console.log("i was clicked basic charts"),
                  console.log("i was clicked mofo basic charts");
              }}
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
}
