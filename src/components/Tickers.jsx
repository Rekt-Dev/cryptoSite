import { React, useState } from "react";
import App from "../App";

export const Tickers = () => {
  const [jsonData, setJsonData] = useState({});

  const refreshBtcPrice = () => {
    console.log("btc price refreshed");
  };

  async function getData() {
    const response = await fetch(
      "https://api.cryptonator.com/api/ticker/btc-usd"
    );
    setJsonData(await response.json());
    console.log(jsonData);
  }

  return (
    <div className="flexRow tickerNames">
      <div className="tickers-internal justifyCenter">BTC </div>

      <div className="tickers-internal justifyCenter">ETH</div>

      <div className="tickers-internal justifyCenter">USDT</div>

      <div className="tickers-internal justifyCenter">BNB</div>

      <div className="tickers-internal justifyCenter">XRP</div>

      <div className="tickers-internal justifyCenter">ADA</div>

      <div className="tickers-internal justifyCenter">SOL</div>

      <div className="tickers-internal justifyCenter">DOGE</div>

      <div className="tickers-internal justifyCenter">9th</div>

      <div className="tickers-internal justifyCenter">10th</div>
    </div>
  );
};
