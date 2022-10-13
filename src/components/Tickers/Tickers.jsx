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
        BNB {Number(props.state[2]).toFixed(3)}
      </div>

      <div className="tickers-internal justifyCenter">
        XRPee {Number(props.state[3]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter">
        ADA {Number(props.state[4]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter">
        SOL {Number(props.state[5]).toFixed(3)}
      </div>

      <div className="tickers-internal justifyCenter">
        DOGE {Number(props.state[6]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter">
        DOT {Number(props.state[7]).toFixed(3)}
      </div>

      <div className="tickers-internal justifyCenter">
        MATIC {Number(props.state[8]).toFixed(4)}
      </div>

      <div className="tickers-internal justifyCenter">
        DAI {Number(props.state[9]).toFixed(3)}
      </div>
    </div>
  );
};
