import { React } from "react";
//import App from "./App";

export const Tickers = (props) => {
  return (
    <div className="flexRow tickerNames">
      <div className="tickers-internal">
        BTC <br />
        {Number(props.state[0]).toFixed(0)}{" "}
      </div>

      <div className="tickers-internal justifyCenter">
        toilETH {Number(props.state[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter">
        BNB {Number(props.state[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter">
        XRPee {Number(props.state[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter">
        ADA {Number(props.state[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter">
        SOL {Number(props.state[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter">
        DOGE {Number(props.state[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter">
        DOT {Number(props.state[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter">
        MATIC {Number(props.state[1]).toFixed(2)}
      </div>

      <div className="tickers-internal justifyCenter">
        DAI {Number(props.state[1]).toFixed(2)}
      </div>
    </div>
  );
};
