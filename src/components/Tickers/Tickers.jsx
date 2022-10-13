import { React } from "react";
//import App from "./App";

export const Tickers = (props) => {
  return (
    <div className="flexRow tickerNames">
      <div className="tickers-internal">
        BTC <br />
        {Number(props.coins[0]).toFixed(0)}{" "}
      </div>

      <div className="tickers-internal justifyCenter">
        toilETH {Number(props.coins[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter">
        BNB {Number(props.coins[2]).toFixed(3)}
      </div>

      <div className="tickers-internal justifyCenter">
        XRPee {Number(props.coins[3]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter">
        ADA {Number(props.coins[4]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter">
        SOL {Number(props.coins[5]).toFixed(3)}
      </div>

      <div className="tickers-internal justifyCenter">
        DOGE {Number(props.coins[6]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter">
        DOT {Number(props.coins[7]).toFixed(3)}
      </div>

      <div className="tickers-internal justifyCenter">
        MATIC {Number(props.coins[8]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter">
        DAI {Number(props.coins[9]).toFixed(3)}
      </div>
    </div>
  );
};
