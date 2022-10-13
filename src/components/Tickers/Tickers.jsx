import { React, useState } from "react";
//import App from "./App";

export const Tickers = (props) => {
  return (
    <div className="flexRow tickerNames">
      <div className="tickers-internal">
        BTC <br />
        {Number(props.state[0]).toFixed(0)}{" "}
      </div>

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
