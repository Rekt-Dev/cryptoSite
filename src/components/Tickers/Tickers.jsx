import { React } from "react";
//import App from "./App";

export const Tickers = (props) => {
  return (
    <div className="flexRow tickerNames Header">
      <div className="tickers-internal Btc">
        BTC <br />
        {Number(props.coins[0]).toFixed(0)}
      </div>

      <div className="tickers-internal justifyCenter Eth">
        ETH <br />
        {Number(props.coins[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter Bnb">
        BNB {Number(props.coins[2]).toFixed(3)}
      </div>

      <div className="tickers-internal justifyCenter Xrp">
        XRPee {Number(props.coins[3]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter Ada">
        ADA {Number(props.coins[4]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter Sol">
        SOL {Number(props.coins[5]).toFixed(3)}
      </div>

      <div className="tickers-internal justifyCenter Doge">
        DOGE {Number(props.coins[6]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter Dot">
        DOT {Number(props.coins[7]).toFixed(3)}
      </div>

      <div className="tickers-internal justifyCenter Matic">
        MATIC {Number(props.coins[8]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter Dai">
        DAI {Number(props.coins[9]).toFixed(6)}
      </div>
    </div>
  );
};
