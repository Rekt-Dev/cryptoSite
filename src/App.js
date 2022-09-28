import "./styles.css";
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
import { getData } from "./services/getData.jsx";
//import {consoleLog} from "./components/Tickers"
//import {query} from "./services/fetch"
//import cmc from "./services/cmc"

export default function App() {
  //      cmc()

  // here im testing objectifying styles for later use.
  const styles = { User: { color: "red" } };
  return (
    <div className="App">
      <div>
        <div className="Header justifyCenter">
          <Header />
          <div className="flexRow">
            <User />
            <Tickers />
            <button onClick={getData}>bitcoins price update{} </button>
            <div className="Mcap">
              <Mcap />
            </div>
          </div>
          <div>{getData}</div>
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
